import React, {ChangeEvent} from "react";
import {ProfilePost} from "./ProfilePost/ProfilePost";
import s from "../profile.module.scss";
import {ActionsTypes, AddPostAC, postType, profilePageType, UpdatePostAC} from "../../../redux/state";


type ProfilePostsPropsType ={
    newPost: string
    posts: Array<postType>
    updatePostText:(text:string)=>void
    addPostText:(text:string)=>void
}

export const  ProfilePosts = (props: ProfilePostsPropsType) =>{

    const myPosts = props.posts.map(el => {
        return  <ProfilePost key={Math.random()}
                             message={el.message}
                             likes={el.likes}
                             disLikes={el.disLikes}
        />
    })


    const postMessageRef = React.createRef<HTMLTextAreaElement>()

    const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        if(postMessageRef.current){
            e && props.updatePostText(postMessageRef.current?.value)

        }
    }

    const addPostHandlerBtn = () => {
        if(postMessageRef.current){
            props.addPostText(postMessageRef.current?.value)
            props.updatePostText("")
        }
    }

    return(
        <div className={s.profile__post}>
            <div className={s.profile__newPost_wrap}>
                            <textarea className={s.profile__newPost}
                                      ref={postMessageRef}
                                      onChange={onChangeTextareaHandler}
                                      value={props.newPost}
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
    )
}