import React, {ChangeEvent, useState} from "react";
import s from "./dialogs.module.scss"
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogUser} from "./DialogUser/DialogUser";
import {ActionsTypes, AddDialogAC, dialogsPageType, UpdateDialogAC} from "../../redux/state";
import {DialogChatContainer} from "./DialogChat/DialogChatContainer";
import {ReduxStoreType} from "../../redux/store";

type dialogsPagePropsType = {
    store: ReduxStoreType

}

export const Dialogs = (props:dialogsPagePropsType) => {





    return (
        <div className={s.dialogs}>
            <ul className={s.dialogs__list}>
                <DialogUser name={"Andrei"} id={"1"}/>
                <DialogUser name={"Toni"} id={"2"}/>
            </ul>

            <DialogChatContainer store={props.store}/>

        </div>
    )
}