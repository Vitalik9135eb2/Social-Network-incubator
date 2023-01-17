import {profilePageReducer} from "./reducers/ProfilePageReducer";
import {dialogsPageReducer} from "./reducers/DialogsPageReducer";

export type postType = {
    id: number
    message: string
    likes: number
    disLikes: number
}
export type friendsType = {
    id: number
    name:string
    email:string
    country: string
    follow: boolean
}
export type dialogsType = {
    id:number
    message:string
    user:string
}
export type dialogsPageType = {
    dialogs: Array<dialogsType>
    newMessage: string
}
export type profilePageType = {
    posts: Array<postType>
    newPost: string
}
export type appStateType ={
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    friends: Array<friendsType>

}

export type storeType ={
    _state:appStateType
    getState: () => appStateType
    _renderTree: () => void
    subscribe: (observer:() =>void) => void
    dispatch: (action: ActionsTypes) => void
}




export type ActionsTypes = ReturnType<typeof AddPostAC> | ReturnType<typeof UpdatePostAC>

    | ReturnType<typeof AddDialogAC> | ReturnType<typeof UpdateDialogAC> | ReturnType<typeof UsersAC>

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

export const AddDialogAC = (text: string) => {
    return{
        type: "ADD-DIALOG",
        myMessage: text,
    } as const
}
export const UpdateDialogAC = (text: string) => {
    return{
        type: "UPDATE-DIALOG",
        dialogMessage: text
    } as const
}

export const UsersAC = () => {
    return{
        type: "Users"
    } as const
}


export const profileBg = "https://na-dache.pro/uploads/posts/2021-05/1621545702_37-p-peizazhi-prirodi-45.jpg"
export const avatarDefault = "https://drasler.ru/wp-content/uploads/2019/05/%D0%A4%D0%BE%D1%82%D0%BE-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B2%D0%B0%D1%82%D1%81%D0%B0%D0%BF-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE-009.jpg"
export const friendsAvatar = "https://sunmag.me/wp-content/uploads/2019/11/sunmag-003-small-avatar.png"
export const profileGalleryImg ="https://telecomdom.com/wp-content/uploads/2020/02/kartinki-na-telefon-5-576x1024.jpg"



const store: storeType = {
    _state: {

        profilePage:{
            posts: [
                {id: 1, message: "HI I'am first post", likes: 7, disLikes: 0},
                {id: 2, message: "Coool dude!!", likes: 3, disLikes: 1},
                {id: 3, message: "Three posts", likes: 0, disLikes: 78}
            ],
            newPost: ""
        },

        dialogsPage:{
            dialogs:[
                {id:Math.random(), message:"Hi", user:"Me"},
                {id:Math.random(), message:"Hi", user:"Anna"},
            ],

            newMessage: ""
        },

        friends:[
            {id:1, name:"Son", email: "@son.com", country: "India",   follow: false},
            {id:2, name:"Anna", email: "anna@mail.ru", country: "France",  follow: false},
            {id:3, name:"Peter", email: "Peter1213@tut.by", country: "Italia", follow: false},
        ],

    },

    getState() {
        return this._state
    },
    _renderTree() {
        console.log("state update")
    },
    subscribe (observer) {
        this._renderTree = observer
    },


    dispatch(action){

        this._state.profilePage = profilePageReducer(this._state.profilePage, action)

        // this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action)

       this._renderTree()

    },


}


export default store