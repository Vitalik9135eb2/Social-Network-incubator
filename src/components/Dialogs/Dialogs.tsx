import React from "react";
import s from "./dialogs.module.scss"
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogUser} from "./DialogUser/DialogUser";

export const Dialogs = () => {

    return (
        <div className={s.dialogs}>
            <ul className={s.dialogs__list}>
                <DialogUser name={"Andrei"} id={"1"}/>
                <DialogUser name={"Toni"} id={"2"}/>
            </ul>

            <div className={s.dialogs__message_wrap}>
                <div className={s.dialogs__message}>

                    <DialogItem message={"HI"}/>

                    <div className={s.dialogs__message__you}>
                        Hellow
                    </div>
                </div>

                <div className={s.dialogs__input_wrap}>
                    <input className={s.dialogs__input}/>
                    <button className={s.dialogs__btn}>Send</button>
                </div>
            </div>
        </div>
    )
}