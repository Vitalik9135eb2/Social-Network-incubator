import React, {ChangeEvent} from "react";
import s from "./profile.module.scss"
import {NavLink} from "react-router-dom";


import {ProfileRightPanel} from "./ProfileRightPanel/ProfileRightPanel";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePostsContainer} from "./ProfilePosts/ProfilePostsContainer";
import {ProfileRightPanelContainer} from "./ProfileRightPanel/ProfileRightPanelContainer";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUsersAC} from "../../redux/reducers/UsersPageReducer";
import {ProfilePageType} from "../../redux/reducers/ProfilePageReducer";


class ProfileContainer extends React.Component<any> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setUserProfile(response.data.items)
            // this.props.setTotalUserCount(response.data.totalCount)
            // this.props.isFetchingFunc(false)
        })
    }

    render() {
        return (
            <Profile />
        )
    }
}


let mapStateToProps = (state: ProfilePageType) => ({
    profile: state.profile
})

export default connect(mapStateToProps, {setUserProfile: setUsersAC}) (ProfileContainer);