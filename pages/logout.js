
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import useUser from '../lib/useUser'
import { useEffect } from 'react'


export default function LogoutPage() {
    const { user, mutateUser } = useUser({
        redirectTo: '/login',
    })

    useEffect(async () => {
        await fetch('/api/logout')
            .then(res => res.json())
            .then(data => mutateUser(data))
    }, [])



    return (
        <div className={styles.fullPageLayout}>
            <header><Navbar /></header>
            <main>
                <div className={styles.mainContent}>
                    <div className={styles.topContent}>
                    </div>
                    <div className={styles.interactiveContent}>
                        <h1>You are logged out!</h1>
                    </div>
                    <div className={styles.bottomContent}>
                    </div>
                </div>
            </main>
        </div>
    )
}
