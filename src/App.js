import './App.scss';
import React from 'react';
import { FcAutomatic } from "react-icons/fc";
import {nanoid} from 'nanoid'
import Note from './components/Note';
import AddNote from './components/AddNote'

function App() {

  const [noteData,setNoteData]=React.useState([{
    id:nanoid(),
    text:"sample 1",
    date:"21.02.2022"
  },{
    id:nanoid(),
    text:"sample 3",
    date:"21.02.2022"
  },{
    id:nanoid(),
    text:"sample 2",
    date:"21.02.2022"
  },])

  
  const notes=noteData.map(item=>{
    return (
      <Note 
        text={item.text}
        date={item.date}
        id={item.id}
      />
    )
  })

  function newNote(newNote){
    console.log(newNote)
  }

  
  return (
    <div className="App">
      {notes}
      <AddNote newNote={newNote} />
    </div>
  );
}

export default App;
