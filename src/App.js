import './App.scss';
import React from 'react';
import { FcAutomatic,MdDelete } from "react-icons/md";
import {nanoid} from 'nanoid'
import Note from './components/Note';
import AddNote from './components/AddNote'

function App() {


  const [noteData,setNoteData]=React.useState([{
    id: Math.random(),
    text:"sample 1",
    date:"21.02.2022"
  },{
    id:Math.random(),
    text:"sample 3",
    date:"21.02.2022"
  },{
    id:Math.random(),
    text:"sample 2",
    date:"21.02.2022"
  },])

  
  const notes=noteData.map(item=>{
    return (
      <Note 
        text={item.text}
        date={item.date}
        id={item.id}
        dltNote={dltNote}
        
      />
    )
  })

  function newNote(newNote){

    const date = new Date()

    const newNoteObject={
      id:Math.random(),
      text:newNote,
      date:date.toLocaleDateString()
    }

    const newNotesArr=[...noteData,newNoteObject]

    setNoteData(newNotesArr)
  }

 
  function dltNote(id){
    console.log(id)
    const newNotesArr=noteData.filter((note)=> note.id !== id)
    setNoteData(newNotesArr)

  }

  return (
    <div className="App">
      {notes}
      <AddNote newNote={newNote} class="bg-red-250" />
      <h1 className="text-3xl font-bold underline">
    Hello world!
  </h1>
 </div>
  );
}

export default App;
