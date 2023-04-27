import s from "../../users.module.scss";
import React from "react";
import {User} from "./User";
import {UserType} from "../../../../redux/reducers/UsersPageReducer";


type UsersListPropsType = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    users: Array<UserType>
    followingInProgress: number[]
    avatar: string
    follow: (el: number) => void
    unFollow: (el: number) => void
    onPageChanged: (el: any) => void

}


export const UsersList = (props: UsersListPropsType) => {


    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const allPages = []
    for (let i = 1; i <= pagesCount; i++) {
        allPages.push(i)
    }

    const paginationItem = allPages.map(el => {

        const classNameItem = props.currentPage === el ? `${s.pagination__item} ${s.active}` : `${s.pagination__item}`

        return <li key={el} className={classNameItem} onClick={() => {
            props.onPageChanged(el)
        }}>{el}</li>
    })

    const listUsers = props.users.map(el => {
        return <User key={el.id + Math.random()}
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
                     followingInProgress={props.followingInProgress}
        />
    })

    return (
        <div className={s.users__list}>

            {listUsers}

            {/*<button >Show more</button>*/}

            <ul className={s.pagination}>
                {paginationItem}
            </ul>
        </div>
    )
}