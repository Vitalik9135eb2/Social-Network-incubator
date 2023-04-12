import React, {ChangeEvent, useEffect} from "react";
import s from "./profile.module.scss"
import {NavLink, withRouter} from "react-router-dom";


import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserAC} from "../../redux/reducers/ProfilePageReducer";
import {ProfilePageType} from "../../redux/reducers/ProfilePageReducer";


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

type ProfileContainerPropsType ={

}

export const ProfileContainer = (props:any) => {

    useEffect( ()=> {
        let userId = props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            props.setUserProfile(response.data)
            // props.isFetchingFunc(false)
        })
    }, [] )

    return(
            <Profile profile={props.profile} />
    )
}



type mapStateToPropsType = {
    profile: ProfilePageType
}
let mapStateToProps = (state: any) => ({
    profile: state.profilePage.profile
})


let WithRouterProfileComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile: setUserAC}) (WithRouterProfileComponent);