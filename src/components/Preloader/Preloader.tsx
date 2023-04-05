import React from "react";
import preloader from "./loading.gif"

import s from "./preloader.module.css"

export const Preloader = React.memo( () => {


    return(
        <div className={s.wrap}>
            <img src={preloader}/>
        </div>
    )
})