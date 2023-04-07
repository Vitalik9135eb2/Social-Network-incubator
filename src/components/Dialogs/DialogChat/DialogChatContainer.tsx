import React from "react";
import {DialogChat} from "./DialogChat";
import {AppRooStateType, ReduxStoreType} from "../../../redux/store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AddDialogAC, DialogsType, UpdateDialogAC} from "../../../redux/reducers/DialogsPageReducer";


type MapStatePropsType ={
    dialogs: Array<DialogsType>
    newMessage: string
}
type MapDispatchPropsType = {
    updateInputText: (text:string) => void
    addNewMessage:(text:string) => void
}

export type DialogPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateToProps = (state:AppRooStateType):MapStatePropsType =>{
    return{
        dialogs: state.dialogsPage.dialogs,
        newMessage: state.dialogsPage.newMessage
    }
}


const mapDispatchToProps = (dispatch: Dispatch ):MapDispatchPropsType => {
    return{
        updateInputText: (text:string) => {
            dispatch(UpdateDialogAC(text))
        },

        addNewMessage: (text: string) => {
            dispatch(AddDialogAC(text))
        }
    }
}

export const DialogChatContainer = connect(mapStateToProps,mapDispatchToProps)(DialogChat)