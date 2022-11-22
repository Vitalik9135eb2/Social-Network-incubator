import React from 'react';
import {ActionsTypes, postType, profilePageType} from "../state";

export const ProfilePageReducer = (state: profilePageType, action: ActionsTypes) => {


    switch (action.type){
        case "ADD-POST":
            const newPost: postType ={
                id: 5,
                message: action.postMessage,
                likes: 0,
                disLikes: 0
            }
            state.posts.unshift(newPost)
            return state
        case "UPDATE-POST":
            state.newPost = action.postMessage
            return state
        default:
            return state
    };



}

