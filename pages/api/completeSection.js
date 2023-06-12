import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '../../lib/session'
import { appendRow } from '../../lib/googleSheets';

export default withIronSessionApiRoute(handler, sessionOptions)

async function handler(req, res) {
    const user = req.session.user
    const {
        s,
        module
    } = await req.body

    try {
        if (!user || user.isLoggedIn === false) {
            res.status(401).json({ message: 'could not update' })
            return
        }
        const updatedUser = { ...user, score: 0, completed: true }
        const date = new Date().toLocaleString().split(' ')[0]
        const row = [user.id, user.name, user.section, module, s, date.slice(0, -1)]
        const result = await appendRow(process.env.GOOGLE_COMPLETE_SHEET, row, 'C6:H6')
        req.session.user = updatedUser
        await req.session.save().then(() => {
            res.json({ message: 'updated ' })
        })


    } catch (e) {
        res.status(400).json({ message: 'could not complete' })
    }
}
