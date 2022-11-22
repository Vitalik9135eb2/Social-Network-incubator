import React from 'react';
import {ActionsTypes, dialogsPageType, dialogsType} from "../state";

export const DialogsPageReducer = (state: dialogsPageType, action: ActionsTypes) => {
   switch (action.type){
       case "ADD-DIALOG":
           const newMessage: dialogsType = {
               id: Math.random(),
               message: action.myMessage,
               user: "Me"
           }
           state.dialogs.push(newMessage)

           return state
       case "UPDATE-DIALOG":
           state.newMessage = action.dialogMessage
           return state
       default:
           return state
   }
};

