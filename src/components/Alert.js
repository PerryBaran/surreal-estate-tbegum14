import React from "react";
import "../styles/alert.css"

export default function Alert({message, success}){
    if(!message){
        return null
    }
    return (<div className={`alert alert-${success? "success":"error"}`} >
        <p>{message}</p>
    </div>)
}