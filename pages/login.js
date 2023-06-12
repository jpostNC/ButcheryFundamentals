import { useState } from 'react'
import useUser from '../lib/useUser'
import fetchJson, { FetchError } from '../lib/fetchJson'
import Button from '../components/Button'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'

export default function LoginPage() {
  const router = useRouter()
  const redir = router.query.d ? `${router.query.d}` : '/'

  const { mutateUser } = useUser({
    redirectTo: redir,
    redirectIfFound: true,
  })

  const [errorMsg, setErrorMsg] = useState('')
  const [formData, setFormData] = useState({})
  const [isFetching, setIsFetching] = useState(false)

  const handleFieldChange = (e) => {
    e.preventDefault()
    const value =
      e.target.type !== 'checkbox' ? e.target.value : e.target.checked
    const name = e.target.name

    const newFormData = {
      ...formData,
      [name]: value,
    }

    setFormData(newFormData)
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()
    setIsFetching(true)
    try {
      mutateUser(
        await fetchJson('/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        })
      )
    } catch (error) {
      if (error instanceof FetchError) {
        setErrorMsg(error.data.message)
        console.log(error.data.message)
      } else {
        console.error('An unexpected error happened:', error)
      }
    }
  }

  return (
    <div className={styles.fullPageLayout}>
      <header><Navbar login={false}/></header>
      <main>
        {isFetching &&
          <div className={styles.loadingModal}>
            <img src={'/loading.svg'} />
          </div>
        }
        <div className={styles.mainContent}>
          <div></div>
          <div>
            <form onSubmit={handleFormSubmit} className={styles.LoginForm}>
              <div className='fieldLabel'>
                <label>Enter your name as it appears on your student ID</label>
                <input name='name' type='text' placeholder={'Patty'} onChange={handleFieldChange}  required/>
              </div>
              <div className='fieldLabel'>
                <label>Student ID</label>
                <input name='id' type='text' placeholder={'567892'} onChange={handleFieldChange} required/>
              </div>
              <div className='fieldLabel'>
                <label>CRN CODE</label>
                <input name='section' type='text' placeholder={'56547'} onChange={handleFieldChange} required />
              </div>
              <div>
                <button className={styles.nextQ}><p>Submit</p></button>
              </div>
            </form>
          </div>
          <div></div>
        </div>
      </main>
    </div>
  )
}
