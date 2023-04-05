import React from "react";
import  s from "./users.module.scss"
import UsersListContainer from "./UsersList/UsersListContainer";



export const Users = () => {

    return (
        <div className={s.users__wrap}>

            <UsersListContainer/>

        </div>
    )
}

