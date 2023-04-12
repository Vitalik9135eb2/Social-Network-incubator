import React from 'react';



export type PostType ={
    id:number
    message: string
    likes:number
    disLikes: number
}

export type ProfilePageType ={
    posts: Array<PostType>
    newPost: string
    profile: any
}

type ProfileType = {
    aboutMe: any
    contact: any
    fullName:any
    lookingForAjob: any
    lookingForAJobDescription:any
    photos: any
    userId:number
}

type ProfileActionType = ReturnType<typeof AddPostAC>| ReturnType<typeof UpdatePostAC> | ReturnType<typeof setUserAC>

const initialState: ProfilePageType = {
        posts: [],
        newPost: "",
        profile: {}


}

export const profilePageReducer = (state: ProfilePageType = initialState, action: ProfileActionType) :ProfilePageType=> {


    switch (action.type){
        case "ADD-POST":
            const newPost: PostType ={
                id: 5,
                message: action.postMessage,
                likes: 0,
                disLikes: 0
            }
            return {...state, posts:[newPost,...state.posts]}

        case "UPDATE-POST":
            return {...state, newPost: action.postMessage }


        case "SET_USER_PROFILE":
            return {...state, profile: action.profile}

        default:
            return state
    };


}

 export const setUserAC = (profile:ProfilePageType) => {
    return{
        type: "SET_USER_PROFILE",
        profile: profile
    } as const
}

export const AddPostAC = (textMessage:string) =>{
    return{
        type: "ADD-POST",
        postMessage: textMessage
    } as const
}

export const UpdatePostAC = (text:string) => {
    return{
        type: "UPDATE-POST",
        postMessage: text
    } as const
}