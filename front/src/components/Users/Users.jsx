import User from './User.jsx'

const Users = (props) => {
    return (
        props.userList 
        ?
        <ul>
            {props.userList.map((user) => (
                <User key={user._id} user={user}/>
                // <li key={user._id}>
                //     {user.firstName} {user.lastName}
                // </li>
            ))}
        </ul>
        : <p>Loading...</p>
    )
}

export default Users