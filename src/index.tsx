import React from 'react';
import './index.css';
import store from "./redux/state"
import ReactDOM from "react-dom";
import App from "./App";




let renderTree = () => {
    ReactDOM.render(
        <App store={store}
             // addPost={store.addPost}
             // updatePost={store.updatePost}
             // addDialogMessage={store.addDialogMessage}
             // updateMessage={store.updateMessage}
        />,
        document.getElementById('root')
    );
}

renderTree()

store.subscribe(renderTree)

