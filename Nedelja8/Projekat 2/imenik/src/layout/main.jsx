import React from "react";
import korisnici from "../components/usersData";
import UserList from "../components/userList";

const Main = (props) => {
    return(
        <UserList users = {korisnici}/>
    )
}

export default Main