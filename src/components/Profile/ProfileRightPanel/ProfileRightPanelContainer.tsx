import React from "react";
import {connect} from "react-redux";
import {ProfileRightPanel} from "./ProfileRightPanel";
import {AppRooStateType} from "../../../redux/store";
import {friendsType} from "../../../redux/state";




type MapStatePropsType ={
        friends: Array<friendsType>
}

export type ProfileRightPanelPropsType = MapStatePropsType

const MapStateToProps = (state:AppRooStateType) : MapStatePropsType=> {
    return{
        friends: state.dialogsPage.friends
    }
}

export  const ProfileRightPanelContainer = connect(MapStateToProps)(ProfileRightPanel)