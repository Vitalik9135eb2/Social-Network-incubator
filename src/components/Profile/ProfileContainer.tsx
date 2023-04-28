import React from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserThunkCreator, ProfileType} from "../../redux/reducers/ProfilePageReducer";
import {AppRooStateType} from "../../redux/store";


class ProfileContainer extends React.Component<any> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.getUserThunkCreator(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile} />
        )
    }
}

type PathParams ={
    userId: string
}

type PropsType = mapStateToPropsType & mapDispatchPropsType

type ProfileContainerPropsType = RouteComponentProps<PathParams> & PropsType

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

export default connect(mapStateToProps, {getUserThunkCreator}) (WithRouterProfileComponent);