import styles from './index.module.css'
import sqlLogo from './assets/sqlLogo.png'
import { useState } from 'react'
function App() {

  const [queryDesc, setQueryDesc] = useState("");

  return (
    <main className={styles.main}>
      <img src={sqlLogo} alt="logo" className={styles.icon} />
      <h3>Generate SQL with AI</h3>
      <form>
        <input 
          type='text'
          name='desc'
          placeholder='Describe your query'
          onChange={(e) => setQueryDesc(e.target.value)}
        />

        <input 
          type='submit'
          value='Generate query'
        />
      </form>
      </main>
  )
}

export default App
