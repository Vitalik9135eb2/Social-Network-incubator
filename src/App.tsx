import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {addDialogMessage, appStateType, updateMessage, updatePost} from "./redux/state";
import {message} from "antd";

type appPropsType ={
    state: appStateType
    addPost: (postMessage:string) => void
    updatePost:(newPost:string) => void
    addDialogMessage: (message: string) => void
    updateMessage: (message: string) => void
}


const App = (props: appPropsType ) => {

    return (
        <BrowserRouter>

        <div className="App">

            {/*<Header/>*/}

            <main className="main">
                <NavBar/>
                <Route path="/profile" render={() => <Profile
                                                        profilePage={props.state.profilePage}
                                                        defaultImg={props.state.defaultImg}
                                                        friends={props.state.friends}
                                                        addPost={props.addPost}
                                                        updatePost={props.updatePost}
                                                        />}
                />
                <Route path="/dialogs" render={() => <Dialogs
                                                        dialogsPage={props.state.dialogsPage}
                                                        addDialogMessage={props.addDialogMessage}
                                                        updateMessage={props.updateMessage}
                                                        />
                }/>
            </main>


        </div>

        </BrowserRouter>

    );
}

export default App;
