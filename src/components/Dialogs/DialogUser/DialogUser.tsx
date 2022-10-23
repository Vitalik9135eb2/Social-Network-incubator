import React from "react";
import s from "../dialogs.module.scss"
import {NavLink} from "react-router-dom";

type DialogUserPropsType ={
    name: string
    id: string
}


export const DialogUser = (props:DialogUserPropsType) => {

    return(
        <li className={s.dialogs__item}>
            <NavLink to={"/dialogs" + props.id}>{props.name}</NavLink>
        </li>
    )
}