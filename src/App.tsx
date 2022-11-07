import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {appStateType} from "./redux/state";

type appPropsType ={
    state: appStateType
}


const App = (props: appPropsType ) => {

    return (
        <BrowserRouter>

        <div className="App">

            {/*<Header/>*/}

            <main className="main">
                <NavBar/>
                <Route path="/profile" render={() => <Profile
                                                        posts={props.state.profilePage.posts}
                                                        friends={props.state.friends}
                                                        />}/>
                <Route path="/dialogs" component={Dialogs}/>
            </main>


        </div>

        </BrowserRouter>

    );
}

export default App;
