import React, {useEffect} from "react";
import {Header} from "./Header";
import {connect} from "react-redux";
import axios from "axios";
import {setUserDataAC} from "../../redux/reducers/AuthReducer";
import {AppRooStateType} from "../../redux/store";




type HeaderContainerPropsType ={
    setUserDataAC: (userId:number, email:string, login:string) => void
}

class HeaderContainer extends React.Component<any, any>{

    componentDidMount() {
        console.log(this.props)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,{
            withCredentials: true,
            headers: {
                'API-KEY': '7c5f3953-7fae-4325-9a4f-8956ec3d0d04'
            }
        }).then(response => {
            if (response.data.resultCode === 0) {
                const {id, email, login} = response.data.data
                this.props.setUserDataAC(id, email, login)
            }

        })
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

export default connect(mapStateToProps, {setUserDataAC})(HeaderContainer)