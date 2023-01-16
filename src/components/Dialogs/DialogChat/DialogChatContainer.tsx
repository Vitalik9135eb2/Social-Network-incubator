import React from "react";
import {DialogChat} from "./DialogChat";
import {ReduxStoreType} from "../../../redux/store";
import {AddDialogAC, UpdateDialogAC} from "../../../redux/state";


type DialogChatContainerPropsType ={
    store:ReduxStoreType
}

export const DialogChatContainer = (props: DialogChatContainerPropsType) => {

    const state = props.store.getState()

    const updateInputText = (text:string) =>{
        props.store.dispatch.bind(props.store)(UpdateDialogAC(text))
    }

    const addNewMessage = (text:string) => {
        props.store.dispatch.bind(props.store)(AddDialogAC(text))
    }

    return(
        <DialogChat dialogs={state.dialogsPage.dialogs} newMessage={state.dialogsPage.newMessage} updateInputText={updateInputText} addNewMessage={addNewMessage}/>
    )
}