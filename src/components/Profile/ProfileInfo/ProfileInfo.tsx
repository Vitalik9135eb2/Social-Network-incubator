import React from "react";
import s from "../profile.module.scss";
import {avatarDefault, profileBg} from "../../../redux/state";
import star from "../../Image/icon_star.svg";
import calendar from "../../Image/icon_calendar.svg";
import {NavLink} from "react-router-dom";
import arrow from "../../Image/icon_arrow-left.svg";
import {ProfileType} from "../../../redux/reducers/ProfilePageReducer";


type ProfileInfoPropsType = {
    info: ProfileType | null
}
export const ProfileInfo = (props: ProfileInfoPropsType) => {

    const bgProfile = props.info && props.info.photos.large ? props.info.photos.large : profileBg

    const avatar = props.info && props.info.photos.small ? props.info.photos.small : avatarDefault


    return (
        <>
            <div className={s.back}>
                <NavLink className={s.back__link} to="/home">
                    <img className={s.back__img} src={arrow}/>
                    <span className={s.back__text}>Home</span>
                </NavLink>
            </div>

            <div className={s.profile__bg}>
                <img className={s.profile__bg_img} src={bgProfile}/>
            </div>

            <div className={s.profile__info}>
                <div className={s.profile__info_top}>
                    <div className={s.profile__avatar_wrap}>
                        <img className={s.profile__avatar} src={avatar}/>
                    </div>

                    <button className={s.btn}>Follow</button>
                </div>

                <div className={s.profile__user}>
                    <span className={s.profile__name}>{props.info ? props.info.fullName : ""}</span>
                    <span className={s.profile__email}>@usere gitHub</span>

                </div>

                <p className={s.profile__user_text}>

                    {props.info ? props.info.aboutMe : "Mne v padly pisati"}

                </p>

                <div className={s.profile__user_wrap}>
                    <div className={s.profile__dates}>
                        <div className={s.profile__date}>
                            <img src={star} className={s.profile__date_img}/>
                            <span>Born Jule 9</span>
                        </div>

                        <div className={s.profile__date}>
                            <img src={calendar} className={s.profile__date_img}/>
                            <span>Joined july 2002</span>
                        </div>
                    </div>

                    <div className={s.profile__follow_wrap}>
                        <div className={s.profile__follow}>
                            <span className={s.profile__follow_number}>78</span>
                            <span className={s.profile__follow_text}>Following</span>
                        </div>

                        <div className={s.profile__follow}>
                            <span className={s.profile__follow_number}>778</span>
                            <span className={s.profile__follow_text}>Follower</span>
                        </div>
                    </div>

                </div>

            </div>


        </>
    )
}