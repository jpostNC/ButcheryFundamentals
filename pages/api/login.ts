import { withIronSessionApiRoute , withIronSessionSsr } from "iron-session/next";
import { ironSession } from "iron-session/express";
import { sessionOptions } from '../../lib/session'
import { NextApiRequest, NextApiResponse } from 'next'
import { appendRow } from '../../lib/googleSheets';
import 'dotenv/config'


export default withIronSessionApiRoute(loginRoute, sessionOptions)

async function loginRoute(req: NextApiRequest, res: NextApiResponse) {
    
    const {
        id,
        name,
        section
    } = req.body

    
    try {
        const row = [id, name, section, new Date().toLocaleString()]
        const result = appendRow(process.env.GOOGLE_LOGIN_SHEET, row, 'B10:E10')
        const user = { isLoggedIn: true, id: id, admin: false, section: section, score: 0, completed: false }
        req.session.user = {
            id: id,
            isLoggedIn: true,
            name: name,
            section: section, 
            score: 0, 
            completed: false }
        await req.session.save();
        res.json(user)

    } catch (error) {
        res.status(500).json({ message: 'internal server error' })
    }
    
}



/*

export default withIronSessionApiRoute(
    async function loginRoute(req, res) {

        const {
            id,
            name,
            section
        } = req.body

        
        try {
            const row = [id, name, section, new Date().toLocaleString()]
            const result = appendRow(process.env.GOOGLE_LOGIN_SHEET, row, 'B10:E10')
            const user = { isLoggedIn: true, id: id, admin: false, section: section, score: 0, completed: false }
            req.session.user = {
                id: id,
                isLoggedIn: true,
                name: name,
                section: section, 
                score: 0, 
                completed: false }
            await req.session.save();
            res.json(user)
    
        } catch (error) {
            res.status(500).json({ message: 'internal server error' })
        }
        

    },
    {
      cookieName: "myapp_cookiename",
      password: "complex_password_at_least_32_characters_long",
      // secure: true should be used in production (HTTPS) but can't be used in development (HTTP)
      //cookieOptions: {
       // secure: process.env.NODE_ENV === "production",
      //},
    },
  );

*/

