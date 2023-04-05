import {connect} from "react-redux";
import {AppRooStateType} from "../../../redux/store";
import {
    followAC, isFetchingAC,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    unFollowAC,
    UserType
} from "../../../redux/reducers/UsersPageReducer";
import {Dispatch} from "redux";

import React from "react";
import axios from "axios";
import {UsersList} from "./User/UsersList";
import {Preloader} from "../../Preloader/Preloader";
import state from "../../../redux/state";


export type UsersListPropsType = {
    users: Array<UserType>
    avatar: string
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalUserCount: (page: number) => void
    isFetchingFunc : (state: boolean) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}


class UsersListContainer extends React.Component<UsersListPropsType> {


    componentDidMount() {
        this.props.isFetchingFunc(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            // this.props.setTotalUserCount(response.data.totalCount)
            this.props.isFetchingFunc(false)
        })
    }

    onPageChanged = (page: number) => {
        this.props.isFetchingFunc(true)

        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.isFetchingFunc(false)

        })
    }

    render() {

        return(
        <>
            { this.props.isFetching? <Preloader/> : null}

                 <UsersList totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           users={this.props.users}
                           avatar={this.props.avatar}
                           follow={this.props.follow}
                           unFollow={this.props.unFollow}
                           onPageChanged={this.onPageChanged}
                />


        </>
        )


    }

}


export type MapStatePropsType = {
    users: Array<UserType>
    avatar: string
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}

export type MapDispatchPropsType = {
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalUserCount: (page: number) => void
    isFetchingFunc: (state: boolean) => void
}

const mapStateToProps = (state: AppRooStateType): MapStatePropsType => {

    const avatarDefault = "https://sunmag.me/wp-content/uploads/2019/11/sunmag-003-small-avatar.png"

    return {
        users: state.usersPage.users,
        avatar: `${avatarDefault}`,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {

    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },

        unFollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },

        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },

        setCurrentPage: (page: number) => {
            dispatch(setCurrentPageAC(page))
        },

        setTotalUserCount: (page: number) => {
            dispatch(setTotalUserCountAC(page))
        },

        isFetchingFunc: (state:boolean) => {
            dispatch(isFetchingAC(state))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersListContainer)