let renderTree = () => {
    console.log("state update")
}

export type defaultImgType ={
    profileBg: string
    userAvatar: string
    galleryImg: string
}
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
    avatar:string
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
    defaultImg: defaultImgType

}


const profileBg = "https://na-dache.pro/uploads/posts/2021-05/1621545702_37-p-peizazhi-prirodi-45.jpg"
const avatarDefault = "https://drasler.ru/wp-content/uploads/2019/05/%D0%A4%D0%BE%D1%82%D0%BE-%D0%BF%D1%80%D0%BE%D1%84%D0%B8%D0%BB%D1%8F-%D0%B4%D0%BB%D1%8F-%D0%B2%D0%B0%D1%82%D1%81%D0%B0%D0%BF-%D1%81%D0%BA%D0%B0%D1%87%D0%B0%D1%82%D1%8C-%D0%B1%D0%B5%D1%81%D0%BF%D0%BB%D0%B0%D1%82%D0%BD%D0%BE-009.jpg"
const friendsAvatar = "https://sunmag.me/wp-content/uploads/2019/11/sunmag-003-small-avatar.png"
const profileGalleryImg ="https://telecomdom.com/wp-content/uploads/2020/02/kartinki-na-telefon-5-576x1024.jpg"


let state = {

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
        {id:1, name:"Son", email: "@son.com", country: "India",  avatar: `${friendsAvatar}`, follow: false},
        {id:2, name:"Anna", email: "anna@mail.ru", country: "France", avatar:`${friendsAvatar}`, follow: false},
        {id:3, name:"Peter", email: "Peter1213@tut.by", country: "Italia", avatar: `${friendsAvatar}`, follow: false},
    ],

    defaultImg:{
        profileBg: `${profileBg}`,
        userAvatar:`${avatarDefault}`,
        galleryImg: `${profileGalleryImg}`
    }


}

export const addPost = (postMessage:string) => {

    const newPost: postType ={
        id: 5,
        message: postMessage,
        likes: 0,
        disLikes: 0
    }
    state.profilePage.posts.unshift(newPost)
    renderTree()
}

export const updatePost = (postMessage:string) => {
    state.profilePage.newPost = postMessage
    renderTree()

}

export const addDialogMessage = (myMessage: string) => {
    const newMessage: dialogsType = {
        id: Math.random(),
        message: myMessage,
        user: "Me"
    }
    state.dialogsPage.dialogs.push(newMessage)
    renderTree()
}

export const updateMessage = (myMessage:string) => {
    state.dialogsPage.newMessage = myMessage
    renderTree()

}

export const subscribe = (observer: () => void) => {
    renderTree = observer
}

export default state