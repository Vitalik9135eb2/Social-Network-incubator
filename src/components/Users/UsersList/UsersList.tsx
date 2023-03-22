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


class UsersList extends React.Component<UsersListPropsType>{



    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            this.props.setUsers(response.data.items)
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


    render() {
        return (
            <div className={s.users__list}>
                {this.users()}
                <button >Show more</button>
            </div>
            )

    }
}


export default UsersList