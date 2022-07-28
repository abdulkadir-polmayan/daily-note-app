import React from 'react'

export default function Search(props){

   function searchNote(e){
    props.searchNote(e.target.value)
   }

    return(
        <div className='search'>
            <div className='input'>
                <input placeholder='search...' onChange={searchNote} className='search' />
            </div>
        </div>
    )
}