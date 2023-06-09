import React from 'react';
import styles from "./styles.module.css"

const Profile = (props) => {
    return (
        <div className={styles.profile_container}>
            <h3 className={styles.profile_title}>Account details</h3>
            <div className={styles.profile_details}>
                <b>{props.firstName} {props.lastName}</b><br/>
                <span>id:</span>{props._id}<br/>
                <span>email:</span>{props.email}
            </div>
        </div>
    )
}

export default Profile;
