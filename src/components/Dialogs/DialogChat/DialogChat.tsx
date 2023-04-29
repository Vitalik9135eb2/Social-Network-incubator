import React, {ChangeEvent} from "react";
import s from "../dialogs.module.scss";
import {DialogItem} from "../DialogItem/DialogItem";
import {DialogPropsType} from "./DialogChatContainer";
import {Redirect} from "react-router-dom";




export const DialogChat = (props: DialogPropsType) => {

    const dialogsMessage = props.dialogs.map(el => {
        return <DialogItem key={el.id} message={el.message} name={el.user}/>
    })

    const postMessageRef = React.createRef<HTMLInputElement>()

    const addDialogMessageHandlerBtn = () => {

        if(postMessageRef.current){
            props.addNewMessage(postMessageRef.current?.value)
            props.updateInputText("")
        }
    }

    const onchangeInputHandler = (e: ChangeEvent<HTMLInputElement>) =>{
        if(postMessageRef.current){
            e && props.updateInputText(postMessageRef.current?.value)
        }
    }

    if(props.isAuth == false) return <Redirect to={"/login"}/>

    return(
        <div className={s.dialogs__message_wrap}>
            <div className={s.dialogs__message_content}>
                {dialogsMessage}
            </div>

            <div className={s.dialogs__input_wrap}>
                <input className={s.dialogs__input}
                       onChange={onchangeInputHandler}
                       value={props.newMessage}
                       ref={postMessageRef}
                />
                <button className={s.dialogs__btn} onClick={addDialogMessageHandlerBtn}>Send</button>
            </div>
        </div>
    )
}