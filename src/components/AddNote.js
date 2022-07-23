import React from 'react';

export default function(props){
    
    
    const [newNote, setNewNote]=React.useState("")

    function handleChange(e){
        setNewNote(e.target.value)
    }
    
    function saveBtn(){
        props.newNote(newNote)
    }
    
    
    return(
        <div>
            <textarea onChange={handleChange} />
            <div className='footer'>
                <button onClick={saveBtn}>save</button>
            </div>
        </div>
    )
}