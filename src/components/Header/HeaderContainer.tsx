import React, {useEffect} from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import axios from "axios";
import {authThunkCreater, setUserDataAC} from "../../redux/reducers/AuthReducer";
import {AppRooStateType} from "../../redux/store";
import {usersAPI} from "../../api/api";




type HeaderContainerPropsType ={
    authThunkCreater: () => void
}

class HeaderContainer extends React.Component<any, any>{

    componentDidMount() {
        this.props.authThunkCreater()
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>;
    }
}
const mapStateToProps = (state:AppRooStateType) => {
    return{
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {authThunkCreater})(HeaderContainer)