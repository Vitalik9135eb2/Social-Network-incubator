import React from 'react';
import {usersAPI} from "../../api/api";
import {isFetchingAC, setUsersAC} from "./UsersPageReducer";



export type PostType ={
    id:number
    message: string
    likes:number
    disLikes: number
}

type ContactType = {
    facebook: string
    github: string
    instagram: string
    vk: string
    twitter: string
    mainLink: string
    website: string
    youtube: string
}

type PhotosType = {
    small: string
    large: string
}

export type ProfileType = {
    aboutMe: string
    contact: ContactType
    fullName:string
    lookingForAjob: boolean
    lookingForAJobDescription:string
    photos: PhotosType
    userId:number
}

export type ProfilePageType ={
    posts: PostType[]
    newPost: string
    profile: null | ProfileType
}



type ProfileActionType = ReturnType<typeof AddPostAC>| ReturnType<typeof UpdatePostAC> | ReturnType<typeof setUserAC>

const initialState: ProfilePageType = {
        posts: [],
        newPost: "",
        profile: null
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
            console.log("data form action reducer",action.profile)
            return {...state, profile: action.profile}

        default:
            return state
    };


}

export const setUserAC = (profile:ProfileType) => {
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

export const getUserThunkCreator= (userId:number) => {

    return (dispatch: any) => {
        usersAPI.profileUsers(userId).then(data =>{
            dispatch(setUserAC(data))
        })
    }
}