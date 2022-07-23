import React from 'react';
import { FcAutomatic,MdDelete } from "react-icons/md";

export default function Note(props){
    return(
        <div  className='note'>
            <h1>{props.text}</h1>
            <h3>{props.date}</h3>
            <MdDelete onClick={()=>props.dltNote(props.id)} />
        </div>
    )
}