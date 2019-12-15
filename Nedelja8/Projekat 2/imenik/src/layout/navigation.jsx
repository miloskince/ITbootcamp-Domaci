import React, { useState } from "react";
import { InputForm } from "../components/imputForm";
import UserList from "../components/userList";

const Navigation = (props) => {
    let [users, setUsers] = useState([]);
    const addUser = (name, phone) => {
        let tmp=[...users]; 
        tmp.push({name: name, phoneNumber: phone});
        setUsers(tmp)}
    return(
        <nav>
            <InputForm setUsers={addUser}/>
            <UserList users={users}/>
        </nav>
    )
}

export default Navigation