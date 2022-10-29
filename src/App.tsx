import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {statePropsType} from "./redux/state";


const App: React.FC <statePropsType> = (props ) => {
    return (
        <BrowserRouter>

        <div className="App">

            {/*<Header/>*/}

            <main className="main">
                <NavBar/>
                <Route path="/profile" render={() => <Profile posts={props.state.posts}/>}/>
                <Route path="/dialogs" component={Dialogs}/>
            </main>


        </div>

        </BrowserRouter>

    );
}

export default App;
