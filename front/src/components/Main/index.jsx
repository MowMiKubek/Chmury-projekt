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
    switch (contentType) {
      case 'main':
        return <h4>Speedcubing jest względnie nową dyscypliną sportową, polegającą na układaniu kostek sportowych na czas. Wywodzi się od skonstruowanej w 1974 roku przez Ernő Rubik łamigłówki, która została nazwana od jego nazwiska kostką Rubika. Początkowo speedcuberzy mierzyli się jedynie na oryginalnym wynalazku Rubika, natomiast z czasem do kostki 3x3x3 dołączyły inne kostki, 2x2, 4x4, 5x5 i wiele innych. Mnogość konkurencji sprawia, że nie jest łatwo wyróżnić lepszego speedcubera patrząc jedynie na czasy jakie osiąga. Pojawia się potrzeba rozwiązania, które przedstawi wyniki w przystępny, klarowny sposób, co pozwoli na obrazowe porównanie czasów osiąganych przez układaczy i wyłonienie najlepszego.
        </h4>
      case 'users':
        return <Users userList={userList} />
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
      <h1>Speedcubers Comparator</h1>
      <nav className={styles.navbar}>
        <button className={styles.white_btn} onClick={() => setContentType('users')}>
          Users list
        </button>
        <button className={styles.white_btn} onClick={() => setContentType('detailed')}>
          Account details
        </button>
        <button className={styles.white_btn} onClick={() => setContentType('wca')}>
          WCA
        </button>
        <button className={styles.white_btn} onClick={() => handleDelete(profileData._id)}>
          Delete account
        </button>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <main>
        {renderMain()}
      </main>
      <footer className={styles.footer}>
        &copy; {new Date().getFullYear()} All rights reserved. Made with ❤️ by Jakub Maciej Tkaczyk and Radosław Tomczyk
      </footer>
    </div>
  )
}

export default Main
