import React from "react";
import s from "../profile.module.scss";

type PostPropsType ={
    message: string
}

export const ProfilePost = (props:PostPropsType) => {

    return(
        <li className={s.posts__item}>
            <img className={s.posts__img} src="https://i.pinimg.com/originals/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg"/>
            <span>{props.message}</span>
        </li>
        )
}