import {connect} from "react-redux";
import {AppRooStateType} from "../../../redux/store";
import {UsersList} from "./UsersList";
import {followAC, setUsersAC, unFollowAC, UserType} from "../../../redux/reducers/UsersPageReducer";
import {Dispatch} from "redux";




export type MapStatePropsType = {
    users: Array<UserType>
    avatar: string
}

export type MapDispatchPropsType ={
    follow : (userId: number) => void
    unFollow : (userId: number) => void
    setUsers: (users: Array<UserType>) => void
}


const mapStateToProps = (state:AppRooStateType):MapStatePropsType =>{

    const avatarDefault = "https://sunmag.me/wp-content/uploads/2019/11/sunmag-003-small-avatar.png"

    return {
        users: state.usersPage.users,
        avatar: `${avatarDefault}`
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
        }
    }
}


export const UsersListContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList)