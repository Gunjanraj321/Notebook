import React , {useState} from "react";

const NoteForm = ({addNote}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addNote({
            title, 
            description
        });
        setTitle('');
        setDescription('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Enter title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            required
            />
            <textArea 
            type="text"
            placeholder="Enter Description"
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
            required
            />
        <button type="submit">Add Note</button>
        </form>
    )

}

export default NoteForm;