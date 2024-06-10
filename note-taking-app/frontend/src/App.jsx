// src/App.jsx
import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import { getNotes, createNote, updateNote, deleteNote } from './api';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    const data = await getNotes();
    setNotes(data);
  };

  const handleCreate = async (note) => {
    const newNote = await createNote(note);
    setNotes([...notes, newNote]);
  };

  const handleUpdate = async (id, updatedNote) => {
    const newNote = await updateNote(id, updatedNote);
    setNotes(notes.map((note) => (note._id === id ? newNote : note)));
    setEditingNote(null);
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    setNotes(notes.filter((note) => note._id !== id));
  };

  return (
    <div className="container">
      <NoteForm onCreate={handleCreate} onUpdate={handleUpdate} editingNote={editingNote} />
      <NoteList notes={notes} onEdit={setEditingNote} onDelete={handleDelete} />
    </div>
  );
};

export default App;
