import {combineReducers, createStore} from "redux";
import {dialogsPageReducer} from "./reducers/DialogsPageReducer";
import {profilePageReducer} from "./reducers/ProfilePageReducer";
import {usersPageReducer} from "./reducers/UsersPageReducer";
import {AuthReducer} from "./reducers/AuthReducer";

const reducers = combineReducers({
    dialogsPage:dialogsPageReducer,
    profilePage:profilePageReducer,
    usersPage:usersPageReducer,
    auth: AuthReducer
})

export const store = createStore(reducers)

export type AppRooStateType = ReturnType<typeof reducers>
export type ReduxStoreType = typeof store


// @ts-ignore
window.store = store