import React from "react";
import s from "./dialogs.module.scss"
import {DialogUser} from "./DialogUser/DialogUser";
import {DialogChatContainer} from "./DialogChat/DialogChatContainer";


export const Dialogs = () => {

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogs__list}>
                <DialogUser name={"Andrei"} id={"1"}/>
                <DialogUser name={"Toni"} id={"2"}/>
            </ul>

            <DialogChatContainer/>

        </div>
    )
}