import React from 'react'

export default function Search(props){

   function searchNote(e){
    props.searchNote(e.target.value)
   }

    return(
        <div>
            <input onChange={searchNote} className='search' />
            <button>find   </button>
            <span></span>
            <button>   vazgeç</button>
        </div>
    )
}