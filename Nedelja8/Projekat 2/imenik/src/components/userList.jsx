import React from "react";
import User from "./user";

const UserList = (props) => {
    let {users} = props;
    
    return(
       users.map(x => <User user = {x}/>)
    )
}

export default UserList