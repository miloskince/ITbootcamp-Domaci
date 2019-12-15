import React from "react";

const User = (props) => {
    let {user} = props;
    let {
        name,
        phoneNumber
    } = user;
    return(
        <div>
            <p>{name}</p>
            <p>{phoneNumber}</p>
        </div>
    )
}

export default User