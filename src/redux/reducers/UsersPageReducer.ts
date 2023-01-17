
import {ActionsTypes} from "../state";

export type UserType ={
    id: number
    name: string
    email: string
    country: string
    follow: boolean
}

type InitialStateUsersType ={
    users: Array<UserType>
}

const initialState ={
    users:[
        {id:1, name:"Son", email: "@son.com", country: "India",   follow: true},
        {id:2, name:"Son", email: "@son.com", country: "India",   follow: false},
        {id:3, name:"Son", email: "@son.com", country: "India",   follow: false},
        {id:4, name:"Son", email: "@son.com", country: "India",   follow: false},
    ]
}

export const usersPageReducer = (state:InitialStateUsersType = initialState, action:ActionsTypes) => {


    switch (action.type){

        case "Users":
            return {...state}
        default:
            return state
    }
}