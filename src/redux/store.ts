import {combineReducers, createStore} from "redux";
import {dialogsPageReducer} from "./reducers/DialogsPageReducer";
import {profilePageReducer} from "./reducers/ProfilePageReducer";
import {usersPageReducer} from "./reducers/UsersPageReducer";

const reducers = combineReducers({
    dialogsPage:dialogsPageReducer,
    profilePage:profilePageReducer,
    usersPage:usersPageReducer
})

export const store = createStore(reducers)

export type AppRooStateType = ReturnType<typeof reducers>
export type ReduxStoreType = typeof store


// @ts-ignore
window.store = store