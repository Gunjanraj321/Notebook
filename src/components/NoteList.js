import React, { useState } from "react";

const NoteList = ({ notes }) => {
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
    <div>
      <h2>Notes</h2>
      <h3>Total Notes: {notes.length}</h3>
      <input
        type="text"
        placeholder="Search by title"
        value={search}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearch}>Search</button>
      {filterNotes.length > 0 ? (
        filterNotes.map((note, index) => (
          <div key={index}>
            <div>
              <h3>{note.title}</h3>
            </div>
            <p>{note.description}</p>
          </div>
        ))
      ) : (
        notes.map((note, index) => (
          <div key={index}>
            <div>
              <h3>{note.title}</h3>
            </div>
            <p>{note.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default NoteList;
