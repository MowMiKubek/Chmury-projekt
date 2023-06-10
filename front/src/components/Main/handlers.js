import axios from 'axios'

const handleLogout = () => {
    if (window.confirm("Do you want to log out?")) {
        localStorage.removeItem('token')
        window.location.reload()
    }

}

const handleGetUsers = async (setUserData) => {
    const token = localStorage.getItem('token')
    const config = {
        url: 'http://localhost:5000/api/users',
        method: 'get',
        headers: { 'Content-Type': 'application/json', 'x-access-token': token }
    }
    try {
        const { data: res } = await axios(config)
        console.log(res.data)
        setUserData(res.data)
    } catch (error) {
        if (error.response && error.response.status >= 400 && error.response.status <= 500) {
            localStorage.removeItem("token")
            window.location.reload()
        }
    }
}

const fetchUserData = async (setProfileData) => {
    const token = localStorage.getItem('token')
    const config = {
        url: 'http://localhost:5000/api/users/me',
        method: 'get',
        headers: { 'Content-Type': 'application/json', 'x-access-token': token }
    }
    try {
        const { data: res } = await axios(config)
        setProfileData(res.data)
    } catch (error) {
        if (error.response && error.response.status >= 400 && error.response.status <= 500) {
            localStorage.removeItem("token")
            window.location.reload()
        }
    }
}

const handleDelete = (id) => {
    if (window.confirm("Do you want to delete account?")) {
        removeUser(id)
        handleLogout()
    }

}

const removeUser = async (id) => {
    const token = localStorage.getItem('token')
    const config = {
        url: `http://localhost:5000/api/users/${id}`,
        method: 'delete',
        headers: { 'Content-Type': 'application/json', 'x-access-token': token }
    }
    try {
        console.log(id)
        await axios(config)
    } catch (err) {
        console.log(err)
    }
}

export { handleLogout, handleGetUsers, fetchUserData, handleDelete }