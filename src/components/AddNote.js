import React from 'react';

export default function(props){

    const [newNote, setNewNote]=React.useState("")
    const characterLimit=200;

    function handleChange(e){
        if(characterLimit-newNote.length>0){
            setNewNote(e.target.value)
        }
    }
    
    function saveBtn(){
        if(newNote.trim().length>0){
            setNewNote("")
            props.newNote(newNote)
        }else{alert("please type something")}
    }
    
    
    return(
        <div className='newNote'>
            <textarea value={newNote} onChange={handleChange} />
            <div className='footer'>
                <button className={props.class} onClick={saveBtn}>save</button>
                <span>{characterLimit-newNote.length}</span>
            </div>
        </div>
    )
}