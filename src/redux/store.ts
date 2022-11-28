import {combineReducers, createStore} from "redux";
import {DialogsPageReducer} from "./reducers/DialogsPageReducer";
import {ProfilePageReducer} from "./reducers/ProfilePageReducer";

let reducers = combineReducers({
    DialogsPageReducer,
    ProfilePageReducer
})

let store = createStore(reducers)