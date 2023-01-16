import React, {ChangeEvent} from "react";
import s from "../dialogs.module.scss";
import {DialogItem} from "../DialogItem/DialogItem";
import {AddDialogAC, dialogsType, UpdateDialogAC} from "../../../redux/state";


type DialogChatPropsType ={
    dialogs: Array<dialogsType>
    newMessage: string
    updateInputText: (text:string) =>void
    addNewMessage: (text:string) =>void
}


export const DialogChat = (props: DialogChatPropsType) => {
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
            // e && props.dispatch(UpdateDialogAC(postMessageRef.current?.value))
            e && props.updateInputText(postMessageRef.current?.value)
        }
    }

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