import React, {ChangeEvent, useEffect} from "react";
import s from "./profile.module.scss"
import {NavLink, RouteComponentProps, withRouter} from "react-router-dom";


import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {ProfileType, setUserAC} from "../../redux/reducers/ProfilePageReducer";
import {ProfilePageType} from "../../redux/reducers/ProfilePageReducer";
import {AppRooStateType} from "../../redux/store";


// class ProfileContainer extends React.Component<any> {
//
//     componentDidMount() {
//         let userId = this.props.match.params.userId;
//         axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
//         // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
//             this.props.setUserProfile(response.data.items)
//             // this.props.setTotalUserCount(response.data.totalCount)
//             // this.props.isFetchingFunc(false)
//         })
//     }
//
//     render() {
//         return (
//             <Profile profile={this.props.profile} />
//         )
//     }
// }

type PathParams ={
    userId: string
}

type PropsType = mapStateToPropsType & mapDispatchPropsType

type ProfileContainerPropsType = RouteComponentProps<PathParams> & PropsType
export const ProfileContainer = (props:ProfileContainerPropsType) => {

    useEffect( ()=> {
        let userId = props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId,{
            withCredentials: true,
            headers: {
                'API-KEY': '7c5f3953-7fae-4325-9a4f-8956ec3d0d04'
            }
        }).then(response => {
            props.setUserProfile(response.data)
            console.log("data from server",response.data)
            // props.isFetchingFunc(false)
        })
    }, [] )

    return(
            <Profile profile={props.profile} />
    )
}

type mapStateToPropsType = {
    profile: ProfileType | null
}

type mapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void
}
let mapStateToProps = (state: AppRooStateType):mapStateToPropsType => ({
    profile: state.profilePage.profile
})

let WithRouterProfileComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile: setUserAC}) (WithRouterProfileComponent);