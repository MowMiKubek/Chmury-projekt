import User from './User.jsx'

const Users = (props) => {
    return (
        props.userList
            ?
            <div>
                <h2>List of the users:</h2>
                <table style={{textAlign: 'left'}}>
                    <thead>
                        <th></th><th style={{paddingRight:'10px'}}>Name</th><th style={{paddingLeft:'10px'}}>Surname</th>
                    </thead>
                    <tbody>
                        {props.userList.map((user) => (
                            <User key={user._id} user={user} />
                            // <li key={user._id}>
                            //     {user.firstName} {user.lastName}
                            // </li>
                        ))}
                    </tbody>

                </table>
            </div>

            : <p>Loading...</p>
    )
}

export default Users