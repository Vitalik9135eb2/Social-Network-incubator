import React from 'react';
import {ActionsTypes, postType, profilePageType} from "../state";



type PostType ={
    id:number
    message: string
    likes:number
    disLikes: number
}
type ProfilePageType ={
    posts: Array<PostType>
    newPost: string
}
const initialState: ProfilePageType = {
        posts: [
            {id: 1, message: "HI I'am first post", likes: 7, disLikes: 0},
            {id: 2, message: "Coool dude!!", likes: 3, disLikes: 1},
            {id: 3, message: "Three posts", likes: 0, disLikes: 78}
        ],
        newPost: ""

}

export const profilePageReducer = (state: ProfilePageType = initialState, action: ActionsTypes) :ProfilePageType=> {


    switch (action.type){
        case "ADD-POST":
            console.log(action)
            const newPost: postType ={
                id: 5,
                message: action.postMessage,
                likes: 0,
                disLikes: 0
            }
            state.posts.unshift(newPost)
            return state

        case "UPDATE-POST":
            console.log(action)

            state.newPost = action.postMessage

            return state

        default:
            return state
    };



}

