import React from "react";
import {User} from "./User/User";
import s from "./../users.module.scss"
import {UserType} from "../../../redux/reducers/UsersPageReducer";



type UsersListPropsType = {
    users: Array<UserType>
    avatar: string
    follow : (userId: number) => void
    unFollow : (userId: number) => void
    setUsers: (users: Array<UserType>) => void

}

export const UsersList = (props:UsersListPropsType) =>{


    const users = props.users.map(el => {
        return <User key={el.id}
                     id={el.id}
                     avatar={props.avatar}
                     name={el.name}
                     country={el.country}
                     email={el.email}
                     follow={el.follow}
                     onFollow={props.follow}
                     onUnfollow={props.unFollow}
        />
    })

    return(

        <div className={s.users__list}>
            {users}
        </div>
    )

}