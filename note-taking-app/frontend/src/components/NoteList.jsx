// src/components/NoteList.jsx
import React from 'react';

const NoteList = ({ notes, onEdit, onDelete }) => {
  return (
    <div>
      {notes.map((note) => (
        <div key={note._id} className="note">
          <h3>{note.title}</h3>
          <p>{note.content}</p>
          <div className="note-buttons">
            <button onClick={() => onEdit(note)}>Edit</button>
            <button onClick={() => onDelete(note._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
