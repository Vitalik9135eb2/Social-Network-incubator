import React, {ChangeEvent} from "react";
import s from "./profile.module.scss"
import {NavLink} from "react-router-dom";


import {ProfileRightPanel} from "./ProfileRightPanel/ProfileRightPanel";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ProfilePostsContainer} from "./ProfilePosts/ProfilePostsContainer";
import {ProfileRightPanelContainer} from "./ProfileRightPanel/ProfileRightPanelContainer";
import {ProfilePageType} from "../../redux/reducers/ProfilePageReducer";



type ProfilePropsType = {
    profile: ProfilePageType
}

export const Profile = (props: ProfilePropsType) => {
    console.log(props)
    return (
        <div className={s.profile}>
            <div className={s.profile__left}>

                <ProfileInfo info={props.profile}/>

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

                 <ProfilePostsContainer/>
                </div>

            </div>


            <ProfileRightPanelContainer/>

        </div>
    )
}