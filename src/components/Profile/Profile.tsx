import React from "react";
import s from "./profile.module.scss"
import {ProfilePost} from "./ProfilePost/ProfilePost";

export const Profile = () => {

    return (
        <div className={s.profile}>

            <div className={s.profile__img_wrap}>
                <img className={s.profile__img}
                     src="https://mobimg.b-cdn.net/v3/fetch/94/94c56e15f13f1de4740a76742b0b594f.jpeg"/>
            </div>

            <div className={s.user}>

                <div className={s.user__avatar}>
                    <img className={s.user__avatar_img}
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe3q0OZZomTKeue8BCAkck1ZUCKdi8DmOy16KE1E4k04fQGP6FMaHkZJ-bs6OozmzRA14&usqp=CAU"/>
                </div>

                <div className={s.user__info}>
                    <h2 className={s.user__name}>Vitali Palcheuski</h2>

                    <ul className={s.user__list}>

                        <li className={s.user__list_item}>
                            Data of Birth: 5 May
                        </li>

                        <li className={s.user__list_item}>
                            City: Minsk
                        </li>

                        <li className={s.user__list_item}>
                            Education: PSU'16
                        </li>

                    </ul>
                </div>

            </div>


            <div className={s.posts}>
                <h4 className={s.posts__title}>My posts</h4>

                <div className={s.posts__input_wrap}>
                    <textarea className={s.posts__input} />

                    <button className={s.posts__btn}>Send</button>
                </div>

                <ul className={s.posts__list}>

                    <ProfilePost message={"Hi, this is first post"}/>
                    <ProfilePost message={"Hi, this is second post"}/>

                </ul>
            </div>

        </div>
    )
}