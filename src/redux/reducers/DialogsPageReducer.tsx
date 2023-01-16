import React from 'react';

type FriendType ={
    id:number
    name: string
    email:string
    country: string
    follow: boolean

}
type DialogsType = {
    id:number
    message:string
    user:string
}
type InitialStateType ={
    dialogs: Array<DialogsType>
    newMessage: string
    friends: Array<FriendType>

}


export type ActionsTypes = ReturnType<typeof AddDialogAC> | ReturnType<typeof UpdateDialogAC>

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

const initialState: InitialStateType = {

        dialogs:[
            {id:Math.random(), message:"Hi", user:"Me"},
            {id:Math.random(), message:"Hi", user:"Anna"},
        ],

        newMessage: "",

    friends:[
        {id:1, name:"Son", email: "@son.com", country: "India",   follow: false},
        {id:2, name:"Anna", email: "anna@mail.ru", country: "France",  follow: false},
        {id:3, name:"Peter", email: "Peter1213@tut.by", country: "Italia", follow: false},
    ]

}

export const dialogsPageReducer = (state: InitialStateType = initialState, action: ActionsTypes) : InitialStateType => {
   switch (action.type){
       case "ADD-DIALOG":
           console.log(action)
           const newMessage: DialogsType = {
               id: Math.random(),
               message: action.myMessage,
               user: "Me"
           }

           return {
               ...state, dialogs:[...state.dialogs, newMessage]
           }
       case "UPDATE-DIALOG":

           return {
               ...state, newMessage: action.dialogMessage
           }
       default:
           return state
   }
};

