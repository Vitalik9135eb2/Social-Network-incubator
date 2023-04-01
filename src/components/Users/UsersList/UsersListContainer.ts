import {connect} from "react-redux";
import {AppRooStateType} from "../../../redux/store";
// import {UsersList} from "./UsersList";
import {
    followAC,
    setCurrentPageAC,
    setTotalUserCountAC,
    setUsersAC,
    unFollowAC,
    UserType
} from "../../../redux/reducers/UsersPageReducer";
import {Dispatch} from "redux";
import UsersList from "./UsersList";




export type MapStatePropsType = {
    users: Array<UserType>
    avatar: string
    pageSize: number
    totalUsersCount:number
    currentPage: number
}

export type MapDispatchPropsType ={
    follow : (userId: number) => void
    unFollow : (userId: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalUserCount: (page: number) => void
}


const mapStateToProps = (state:AppRooStateType):MapStatePropsType =>{

    const avatarDefault = "https://sunmag.me/wp-content/uploads/2019/11/sunmag-003-small-avatar.png"

    return {
        users: state.usersPage.users,
        avatar: `${avatarDefault}`,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType =>{
    return{
        follow:(userId:number)=>{
            dispatch(followAC(userId))
        },

        unFollow:(userId:number)=>{
            dispatch(unFollowAC(userId))
        },

        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },

        setCurrentPage: (page:number) =>{
            dispatch(setCurrentPageAC(page))
        },

        setTotalUserCount: (page:number) => {
            dispatch(setTotalUserCountAC(page))
        }
    }
}


export const UsersListContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList)