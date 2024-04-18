import React , {useState, useEffect} from "react";
import NoteForm from "./src/components/NoteForm";
import NoteList from "./src/components/NoteList";
import ReactDom from "react-dom"

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

    return (
        <div>
            <h1>NoteBook</h1>
            <NoteForm addNote={addNote} />
            <NoteList notes={notes} />
        </div>
    )
}

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);