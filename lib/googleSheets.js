const { google } = require('googleapis');
const { JWT } = require('google-auth-library');


const credentials = JSON.parse(
    Buffer.from(process.env.GOOGLE_SERVICE_KEY, "base64").toString()
);

const jwtClient = new JWT({
    email: credentials.client_email,
    key: credentials.private_key,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});


// const SheetClient = google.sheets({
//     version: "v4",
//     auth: Gauth
// });

// const auth = google.sheets({
//     projectId: 'next-butchery',
//     credentials: {
//       private_key: credential.privateKey,
//       client_email: 'butcherybot@next-butchery.iam.gserviceaccount.com',
//     },
//   })

// const auth = google.GoogleAuth({
//     scopes: ['https://www.googleapis.com/auth/cloud-platform'],
//         projectId: 'next-butchery',
//     credentials: {
//       private_key: credential.privateKey,
//       client_email: 'butcherybot@next-butchery.iam.gserviceaccount.com',
//     },
//   });

export const createSheet = async (sheetId) => {
    const sheets = google.sheets({
        version: "v4",
        auth: jwtClient
    })

    console.log(sheets)


    const resource = {
        properties: {
            title: 'Test Sheet',
        },
    };
    sheets.spreadsheets.create({
        resource,
        fields: 'spreadsheetId',
    }, (err, spreadsheet) => {
        if (err) {
            // Handle error.
            console.log(err);
        } else {
            console.log(spreadsheet)
            console.log(`Spreadsheet ID: ${spreadsheet.spreadsheetId}`);
        }
    });

}


export const checkSheets = async (sheetId) => {
    const sheets = google.sheets({
        version: "v4",
        auth: jwtClient
    })

    const request = {
        // The spreadsheet to request.
        spreadsheetId: '1iTG2a4cOU5SrUZH31Mu5BA8KKz9Bmwiq6yh77m6Tz-Y',  // TODO: Update placeholder value.

        // The ranges to retrieve from the spreadsheet.
        ranges: [],  // TODO: Update placeholder value.

        // True if grid data should be returned.
        // This parameter is ignored if a field mask was set in the request.
        includeGridData: false,  // TODO: Update placeholder value.

    };


    try {
        const response = (await sheets.spreadsheets.get(request)).data;
        // TODO: Change code below to process the `response` object:
        console.log(JSON.stringify(response, null, 2));
    } catch (err) {
        console.error(err);
    }

}

export const appendRow = async (sheetid, row, range) => {
    const sheets = google.sheets({
        version: "v4",
        auth: jwtClient
    })

    try {
        const res = await sheets.spreadsheets.values.append({
            spreadsheetId: sheetid,
            range: range,
            valueInputOption: 'USER_ENTERED',
            requestBody: {
                values: [
                    row,
                ],
            },
        });
        console.log(JSON.stringify(res, null, 2));
    } catch (err) {
        console.error(err);
    }

}
