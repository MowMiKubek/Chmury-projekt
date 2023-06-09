const User = (props) => {
    return(
        <tr><th></th><td style={{paddingRight:'10px'}}>{props.user.firstName}</td><td style={{paddingLeft:'10px'}}>{props.user.lastName}</td></tr>
    ) 
    
}

export default User