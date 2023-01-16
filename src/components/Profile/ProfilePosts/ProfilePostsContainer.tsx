import React from "react";
import { AddPostAC, UpdatePostAC} from "../../../redux/state";
import {ProfilePosts} from "./ProfilePosts";
import {ReduxStoreType} from "../../../redux/store";


type ProfilePostsPropsType ={
    store: ReduxStoreType
}

export const  ProfilePostsContainer = (props: ProfilePostsPropsType) =>{
    const state = props.store.getState()


    const updatePostText = (text:string) =>{
        props.store.dispatch.bind(props.store)(UpdatePostAC(text))
    }
    const addPostText = (text:string) => {
        props.store.dispatch.bind(props.store)(AddPostAC(text))
    }

    return(
       <ProfilePosts newPost={state.profilePage.newPost} posts={state.profilePage.posts} addPostText={addPostText} updatePostText={updatePostText}/>
    )
}