import './App.css';
import React from 'react';
import { FcAutomatic } from "react-icons/fc";

function App() {

  const [noteData,setNoteData]=React.useState([])

  function takeNote(e){
    setNoteData(x=>{e.target.value})
  }

  function note(){
    if(noteData.length > 1){
      return (
        noteData.map(x=>{
          return <h2>{x}</h2>
        })
      )
    }else{
      console.log("ghjk")
    }
  }

  note()

  return (
    <div className="App">
      <textarea onChange={takeNote} />

      
    </div>
  );
}

export default App;
