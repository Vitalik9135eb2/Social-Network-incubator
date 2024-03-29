import React from "react";
import {ProfilePosts} from "./ProfilePosts";
import {AppRooStateType, ReduxStoreType} from "../../../redux/store";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AddPostAC, PostType, UpdatePostAC} from "../../../redux/reducers/ProfilePageReducer";


type MapStatePropsType = {
    newPost: string
    posts: Array<PostType>
}

type MapDispatchPropsType = {
    updatePostText: (text:string) => void
    addPostText: (text:string) => void
}

const mapStateToProps = (state:AppRooStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPost: state.profilePage.newPost

    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return{
        updatePostText: (text:string) =>{
            dispatch(UpdatePostAC(text))
        },
        addPostText: (text: string) => {
            dispatch(AddPostAC(text))
        }
    }
}

export const ProfilePostsContainer = connect(mapStateToProps,mapDispatchToProps)(ProfilePosts)