import { useEffect, useState } from "react"
import styles from "./styles.module.css"

import Users from '../Users/Users.jsx'
import Profile from "../Users/Profile.jsx"
import WCA from "../WCA"

import { handleLogout, handleGetUsers, fetchUserData, handleDelete } from './handlers.js'

const Main = () => {
  const [userList, setUserList] = useState([]);
  const [contentType, setContentType] = useState('main')
  const [profileData, setProfileData] = useState(null); // Dodajemy stan dla danych profilu

  const renderMain = () => {
    switch(contentType) {
      case 'main':
        return <h3>Strona główna</h3>
      case 'users':
        return <Users userList={userList}/>
      case 'detailed':
        return <Profile {...profileData} />
      case 'wca':
        return <WCA />
      default:
        return <p>Other option</p>
    }
  }

  useEffect(() => {
    // if(contentType === 'users')
    //   handleGetUsers(setUserList)
    handleGetUsers(setUserList) // lista userów
    fetchUserData(setProfileData) // profil usera
  }, [])

  return (
    <div className={styles.main_container}>
      <h1>MySite</h1>
      <nav className={styles.navbar}>
        <button className={styles.white_btn} onClick={() => setContentType('users')}>
          Users
        </button>
        <button className={styles.white_btn} onClick={() => setContentType('detailed')}>
          Szczegóły konta
        </button>
        <button className={styles.white_btn} onClick={() => setContentType('wca')}>
          WCA
        </button>
        <button className={styles.white_btn} onClick={() => handleDelete(profileData._id)}>
          Usuń konto
        </button>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <main>
        {renderMain()}
      </main>
    </div>
  )
}

export default Main
