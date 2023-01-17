import React from "react";
import {MapStatePropsType} from "./UsersListContainer";
import {User} from "./User/User";
import s from "./../users.module.scss"



export const UsersList = (props:MapStatePropsType) =>{

    const users = props.users.map(el => {
        return <User key={el.id}
                     avatar={props.avatar}
                     name={el.name}
                     country={el.country}
                     email={el.email}
                     follow={el.follow}
        />
    })

    return(

        <div className={s.users__list}>
            {users}
        </div>
    )

}