import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '../../lib/session'

export default withIronSessionApiRoute(handler, sessionOptions)

async function handler(req, res) {
    try {
        const user = req.session.user
        if (!user || user.isLoggedIn === false) {
            res.status(401).json({ message: 'could not update' })
            return
        }
        const resetUser = { isLoggedIn: true, id: user.id, name: user.name, section: user.section, score: 0, completed: false }
        req.session.user = resetUser
        await req.session.save().then(() => {
            res.status(200).json(resetUser)
        })

    } catch (e) {
        console.log(e)
        res.status(400).json({ message: 'could not process' })
    }
}
