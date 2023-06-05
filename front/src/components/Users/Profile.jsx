const Profile = (props) => {
    return (
        <div>
            <h3>Dane profilu</h3>
            <b>{props.firstName} {props.lastName}</b><br/>
            id: {props._id}<br/>
            email: {props.email}
        </div>
    )
}

export default Profile