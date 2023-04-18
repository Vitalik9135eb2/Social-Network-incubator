import {connect} from "react-redux";
import {AppRooStateType} from "../../../redux/store";
import {
    followAC, ifFollowingAC, isFetchingAC,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    unFollowAC,
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
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalUserCount: (page: number) => void
    isFetchingFunc: (state: boolean) => void
    ifFollowing: (state: boolean, userID:number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: number[]
}


class UsersListContainer extends React.Component<UsersListPropsType> {

    componentDidMount() {
        this.props.isFetchingFunc(true)

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            // this.props.setTotalUserCount(response.data.totalCount)
            this.props.isFetchingFunc(false)
        })
    }

    onPageChanged = (page: number) => {
        this.props.isFetchingFunc(true)
        this.props.setCurrentPage(page)

        usersAPI.getUsers(page, this.props.pageSize).then(data => {
            this.props.setUsers(data.items)
            // this.props.setTotalUserCount(response.data.totalCount)
            this.props.isFetchingFunc(false)
        })
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
                           ifFollowing={this.props.ifFollowing}
                />


            </>
        )


    }

}


// export const UsersListContainer = (props:UsersListPropsType) => {
//
//     useEffect(() => {
//         props.isFetchingFunc(true)
//             getUsers(props.currentPage,props.pageSize ).then(response => {
//                 props.setUsers(response.data.items)
//                 // this.props.setTotalUserCount(response.data.totalCount)
//                 props.isFetchingFunc(false)
//             })
//
//     },[])
//
//     const onPageChanged = (page: number) => {
//         props.isFetchingFunc(true)
//         props.setCurrentPage(page)
//         // axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${props.pageSize}`,{
//         //     withCredentials: true,
//         //     headers: {
//         //         'API-KEY': '7c5f3953-7fae-4325-9a4f-8956ec3d0d04'
//         //     }
//         // }).then(response => {
//         //     props.setUsers(response.data.items)
//         //     props.isFetchingFunc(false)
//         // })
//     }
//
//     return(
//         <>
//             { props.isFetching? <Preloader/> : null}
//
//                  <UsersList totalUsersCount={props.totalUsersCount}
//                            pageSize={props.pageSize}
//                            currentPage={props.currentPage}
//                            users={props.users}
//                            avatar={props.avatar}
//                            follow={props.follow}
//                            unFollow={props.unFollow}
//                            onPageChanged={onPageChanged}
//                 />
//
//
//         </>
//     )
// }

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
    follow: followAC,
    unFollow: unFollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurrentPageAC,
    setTotalUserCount: setTotalUserCountAC,
    isFetchingFunc: isFetchingAC,
    ifFollowing: ifFollowingAC
})(UsersListContainer)