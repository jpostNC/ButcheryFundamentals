<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li> <a href="#running-the-project-locally-for-developers">Running the Project Locally (developer)</a></li>
    <li><a href="#updating-the-google-sheets-services-call-developers-and-client">Updating the google Sheets Services call (developer / client)</a></li>
    <li><a href="#uploading-to-vercel-for-client">Uploading to Vercel (Client)</a></li>
    <li><a href="#template-sheets-for-client">Google Sheet Templates</a></li>
     <li><a href="#contacts">Contacts</a></li>
   
  </ol>
</details>
<br/>
<br/>

## RUNNING THE PROJECT LOCALLY (FOR DEVELOPERS)

### STEPS ###
  1. Fork or clone the Repo to your local machine
  
  2. Once the project is on your computer go on to terminal and go to where the project is saved, once there run the command
  * ```npm install```    
  
  3. Once all packages have been installed run the command
  * ```npm run dev```
  
  4. The Local server has now been started, in your web browser go to ```localhost:3000``` to view the web app
  
  ![](https://github.com/DDSkunkworks/ButcheryFundamentals/blob/main/readmeassets/openterminal.gif)

<br/>
<br/>


## UPDATING THE GOOGLE SHEETS SERVICES CALL (DEVELOPERS AND CLIENT)
> Make sure that the [Google sheets](#template-sheets-for-client) are copied onto the account you'd like to google services to use
> > have these's google sheets open in another tab as we will be using them in later steps

### STEPS ###
1. Go to [Google cloud services](https://console.cloud.google.com)
2. In the top left corner where it says ```Select a project``` press and select  ```New Project``` in the new window
3. After naming the project press the ```create``` button
 * once pressed a process will start where it creates the portal platform for the project (press the ```go to dashboard``` once process is finished)
4. in the top left inside of the dashboard section press the ```Go to project settings``` button
![](https://github.com/DDSkunkworks/ButcheryFundamentals/blob/main/readmeassets/goToProjectSettings.png)
 
<br/>
<br/>

5. once inside project setting section press ```Service Accounts  -> CREATE SERVICE ACCOUNT (on top bar)``` 
![](https://github.com/DDSkunkworks/ButcheryFundamentals/blob/main/readmeassets/serviceAccount.png)

6. Name the service account name whatever you'd like and press ```done```
7. Once the account has been created press the ```Actions``` button and then ```Manage Details```
![](https://github.com/DDSkunkworks/ButcheryFundamentals/blob/main/readmeassets/manageDetails.png)

<br/>
<br/>

8. In this new screen press ```Keys``` and ```Add key -> Create new key``` 
![](https://github.com/DDSkunkworks/ButcheryFundamentals/blob/main/readmeassets/keys.png)

<br/>
<br/>

9. select the ```JSON``` option in the window that popsup and press ```create``` doing this step will then save a .JSON file to your computer
10. open this .JSON file with some text editor of your choice and copy the value that is associated with the key ```client_email``` (do not destroy the .json file as we will be needing it for future steps)
> for example `"client_email": "gbc-butchery-api@gbc-butchery-388911.iam.gserviceaccount.com",`

| Key        | value           |
| ------------- |-------------  |
| client_email     | `gbc-butchery-api@gbc-butchery-388911.iam.gserviceaccount.com` |

11. in the google sheets that you made a copy of earlier in the steps press the ```share``` the button and paste the email that you copied from the previous step
![](https://github.com/DDSkunkworks/ButcheryFundamentals/blob/main/readmeassets/sharegmail.gif)

<br/>
<br/>

12. Enable the use of the [google sheets api](https://console.developers.google.com/apis/library/sheets.googleapis.com ) to allow the email write access to the sheets 

13. using [Base code 64](https://www.base64encode.org/) copy all of the contents from that .json file and paste into the encoder section of the web application, once pasted press the ```encode``` button and save the results to  a file for later use

For Developers 
---
14. Copy the id of both google sheets from the url and paste the values to the respective spots inside the .env file of the project 
* DO NOT CHANGE THE SECRET_COOKIE_PASSWORD
> for example: `https://docs.google.com/spreadsheets/d/11SijW8y4XHpFQGwHfL4sOjC9yIZ1slH5cKcrUBWIvWg/edit#gid=0`
>> id: 11SijW8y4XHpFQGwHfL4sOjC9yIZ1slH5cKcrUBWIvWg
>>> GOOGLE_LOGIN_SHEET = 11SijW8y4XHpFQGwHfL4sOjC9yIZ1slH5cKcrUBWIvWg
15. for the value ```GOOGLE_SERVICE_KEY``` paste the result from step 13
16. your application is now ready to test locally
> for testing on external server follow [uploading to vercel steps](#uploading-to-vercel-for-client) steps

<br/>
<br/>

## UPLOADING TO VERCEL (FOR CLIENT)

> Follow steps from [updating google sheets](#updating-the-google-sheets-services-call-developers-and-client) before doing this step

### STEPS ###
1. Fork this project into a github account that will be associated with Vercel
3. Go to [Vercel](https://vercel.com/) and login or signup (it is reccomended to select the github option, use the github account from step 1)
4. once on the dashboard press the ``add new`` button in the top right hand corner
5. select the ``project`` option
6. press the dropdown option of the ``select a Git Namespace`` and select ``add github account``
>a pop will appear and ask  which account you'd like Vercel to connect too
>>select the option where your forked this project too
7. once on the "almost done" page press the ``Enviroment Variables`` section
8. Copy the id of both google sheets from the url and paste the values onto vercel as values
> for example: `https://docs.google.com/spreadsheets/d/11SijW8y4XHpFQGwHfL4sOjC9yIZ1slH5cKcrUBWIvWg/edit#gid=0`
>> id: 11SijW8y4XHpFQGwHfL4sOjC9yIZ1slH5cKcrUBWIvWg

* DO NOT CHANGE THE SECRET_COOKIE_PASSWORD
* The Enviroment variables names on vercel should be the excate same as the ones in the table 


| Name        | value           |
| ------------- |-------------  |
| SECRET_COOKIE_PASSWORD     | `GjB7TFTxBdxv6vYhZrHAQABAoGAX58GJHTSpfmr0ubZ6m` |
| GOOGLE_COMPLETE_SHEET     | `ID FROM GOOGLE_SHEET` |
| GOOGLE_LOGIN_SHEET     | `ID FROM GOOGLE_SHEET` |
| GOOGLE_SERVICE_KEY     | `BASE 64 STRING FROM STEP 13. OF UPDATING THE GOOGLE SHEETS SERVICES CALL` |
<br/>
<br/>

## TEMPLATE SHEETS (FOR CLIENT)

THE FOLLOWING SHEETS ARE MEANT TO BE USED AS A COPY FOR YOUR VERSION OF THE APPLICATION 
  * to create a copy of the sheet do the following steps in the google sheet tab you have open
    * ```File -> Make a copy```

![](https://github.com/DDSkunkworks/ButcheryFundamentals/blob/main/readmeassets/copysheet.png))

#### Results Sheet  (used for display all of the students scores of all test) #### 
* [Results Sheet](https://docs.google.com/spreadsheets/d/1BEvpO5J6H6vDXG1E_EH8fYfJsqAMZVVJRsSHdE3Mp1o/edit?usp=sharing )

#### Login Sheet  (used for determining what students are logged in) #### 
* [Results Sheet](https://docs.google.com/spreadsheets/d/1BEvpO5J6H6vDXG1E_EH8fYfJsqAMZVVJRsSHdE3Mp1o/edit?usp=sharing )

<br/>
<br/>

## Contacts
* Developer [Mas Tsukada](mailto:tsukada.m@hotmail.com)
* Project Owner [Daniel Stopnicki](mailto:dan@ddskunkworks.com)
* Lead Developer [Ryan Hayes](mailto:hayes.ryan83@gmail.com)
