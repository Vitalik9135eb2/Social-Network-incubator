import React, {ChangeEvent} from "react";
import s from "./profile.module.scss"
import {NavLink} from "react-router-dom";

import arrow from "./../Image/icon_arrow-left.svg"
import star from "./../Image/icon_star.svg"
import calendar from "./../Image/icon_calendar.svg"

import {
    ActionsTypes,
    AddPostAC, avatarDefault, friendsAvatar,
    friendsType,
    postType, profileBg, profileGalleryImg,
    profilePageType,
    UpdatePostAC,
} from "../../redux/state";


import {ProfileRightPanel} from "./ProfileRightPanel/ProfileRightPanel";
import {ProfilePosts} from "./ProfilePosts/ProfilePosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import { ReduxStoreType} from "../../redux/store";
import {ProfilePostsContainer} from "./ProfilePosts/ProfilePostsContainer";

type profilePropsType = {
    store: ReduxStoreType
}

export const Profile = (props: profilePropsType) => {

    const state = props.store.getState()
    return (
        <div className={s.profile}>
            <div className={s.profile__left}>

                <ProfileInfo/>

                <div className={s.profile__left_bottom}>
                    <ul className={s.profile__nav}>
                        <li className={s.profile__nav_item}>
                            <NavLink className={`${s.profile__nav_link} ${s.test}`} to="/post-user">
                                <span>Post</span>
                            </NavLink>
                        </li>

                        <li className={s.profile__nav_item}>
                            <NavLink className={s.profile__nav_link} to="/media">
                                <span>Media</span>
                            </NavLink>
                        </li>

                        <li className={s.profile__nav_item}>
                            <NavLink className={s.profile__nav_link} to="/likes">
                                <span>Likes</span>
                            </NavLink>
                        </li>

                        <li className={s.profile__nav_item}>
                            <NavLink className={s.profile__nav_link} to="/picture">
                                <span>Picture</span>
                            </NavLink>
                        </li>
                    </ul>

                 <ProfilePostsContainer store={props.store}/>
                </div>

            </div>


            <ProfileRightPanel friends={state.dialogsPage.friends}/>

        </div>
    )
}