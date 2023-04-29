import React, {FC} from 'react';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Users} from "./components/Users/Users";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";




const App = () => {

    return (
        <BrowserRouter>

        <div className="App">
            <HeaderContainer/>
            <main className="main">
                <NavBar/>

                <Route path="/profile/:userId" render={() => <ProfileContainer /> }/>

                <Route path="/dialogs" render={() => <Dialogs /> }/>

                <Route path="/users" render={() => <Users/> }/>

                <Route path='/login' render={() => <Login/>} />
            </main>


        </div>

        </BrowserRouter>

    );
}

export default App;
