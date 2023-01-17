import React from "react";

import s from "./navBar.module.scss"
import {NavLink} from "react-router-dom";

import logo from './../Image/react.svg'
import profile from './../Image/icon_user.svg'
import dialogs from './../Image/icon_message-square.svg'
import news from './../Image/icon_layout.svg'

export const NavBar = () => {

    return (
        <ul className={s.navBar}>
            <li className={s.navBar__item}>
                <NavLink className={s.navBar__logo_link} to="/profile">
                    <img className={s.navBar__logo} src={logo}/>
                    <span>My Social Network</span>
                </NavLink>
            </li>

            <li className={s.navBar__item}>
                <NavLink className={s.navBar__link} activeClassName={s.active} to="/profile">
                    <img className={s.navBar__icon} src={profile}/>
                    <span>Profile</span>
                </NavLink>
            </li>

            <li className={s.navBar__item}>
                <NavLink className={s.navBar__link} activeClassName={s.active} to="/dialogs">
                    <img className={s.navBar__icon} src={dialogs}/>
                    <span>Dialogs</span>

                </NavLink>
            </li>

            <li className={s.navBar__item}>
                <NavLink className={s.navBar__link} activeClassName={s.active} to="/users">
                    <img className={s.navBar__icon} src={news}/>
                    <span>Users</span>
                </NavLink>
            </li>

            <li className={s.navBar__item}>
                <NavLink className={s.navBar__link} activeClassName={s.active} to="/news">
                    <img className={s.navBar__icon} src={news}/>
                    <span>News</span>
                </NavLink>
            </li>

        </ul>
    )
}