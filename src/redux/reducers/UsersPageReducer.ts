
type PhotosUserType = {
    small: string
    large: string
}

export type UserType ={
    id: number
    name: string
    email: string
    status: string
    country: string
    follow: boolean
    photos: PhotosUserType
}

type InitialStateUsersType ={
    users: Array<UserType>
}


type ActionsTypes = ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>

const initialState: InitialStateUsersType ={
    users:[
        // {id:1, name:"Son", email: "@son.com", status: "textxzvcxzxz", country: "India",   follow: true},
        // {id:2, name:"Son", email: "@son.com", status: "textxzvcxzxz", country: "India",   follow: false},
        // {id:3, name:"Son", email: "@son.com", status: "textxzvcxzxz", country: "India",   follow: false},
        // {id:4, name:"Son", email: "@son.com", status: "textxzvcxzxz", country: "India",   follow: false},
    ]
}

export const usersPageReducer = (state:InitialStateUsersType = initialState, action:ActionsTypes): InitialStateUsersType => {


    switch (action.type){

        case "FOLLOW":
            return {...state,users: state.users.map(el => el.id === action.id ? {...el, follow: true}: el )}

        case "UNFOLLOW":
            return {...state,users: state.users.map(el => el.id === action.id ? {...el, follow: false}: el )}

        case "SET__USERS":
           // return {...state, users: [...state.users,action.users]}
            return {...state,
                users: [...state.users,...action.users]}

        default:
            return state
    }
}

export  const followAC = (userID:number) =>{
    return{
        type: "FOLLOW",
        id: userID
    } as const
}
export  const unFollowAC = (userID: number) =>{
    return{
        type: "UNFOLLOW",
        id: userID
    } as const
}


export const setUsersAC = (users: Array<UserType>) => {
    return{
        type: "SET__USERS",
      users
    } as const
}

