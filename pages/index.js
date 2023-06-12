
import dynamic from 'next/dynamic'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import Button from '../components/Button'
import useUser from '../lib/useUser'
import Link from 'next/link'

const DynamicComponentWithNoSSR = dynamic(
  () => import('../components/QuizRender'),
  { ssr: false }
)

export default function IndexPage() {
  const { user, mutateUser } = useUser({
    redirectTo: '/login',
  })


  return (
    <div className={styles.fullPageLayout}>
      <header><Navbar /></header>
      <main>
        <div style={{ textAlign: 'center', display: 'grid', justifyContent: 'center' }}>
          <h1>Welcome to the Quiz App!</h1>
          <p>Here are some links to some of the training Modules</p>
          <div style={{ maxWidth: '400px', display: 'grid', gap: '1em', gridTemplateColumns: '1fr 1fr' }}>
            <a href={'/3DApp/Beef/splashBeef.html'}>
              <Button>Beef</Button>
            </a>
            <a href={'/3DApp/Chicken/splashChicken.html'}>
              <Button>Chicken</Button>
            </a>
            <a href={'/3DApp/Kitchen/splashKitchen.html'}>
              <Button>Kitchen</Button>
            </a> 
            <a href={'/3DApp/Fish/splashFish.html'}>
              <Button>Fish</Button>
            </a> 
            <a href={'/3DApp/Game/splashGame.html'}>
              <Button>Game</Button>
            </a>
            <a href={'/3DApp/Lamb/splashLamb.html'}>
              <Button>Lamb</Button>
            </a>
            <a href={'/3DApp/Pork/splashPork.html'}>
              <Button>Pork</Button>
            </a> 
          </div>
        </div>
      </main>
    </div>
  )
}
