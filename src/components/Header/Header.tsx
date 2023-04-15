import React from "react";
import {NavLink} from "react-router-dom";
import s from "./header.module.scss";

type HeaderPropsType ={
    isAuth: boolean
    login: string
}

export const Header = (props: HeaderPropsType) => {




    return(
        <div className={"header"}>
            <img className={"logo"} src={"/static/media/react.f5409fbdda4614275dc95e167902dab6.svg"}/>
            {props.isAuth
                ?<span>{props.login}</span>
                :<NavLink className={"link"} to={"/profile"}>Login</NavLink>
            }

        </div>
    )
}