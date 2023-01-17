import React, {FC} from 'react';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {AppRooStateType, ReduxStoreType} from "./redux/store";
import {Users} from "./components/Users/Users";




const App = () => {


    return (
        <BrowserRouter>

        <div className="App">


            <main className="main">
                <NavBar/>

                <Route path="/profile" render={() => <Profile /> }/>


                <Route path="/dialogs" render={() => <Dialogs /> }/>

                <Route path="/users" render={() => <Users/> }/>
            </main>


        </div>

        </BrowserRouter>

    );
}

export default App;
