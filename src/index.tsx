import React from 'react';
import './index.css';
// import store from "./redux/store"
import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./redux/store";
import {Provider} from "react-redux";




let renderTree = () => {

    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>
        ,
        document.getElementById('root')
    );
}

renderTree()

store.subscribe(() => {
    renderTree()
})

