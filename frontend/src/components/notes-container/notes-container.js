import { useEffect, useState } from 'react';
import NoteInput from './note-input/note-input';
import NotesList from './notes-list/notes-list';
import API_URL from '../../shared/api';
import './notes-container.css';

function NotesContainer() {
  const [notes, setNotes] = useState([]);

  const fetchNotes = () => {
    fetch(API_URL)
      .then(response => response.json())
      .then(notes => setNotes(notes));
  }

  useEffect(fetchNotes);

  return (
    <div className='notes-container'>
      <div className='notes-title'>
        <h3>Notes</h3>
        <button className='notes-btn notes-update' onClick={fetchNotes}>
          <span></span>
          <span></span>
        </button>
      </div>
      <NotesList notes={notes} onRemove={fetchNotes} />
      <NoteInput onAdd={fetchNotes} />
    </div>
  );
}

export default NotesContainer;