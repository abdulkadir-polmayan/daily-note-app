import './App.scss';
import React from 'react';
import Note from './components/Note';
import AddNote from './components/AddNote'
import Search from './components/Search';

function App() {


  const [noteData,setNoteData]=React.useState([{
    id: Math.random(),
    headline:"sample 1",
    innerText:"lorem ipsum sit dolar ametlorem ipsum sit dolar ametghbjknlmşöds asopıhgpduhfgopa doırg oıdsğoınrgh ğıhsğoın ğoısğ orıo sğı oo ",
    date:"7/29/2022"
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
    date:"7/29/2022"
  },{
    id:Math.random(),
    headline:"sample 6",
    innerText:"lorem ipsum sit dolar amet",
    date:"7/29/2022"
  },])
  const [secondNoteData,setSecondNoteData]=React.useState([])

  //* local storage get notes
  React.useEffect(()=>{
    const localNotes=JSON.parse(localStorage.getItem('react-note-app-data'));
    if(localNotes){

      setNoteData(localNotes)
    }
    console.log(localNotes)
  },[])

  React.useEffect(()=>{
    setSecondNoteData(noteData)
  },[noteData])

  //* local storage set notes
  React.useEffect(()=>{
    if (noteData) { // added if check, to check wether noteData variable has value if yes then set the value in localStorage else not.
      localStorage.setItem('react-note-app-data',JSON.stringify(noteData))
  }  },[noteData])
   
  //* item return new array depends date 

  //* notes

  // const notess= secondNoteData.filter((item)=>{
  //   return item.date== "25.02.2022"
  //   //* this return based on spesicfic date
  //   //* ı wanna grupize depends on date.
  //   })

  //   console.log(notess)

//   const notess = secondNoteData.reduce((acc, item) => {
//     const date = item.date;
//     acc[date] = acc[date] ? acc.date.push(item) : [item];
//     return acc;
// }, {})

//   console.log(notess)

// const notess = secondNoteData.map(item=>{
//   if(item.date = )
// })

 //* look date and make grup depends date 
  //* if dates same make same grup 
  //* and get date of this grup and display 
  //! actually ı managed to make today note grup 
  //! and yesterday and before grup 

const todayNotes=secondNoteData.map(item=>{
  const date=new Date()
  console.log(date.toLocaleDateString())
  if(item.date===date.toLocaleDateString()){
    return (
      <Note 
        headline={item.headline}
        innerText={item.innerText}
        date={item.date}
        id={item.id}
        dltNote={dltNote}     
      />
    )
  }
})


const yesterdayNotes=secondNoteData.map(item=>{
  const date=new Date()
  console.log(date.toLocaleDateString())
  if(item.date===date.toLocaleDateString()){
  }else{return (
    <Note 
      headline={item.headline}
      innerText={item.innerText}
      date={item.date}
      id={item.id}
      dltNote={dltNote}     
    />
  )}
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
    setSecondNoteData(newNotesArr)
  }

 
  

  return (
    <div className="App">

      <Search searchNote={searchNote}/>

      <div className='notes-conteiner'>
        <div className='notes'>
            {todayNotes}
            {yesterdayNotes}
          
 
        </div>

      </div>

      <AddNote newNote={newNote} />

   </div>
  );
}

export default App;
