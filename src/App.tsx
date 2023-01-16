import React, {FC} from 'react';
import './App.css';
import {NavBar} from "./components/NavBar/NavBar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {AppRooStateType, ReduxStoreType} from "./redux/store";

type appPropsType ={
    store: ReduxStoreType

}


const App: FC<appPropsType> = (props) => {


    return (
        <BrowserRouter>

        <div className="App">


            <main className="main">
                <NavBar/>

                <Route path="/profile" render={() => <Profile store={props.store}  /> }/>


                <Route path="/dialogs" render={() => <Dialogs store={props.store}  /> }/>
            </main>


        </div>

        </BrowserRouter>

    );
}

export default App;
