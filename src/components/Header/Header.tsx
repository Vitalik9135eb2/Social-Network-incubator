import React from "react";
import s from "./header.module.scss"


export const Header = () => {

    return (
        <div className={s.header}>
            <a className={s.header__logo} href="#">
                <img className={s.img} src="https://cdn-icons-png.flaticon.com/512/4260/4260116.png"/>

                <span>Social Network</span>
            </a>

        </div>
    )
}