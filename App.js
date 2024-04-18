import React , {useState, useEffect} from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import ReactDom from "react-dom"
import './App.css';

const App = () => {
    const [notes, setnotes]= useState([]);
    useEffect(()=>{
        const storedNotes = JSON.parse(localStorage.getItem('notes'));
        if(storedNotes){
            setnotes(storedNotes);
        }
    },[]);
    
    const addNote = (note) => {
        const newNotes = [...notes, note];
        setnotes(newNotes);
        localStorage.setItem('notes', JSON.stringify(newNotes));
    };

    const deleteNote = (index) => {
        const updatedNotes = [...notes];
        updatedNotes.splice(index,1);
        setnotes(updatedNotes);
        localStorage.setItem("notes",JSON.stringify(updatedNotes))
    }

    return (
        <div>
            <h1>NoteBook</h1>
            <NoteForm addNote={addNote} />
            <NoteList notes={notes} onDelete={deleteNote} />
        </div>
    )
}

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);