import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Navbar.module.css'

export default function Navbar(props) {
    const {
        type,
        login
    } = props

    return <nav className={styles.nav}>
        <div className={styles.navContainer}>
            <div className={styles.logo}>
                <Image
                    id='logoImage'
                    src="/logo.webp"
                    alt="logo"
                    width={107}
                    height={107}
                />
            </div>
            <div className={styles.logoText}>
                <h1>Interactive</h1>
                <h1>Butchery</h1>
            </div>
            <div className={styles.desktopNav}>
                <h2 className={styles.websiteTitle}>{type} Quiz</h2>
                <div className={styles.navLinks}>

                    {login &&
                        <Link href={'/logout'}>
                            <p>Logout</p>
                        </Link>
                    }
                </div>
            </div>
        </div>
        <div className={styles.mobileBanner}>
            <div className={styles.mobileNavLinks}>
                
                {login &&
                    <Link href={'/logout'}>
                        <p>Logout</p>
                    </Link>
                }
            </div>
        </div>
    </nav>
}
