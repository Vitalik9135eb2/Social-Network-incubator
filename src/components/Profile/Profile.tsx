import React from "react";
import s from "./profile.module.scss"
import {ProfilePost} from "./ProfilePost/ProfilePost";
import {NavLink} from "react-router-dom";

import arrow from "./../Image/icon_arrow-left.svg"
import star from "./../Image/icon_star.svg"
import calendar from "./../Image/icon_calendar.svg"
import {friendsType, postType,} from "../../redux/state";

type profilePropsType ={
    posts: Array<postType>
    friends: Array<friendsType>
}

export const Profile = (props:profilePropsType) => {

    const profileBg = "https://na-dache.pro/uploads/posts/2021-05/1621545702_37-p-peizazhi-prirodi-45.jpg"
    const avatarDefoult = "https://drasler.ru/wp-content/uploads/2019/05/%D0%A4%D0%BE%D1%82%D0%BE-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B2%D0%B0%D1%82%D1%81%D0%B0%D0%BF-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE-009.jpg"
    const friendsAvatar = "https://sunmag.me/wp-content/uploads/2019/11/sunmag-003-small-avatar.png"
    const profileGalleryImg ="https://telecomdom.com/wp-content/uploads/2020/02/kartinki-na-telefon-5-576x1024.jpg"


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

    const myPosts = props.posts.map(el => {
          return  <ProfilePost key={Math.random()}
                               message={el.message}
                               likes={el.likes}
                               disLikes={el.disLikes}
                    />
    })

    const postMessageRef = React.createRef<HTMLTextAreaElement>()

    const addPostHandlerBtn = () => {
        console.log(postMessageRef.current?.value)
    }


    return (
        <div className={s.profile}>
            <div className={s.profile__left}>
                <div className={s.back}>
                    <NavLink className={s.back__link} to="/home">
                        <img className={s.back__img} src={arrow}/>
                        <span className={s.back__text}>Home</span>
                    </NavLink>
                </div>

                <div className={s.profile__bg}>
                    <img className={s.profile__bg_img} src={profileBg}/>
                </div>

                <div className={s.profile__info}>
                    <div className={s.profile__info_top}>
                        <div className={s.profile__avatar_wrap}>
                            <img className={s.profile__avatar} src={avatarDefoult}/>
                        </div>

                        <button className={s.btn}>Follow</button>
                    </div>

                    <div className={s.profile__user}>
                        <span className={s.profile__name}>AccountName</span>
                        <span className={s.profile__email}>@useremail</span>
                    </div>

                    <p className={s.profile__user_text}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Animi asperiores dicta, eius ipsam numquam provident quasi
                        quo recusandae ullam voluptate. Accusantium distinctio enim hic nulla quisquam.
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

                    <div className={s.profile__post}>
                        <div className={s.profile__newPost_wrap}>
                            <textarea className={s.profile__newPost}
                                      ref={postMessageRef}
                            />
                            <button className={`${s.btn} ${s.profile__newPost_btn}`}
                                    onClick={addPostHandlerBtn}
                            >
                                Add post
                            </button>
                        </div>

                        <div className={s.profile__posts_wrap}>
                            {myPosts}
                        </div>
                    </div>

                </div>
            </div>


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

        </div>
    )
}