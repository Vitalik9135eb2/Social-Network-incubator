import React from "react";

import s from "./navBar.module.scss"
import {NavLink} from "react-router-dom";

export const NavBar = () => {

    return(
        <ul className={s.navBar}>
            <li className={s.navBar__item}>
                <NavLink className={s.navBar__link} activeClassName={s.active}  to="/profile"> Profile</NavLink>
            </li>

            <li className={s.navBar__item}>
                <NavLink className={s.navBar__link} activeClassName={s.active} to="/dialogs">Dialogs</NavLink>
            </li>

            <li className={s.navBar__item}>
                <NavLink className={s.navBar__link} activeClassName={s.active} to="/newz">News</NavLink>
            </li>

        </ul>
    )
}