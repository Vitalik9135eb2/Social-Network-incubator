import React, {ChangeEvent} from "react";
import s from "./profile.module.scss"
import {ProfilePost} from "./ProfilePost/ProfilePost";
import {NavLink} from "react-router-dom";

import arrow from "./../Image/icon_arrow-left.svg"
import star from "./../Image/icon_star.svg"
import calendar from "./../Image/icon_calendar.svg"
import {defaultImgType, friendsType, postType, profilePageType,} from "../../redux/state";

type profilePropsType ={
    profilePage: profilePageType
    defaultImg: defaultImgType
    friends: Array<friendsType>
    addPost: (postMessage:string) => void
    updatePost: (newPost:string) => void
}

export const Profile = (props:profilePropsType) => {

    const profileFriends = props.friends.map(el => {

        return <li key={Math.random()} className={s.profile__friends_item}>
                <div className={s.profile__friends_info}>

                    <img className={s.profile__friends_img} src={el.avatar}/>
                    <div className={s.profile__friends}>
                        <span className={s.profile__friends_text}>{el.name}</span>
                        <span className={s.profile__friends_text}>{el.email}</span>
                        <span className={s.profile__friends_country}>{el.country}</span>
                    </div>
                </div>

            <button className={s.btn}>{el.follow ? "Unfollow" : "Follow"}</button>
        </li>
    })

    const myPosts = props.profilePage.posts.map(el => {
          return  <ProfilePost key={Math.random()}
                               message={el.message}
                               likes={el.likes}
                               disLikes={el.disLikes}
                    />
    })

    const postMessageRef = React.createRef<HTMLTextAreaElement>()

    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if(postMessageRef.current){
           e && props.updatePost(postMessageRef.current?.value)
        }
    }

    const addPostHandlerBtn = () => {
        if(postMessageRef.current){
            props.addPost(postMessageRef.current?.value)
            props.updatePost("")
        }
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
                    <img className={s.profile__bg_img} src={props.defaultImg.profileBg}/>
                </div>

                <div className={s.profile__info}>
                    <div className={s.profile__info_top}>
                        <div className={s.profile__avatar_wrap}>
                            <img className={s.profile__avatar} src={props.defaultImg.userAvatar}/>
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
                                      onChange={onChangeTextareaHandler}
                                      value={props.profilePage.newPost}
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
                        <img className={s.profile__gallery_img} src={props.defaultImg.galleryImg}/>
                    </div>

                    <div className={s.profile__gallery_item}>
                        <img className={s.profile__gallery_img} src={props.defaultImg.galleryImg}/>
                    </div>

                    <div className={s.profile__gallery_item}>
                        <img className={s.profile__gallery_img} src={props.defaultImg.galleryImg}/>
                    </div>

                    <div className={s.profile__gallery_item}>
                        <img className={s.profile__gallery_img} src={props.defaultImg.galleryImg}/>
                    </div>

                    <div className={s.profile__gallery_item}>
                        <img className={s.profile__gallery_img} src={props.defaultImg.galleryImg}/>
                    </div>

                    <div className={s.profile__gallery_item}>
                        <img className={s.profile__gallery_img} src={props.defaultImg.galleryImg}/>
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