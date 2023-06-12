import { withIronSessionApiRoute } from 'iron-session/next'
import { sessionOptions } from '../../lib/session'

export default withIronSessionApiRoute(handler, sessionOptions)

async function handler(req, res) {
    const user = req.session.user
    const {
        as,
    } = await req.body

    try {
        if (!user || user.isLoggedIn === false || as > 3) {
            res.status(401).json({ message: 'could not update' })
            return
        }
    
        const newScore = parseInt(user.score) + parseInt(as)
        if(newScore > 6) {  // Prevent score from going over module max
            newScore = 6
        }
        const updatedUser = { ...user, score: newScore, completed: false }
        req.session.user = updatedUser
        await req.session.save().then(() => {
            res.json({ message: 'updated ' + newScore   })
        })

    } catch (e) {
        res.status(400).json({ message: 'could not update score' })
    }
}
