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
    headline:"sample 1",
    innerText:"lorem ipsum sit dolar ametlorem ipsum sit dolar amet",
    date:"25.02.2022"
  },{
    id:Math.random(),
    headline:"sample 3",
    innerText:"lorem ipsum sit dolar amet",
    date:"25.02.2022"
  },{
    id:Math.random(),
    headline:"sample 2",
    innerText:"",
    date:"24.02.2022"
  },{
    id:Math.random(),
    headline:"sample 4",
    innerText:"lorem ipsum sit dolar amet",
    date:"24.02.2022"
  },{
    id:Math.random(),
    headline:"sample 5",
    innerText:"",
    date:"24.02.2022"
  },{
    id:Math.random(),
    headline:"sample 6",
    innerText:"lorem ipsum sit dolar amet",
    date:"23.02.2022"
  },])
  const [newNoteDataArr,setNewNoteDataArr]=React.useState([])

  //* local storage get notes
  React.useEffect(()=>{
    const localNotes=JSON.parse(localStorage.getItem('react-note-app-data'));
    if(localNotes){

      setNoteData(localNotes)
    }
    console.log(localNotes)
  },[])

  React.useEffect(()=>{
    setNewNoteDataArr(noteData)
  },[noteData])



  //* local storage set notes
  React.useEffect(()=>{
    if (noteData) { // added if check, to check wether noteData variable has value if yes then set the value in localStorage else not.
      localStorage.setItem('react-note-app-data',JSON.stringify(noteData))
  }  },[noteData])
   

  //* notes
  const notes=newNoteDataArr.map(item=>{
    
    return (
      <Note 
        headline={item.headline}
        innerText={item.innerText}
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
      headline:newNote,
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
    const newNotesArr=noteData.filter((note)=> note.headline.toLowerCase().includes(text))
    setNewNoteDataArr(newNotesArr)
  }
  

  return (
    <div className="App">

      <Search searchNote={searchNote}/>

      <div className='notes'>
      
      {notes}

      </div>

      <AddNote newNote={newNote} />

   </div>
  );
}

export default App;
