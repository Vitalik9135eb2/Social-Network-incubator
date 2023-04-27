import {connect} from "react-redux";
import {AppRooStateType} from "../../../redux/store";
import {
    followAC, followThunkCreater, getUsersThunkCreator, ifFollowingAC, isFetchingAC,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    unFollowAC, unFollowThunkCreater,
    UserType
} from "../../../redux/reducers/UsersPageReducer";
import {Dispatch} from "redux";

import React, {useEffect} from "react";
import axios from "axios";
import {UsersList} from "./User/UsersList";
import {Preloader} from "../../Preloader/Preloader";
import {usersAPI} from "../../../api/api";


export type UsersListPropsType = {
    users: Array<UserType>
    avatar: string
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setCurrentPage: (page: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
    getUsers: any
}


class UsersListContainer extends React.Component<UsersListPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page: number) => {
        this.props.setCurrentPage(page)
        this.props.getUsers(page, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}

                <UsersList totalUsersCount={this.props.totalUsersCount}
                           pageSize={this.props.pageSize}
                           currentPage={this.props.currentPage}
                           users={this.props.users}
                           avatar={this.props.avatar}
                           follow={this.props.follow}
                           unFollow={this.props.unFollow}
                           onPageChanged={this.onPageChanged}
                           followingInProgress={this.props.followingInProgress}
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
    followingInProgress: number[]

}


const mapStateToProps = (state: AppRooStateType): MapStatePropsType => {

    const avatarDefault = "https://sunmag.me/wp-content/uploads/2019/11/sunmag-003-small-avatar.png"

    return {
        users: state.usersPage.users,
        avatar: `${avatarDefault}`,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default connect(mapStateToProps, {
    follow: followThunkCreater,
    unFollow: unFollowThunkCreater,
    setCurrentPage: setCurrentPageAC,
    getUsers: getUsersThunkCreator
})(UsersListContainer)