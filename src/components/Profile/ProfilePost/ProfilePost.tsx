import React from "react";
import s from "./profilePost.module.scss";

import likeImg from "./../../Image/like.svg"

type PostPropsType ={
    message: string
    likes?:  number
    disLikes?: number
}

export const ProfilePost = (props:PostPropsType) => {
    const postAvatar = "https://shapka-youtube.ru/wp-content/uploads/2021/02/prikolnaya-avatarka-dlya-patsanov.jpg"

    return(
        <div className={s.posts}>
            <div className={s.posts__header}>
                <img className={s.posts__avatar} src={postAvatar}/>

                <div className={s.posts__info}>
                    <span className={s.posts__name}>AccountName</span>
                    <span className={s.posts__email}>@emailName</span>

                </div>
            </div>

            <div className={s.posts__message_wrap}>
                <p className={s.posts__message_text}>{props.message}</p>

                <div className={s.posts__likes_wrap}>

                    <div className={s.posts__like}>
                        <button className={s.posts__likes_btn}>
                            <img className={s.posts__likes_img} src={likeImg}/>
                        </button>
                        <span className={s.posts__likes_counter}>{props.likes}</span>
                    </div>

                    <div className={s.posts__like}>
                        <button className={s.posts__likes_btn}>
                            <img className={`${s.posts__likes_img} ${s.posts__disLikes_img}`} src={likeImg}/>
                        </button>
                        <span className={s.posts__likes_counter}>{props.disLikes}</span>
                    </div>

                </div>

            </div>
        </div>
        )
}