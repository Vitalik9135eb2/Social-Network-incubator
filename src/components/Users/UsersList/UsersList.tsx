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
    setCurrentPage: (page: number) => void
    setTotalUserCount: (page: number) => void
    pageSize: number
    totalUsersCount:number
    currentPage: number

}


class UsersList extends React.Component<UsersListPropsType>{



    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            // this.props.setTotalUserCount(response.data.totalCount)
        })
    }

    users = () => {
      return this.props.users.map(el => {
          return <User key={el.id + Math.random()}
                       id={el.id}
                       photo={el.photos.small}
                       avatar={this.props.avatar}
                       name={el.name}
                       country={el.country}
                       status={el.status}
                       email={el.email}
                       follow={el.follow}
                       onFollow={this.props.follow}
                       onUnfollow={this.props.unFollow}
          />
      })
  }

    onPageChanged = (page:number) =>{
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {

        const pagesCount = Math.ceil( this.props.totalUsersCount / this.props.pageSize )

        const allPages = []

        for (let i = 1; i <= pagesCount; i++){
            allPages.push(i)
        }

        const paginationItem = allPages.map(el => {


            const classNameItem = this.props.currentPage === el ? `${s.pagination__item} ${s.active}`: `${s.pagination__item}`
            return <li key={el} className={classNameItem} onClick={() => {this.onPageChanged(el)} }>{el}</li>
        })

        console.log(pagesCount)
        return (
            <div className={s.users__list}>
                {this.users()}
                {/*<button >Show more</button>*/}

                <ul className={s.pagination}>
                    {paginationItem}
                </ul>
            </div>
            )

    }
}


export default UsersList