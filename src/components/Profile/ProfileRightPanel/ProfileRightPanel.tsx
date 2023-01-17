import React from "react";
import s from "../profile.module.scss";
import {friendsAvatar, profileGalleryImg} from "../../../redux/state";
import {NavLink} from "react-router-dom";
import {ProfileRightPanelPropsType} from "./ProfileRightPanelContainer";



export  const ProfileRightPanel = (props: ProfileRightPanelPropsType) => {
    const profileFriends = props.friends.map(el => {

        return <li key={Math.random()} className={s.profile__friends_item}>
            <div className={s.profile__friends_info}>

                <img className={s.profile__friends_img} src={friendsAvatar}/>
                <div className={s.profile__friends}>
                    <span className={s.profile__friends_text}>{el.name}</span>
                    <span className={s.profile__friends_text}>{el.email}</span>
                    <span className={s.profile__friends_country}>{el.country}</span>
                </div>
            </div>

            <button className={s.btn}>{el.follow ? "Unfollow" : "Follow"}</button>
        </li>
    })


    return(
        <div className={s.profile__right}>

            <div className={s.search__input_wrap}>
                <input placeholder="Search..." className={s.search__input}/>
            </div>

            <div className={s.profile__gallery}>
                <div className={s.profile__gallery_item}>
                    <img className={s.profile__gallery_img} src={profileGalleryImg}/>
                </div>

                <div className={s.profile__gallery_item}>
                    <img className={s.profile__gallery_img} src={profileGalleryImg}/>
                </div>

                <div className={s.profile__gallery_item}>
                    <img className={s.profile__gallery_img} src={profileGalleryImg}/>
                </div>

                <div className={s.profile__gallery_item}>
                    <img className={s.profile__gallery_img} src={profileGalleryImg}/>
                </div>

                <div className={s.profile__gallery_item}>
                    <img className={s.profile__gallery_img} src={profileGalleryImg}/>
                </div>

                <div className={s.profile__gallery_item}>
                    <img className={s.profile__gallery_img} src={profileGalleryImg}/>
                </div>
            </div>

            <div className={s.profile__friends_wrap}>
                <div className={s.profile__friends_header}>
                    <h2 className={s.profile__friends_title}>
                        Recommended friends
                    </h2>
                </div>

                <ul className={s.profile__friends_list}>
                    {profileFriends}
                </ul>

                <div className={s.profile__friends_all}>
                    <NavLink className={s.profile__friends_link} to="/friends">Show more</NavLink>
                </div>
            </div>
        </div>
    )
}