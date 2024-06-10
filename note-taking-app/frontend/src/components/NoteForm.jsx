// src/components/NoteForm.jsx
import React, { useState, useEffect } from 'react';

const NoteForm = ({ onCreate, onUpdate, editingNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [editingNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingNote) {
      onUpdate(editingNote._id, { title, content });
    } else {
      onCreate({ title, content });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      ></textarea>
      <button type="submit">{editingNote ? 'Update' : 'Create'} Note</button>
    </form>
  );
};

export default NoteForm;
