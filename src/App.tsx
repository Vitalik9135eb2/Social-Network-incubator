import React, {FC} from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import { storeType,} from "./redux/state";
import {message} from "antd";

type appPropsType ={
    store: storeType
    // addPost: (postMessage:string) => void
    // updatePost:(newPost:string) => void
    // addDialogMessage: (message: string) => void
    // updateMessage: (message: string) => void
}


const App: FC<appPropsType> = (props) => {

    const state = props.store.getState()
    return (
        <BrowserRouter>

        <div className="App">

            {/*<Header/>*/}

            <main className="main">
                <NavBar/>
                <Route path="/profile" render={() => <Profile
                                                        profilePage={state.profilePage}
                                                        defaultImg={state.defaultImg}
                                                        friends={state.friends}
                                                        addPost={props.store.addPost.bind(props.store)}
                                                        updatePost={props.store.updatePost.bind(props.store)}
                />}
                />
                <Route path="/dialogs" render={() => <Dialogs
                                                        dialogsPage={state.dialogsPage}
                                                        addDialogMessage={props.store.addDialogMessage}
                                                        updateMessage={props.store.updateMessage}
                                                        />
                }/>
            </main>


        </div>

        </BrowserRouter>

    );
}

export default App;
