import React from "react";
import {User} from "./User/User";
import s from "./../users.module.scss"
import {UserType} from "../../../redux/reducers/UsersPageReducer";
import axios from "axios";



type UsersListPropsType = {
    users: Array<UserType>
    avatar: string
    follow : (userId: number) => void
    unFollow : (userId: number) => void
    setUsers: (users: Array<UserType>) => void

}

export const UsersList = (props:UsersListPropsType) =>{

    if(props.users.length === 0){
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items)
        })
    }


    const users = props.users.map(el => {
        console.log(el.photos)
               return <User key={el.id}
                     id={el.id}
                     photo={el.photos.small}
                     avatar={props.avatar}
                     name={el.name}
                     country={el.country}
                     status={el.status}
                     email={el.email}
                     follow={el.follow}
                     onFollow={props.follow}
                     onUnfollow={props.unFollow}
        />
    })

    return(

        <div className={s.users__list}>
            {users}

            <button>Show more</button>
        </div>
    )

}