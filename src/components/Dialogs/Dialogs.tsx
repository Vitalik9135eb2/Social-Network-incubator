import React, {ChangeEvent, useState} from "react";
import s from "./dialogs.module.scss"
import {DialogItem} from "./DialogItem/DialogItem";
import {DialogUser} from "./DialogUser/DialogUser";
import {ActionsTypes, AddDialogAC, dialogsPageType, UpdateDialogAC} from "../../redux/state";

type dialogsPagePropsType = {
    dialogsPage: dialogsPageType
    dispatch: (action: ActionsTypes) => void
}

export const Dialogs = (props:dialogsPagePropsType) => {

    const dialogsMessage = props.dialogsPage.dialogs.map(el => {
        return <DialogItem key={el.id} message={el.message} name={el.user}/>
    })

    const postMessageRef = React.createRef<HTMLInputElement>()

    const addDialogMessageHandlerBtn = () => {

        if(postMessageRef.current){
            props.dispatch(AddDialogAC(postMessageRef.current?.value))
            props.dispatch(UpdateDialogAC(""))
        }
    }

    const onchangeInputHandler = (e: ChangeEvent<HTMLInputElement>) =>{
        if(postMessageRef.current){
            e && props.dispatch(UpdateDialogAC(postMessageRef.current?.value))
        }
    }


    return (
        <div className={s.dialogs}>
            <ul className={s.dialogs__list}>
                <DialogUser name={"Andrei"} id={"1"}/>
                <DialogUser name={"Toni"} id={"2"}/>
            </ul>

            <div className={s.dialogs__message_wrap}>
                <div className={s.dialogs__message_content}>
                    {dialogsMessage}
                </div>

                <div className={s.dialogs__input_wrap}>
                    <input className={s.dialogs__input}
                           onChange={onchangeInputHandler}
                           value={props.dialogsPage.newMessage}
                           ref={postMessageRef}
                    />
                    <button className={s.dialogs__btn} onClick={addDialogMessageHandlerBtn}>Send</button>
                </div>
            </div>

        </div>
    )
}