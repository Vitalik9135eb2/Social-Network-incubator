import React from "react";
import s from "../dialogs.module.scss"

type DialogItemPropsType = {
    message: string
}

export const DialogItem = (props:DialogItemPropsType) => {

    return(
        <div className={`${s.dialogs__message_my} `}>
            {props.message}
        </div>
    )
}