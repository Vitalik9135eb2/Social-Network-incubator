
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
export type profilePageType = {
    posts: Array<postType>
}
export type appStateType ={
    profilePage: profilePageType
    friends: Array<friendsType>

}




let state = {

    profilePage:{
        posts: [
            {id: 1, message: "HI I'am first post", likes: 7, disLikes: 0},
            {id: 2, message: "Coool dude!!", likes: 3, disLikes: 1},
            {id: 3, message: "Three posts", likes: 0, disLikes: 78}
        ]
    },


    friends:[
        {id:1, name:"Son", email: "@son.com", country: "India",  follow: false},
        {id:2, name:"Anna", email: "anna@mail.ru", country: "France", follow: false},
        {id:3, name:"Peter", email: "Peter1213@tut.by", country: "Italia", follow: false},
    ]


}

export default state