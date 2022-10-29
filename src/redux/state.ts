export type postType = {
    id: number
    message: string
    likes: number
    disLikes: number
}

export type postsArrayType = {
    posts: Array<postType>
}

export type statePropsType ={
    state: postsArrayType
}


export let state = {
    posts: [
        {id: 1, message: "HI I'am first post", likes: 7, disLikes: 0},
        {id: 2, message: "Coool dude!!", likes: 3, disLikes: 1},
        {id: 3, message: "Three posts", likes: 0, disLikes: 78}
    ],
}