// NoteList.js
import React, { useState } from "react";
import "./NoteList.css"; // Import the CSS file for styling

const NoteList = ({ notes, onDelete }) => {
  const [search, setSearch] = useState("");
  const [filterNotes, setFilterNotes] = useState([]);

  const handleSearch = () => {
    const filteredData = notes.filter((note) =>
      note.title.toLowerCase().includes(search.toLowerCase())
    );
    setFilterNotes(filteredData);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <div className="note-list">
      <h2>Notes</h2>
      <h3>Total Notes: {notes.length}</h3>
      <input
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearch}>Search</button>
      <div className="notes-container">
        {filterNotes.length > 0
          ? filterNotes.map((note, index) => (
              <div className="note" key={index}>
                <div>
                  {index + 1}. <strong>{note.title}</strong>
                </div>
                <p>{note.description}</p>
                <button onClick={() => onDelete(index)}>Delete</button>
              </div>
            ))
          : notes.map((note, index) => (
              <div className="note" key={index}>
                <div>
                  {index + 1}. <strong>{note.title}</strong>
                </div>
                <p>{note.description}</p>
                <button onClick={() => onDelete(index)}>Delete</button>
              </div>
            ))}
      </div>
    </div>
  );
};

export default NoteList;
