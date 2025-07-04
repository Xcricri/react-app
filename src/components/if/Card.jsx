import { useState } from "react";

function Card(){    
    const isLoggedin = true
    let message

    if(isLoggedin){
        message = "Selamat Datang"
    }else{
        message = "Selamat Tinggal"
    }

    return(
        <div>
            <h1>{isLoggedin ? "Selamat Datang":"Selamat Tinggal"}</h1>
            <h2>{message}</h2>
        </div>
    )
}

export default Card