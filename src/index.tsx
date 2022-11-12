import React from 'react';
import './index.css';
import state, {addDialogMessage, addPost, appStateType, subscribe, updateMessage, updatePost} from "./redux/state"
import ReactDOM from "react-dom";
import App from "./App";




let renderTree = () => {
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             updatePost={updatePost}
             addDialogMessage={addDialogMessage}
             updateMessage={updateMessage}
        />,
        document.getElementById('root')
    );
}

renderTree()

subscribe(renderTree)

