import './App.scss';
import React from 'react';
import { FcAutomatic,MdDelete } from "react-icons/md";
import {nanoid} from 'nanoid'
import Note from './components/Note';
import AddNote from './components/AddNote'
import Search from './components/Search';

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
  const [newNoteDataArr,setNewNoteDataArr]=React.useState([])

  React.useEffect(()=>{
    setNewNoteDataArr(noteData)
  },[noteData])


  //* local storage get notes
  React.useEffect(()=>{
    const localNotes=JSON.parse(localStorage.getItem('react-note-app-data'));
    if(localNotes){

      setNoteData(localNotes)
    }
  },[])

  //* local storage set notes
  React.useEffect(()=>{
    localStorage.setItem('react-note-app-data',JSON.stringify(noteData))
  },[noteData])
   

  //* notes
  const notes=newNoteDataArr.map(item=>{
    
    return (
      <Note 
        text={item.text}
        date={item.date}
        id={item.id}
        dltNote={dltNote}
        
      />
    )
  })

  //* Add new note
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


  //* delete note
  function dltNote(id){
    console.log(id)
    const newNotesArr=noteData.filter((note)=> note.id !== id)
    setNoteData(newNotesArr)

  }

  //* Search note
  function searchNote(text){
    console.log(text)
    const newNotesArr=noteData.filter((note)=> note.text.toLowerCase().includes(text))
    setNewNoteDataArr(newNotesArr)
  }
  

  return (
    <div className="App">
      <Search 
        searchNote={searchNote}
        />
      {notes}
      <AddNote newNote={newNote} class="bg-red-250" />
 </div>
  );
}

export default App;
