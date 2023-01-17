import {connect} from "react-redux";
import {AppRooStateType} from "../../../redux/store";
import {UsersList} from "./UsersList";
import {UserType} from "../../../redux/reducers/UsersPageReducer";




export type MapStatePropsType = {
    users: Array<UserType>
    avatar: string
}

const mapStateToProps = (state:AppRooStateType):MapStatePropsType =>{

    const avatarDefault = "https://sunmag.me/wp-content/uploads/2019/11/sunmag-003-small-avatar.png"

    return {
        users: state.usersPage.users,
        avatar: `${avatarDefault}`
    }
}


export const UsersListContainer = connect(mapStateToProps)(UsersList)