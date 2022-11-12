import React from "react";
import s from "../dialogs.module.scss"

type DialogItemPropsType = {
    message: string
    name: string
}

export const DialogItem = (props:DialogItemPropsType) => {

    const messageClassName = props.name === "Me" ? s.dialogs__message_my : s.dialogs__message

    const pathAvatarMe = "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg"
    const pathAvatar = "https://mixmag.io/wp-content/uploads/2021/05/discord-avatar-1024x576.jpg"

    const userAvatar = props.name === "Me" ? pathAvatarMe : pathAvatar

    return(
        <div className={messageClassName}>
            <div className={s.dialogs__message_text}>
                {props.message}
            </div>
            <div className={s.dialogs__message_users}>
                <img className={s.dialogs__message_avatar} src={userAvatar}/>

                <span className={s.dialogs__message_name}>
                    {props.name}
                </span>
            </div>
        </div>
    )
}