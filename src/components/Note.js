import React from 'react';
export default function Note(props){
    return(
        <div className='note'>
            <h1>{props.text}</h1>
            <h3>{props.date}</h3>
        </div>
    )
}