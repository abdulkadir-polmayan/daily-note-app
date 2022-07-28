import React from 'react';
import { MdDelete } from "react-icons/md";

export default function Note(props){
    return(
        <div className='note-conteiner'>

        <div  className='note'>
            <div className='note-text'>
                <h1>{props.headline}</h1>
                <p>{props.innerText}</p>
            </div>
            
            <footer>
                <h3>{props.date}</h3>
                <MdDelete className='delete' onClick={()=>props.dltNote(props.id)} />
            </footer>
        </div>
        </div>
    )
}