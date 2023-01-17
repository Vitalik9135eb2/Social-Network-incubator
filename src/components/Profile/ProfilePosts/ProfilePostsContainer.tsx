import React from "react";
import {AddPostAC, postType, UpdatePostAC} from "../../../redux/state";
import {ProfilePosts} from "./ProfilePosts";
import {AppRooStateType, ReduxStoreType} from "../../../redux/store";
import {connect} from "react-redux";
import {Dispatch} from "redux";


// type ProfilePostsPropsType ={
//     store: ReduxStoreType
// }
//
// export const  ProfilePostsContainer = (props: ProfilePostsPropsType) =>{
//     const state = props.store.getState()
//
//
//     const updatePostText = (text:string) =>{
//         props.store.dispatch.bind(props.store)(UpdatePostAC(text))
//     }
//     const addPostText = (text:string) => {
//         props.store.dispatch.bind(props.store)(AddPostAC(text))
//     }
//
//     return(
//        <ProfilePosts newPost={state.profilePage.newPost} posts={state.profilePage.posts} addPostText={addPostText} updatePostText={updatePostText}/>
//     )
// }

type MapStatePropsType = {
    newPost: string
    posts: Array<postType>
}

type MapDispatchPropsType = {
    updatePostText: (text:string) => void
    addPostText: (text:string) => void
}

const mapStateToProps = (state:AppRooStateType): MapStatePropsType => {
    return {
        newPost: state.profilePage.newPost,
        posts: state.profilePage.posts
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return{
        updatePostText: (text) =>{
            dispatch(UpdatePostAC(text))
        },
        addPostText: (text) => {
            dispatch(AddPostAC(text))
        }
    }
}

export const ProfilePostsContainer = connect(mapStateToProps,mapDispatchToProps)(ProfilePosts)