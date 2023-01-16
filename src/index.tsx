import React from 'react';
import './index.css';
// import store from "./redux/store"
import ReactDOM from "react-dom";
import App from "./App";
import {store} from "./redux/store";




let renderTree = () => {

    ReactDOM.render(
        <App store={store} />,
        document.getElementById('root')
    );
}

renderTree()

store.subscribe(() => {
    renderTree()
})

