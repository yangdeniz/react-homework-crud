import { useState } from 'react';
import API_URL from '../../../shared/api';
import './note-input.css';

function NoteInput(props) {
  const [text, setText] = useState('');

  const onClick = () => {
    if (!text)
      return;

    fetch(API_URL, {
      method: 'POST',
      body: JSON.stringify({ id: 0, content: text })
    })
    .then(() => {
      props.onAdd(text);
      setText('');
    })
  }

  return (
    <div className='note-input'>
      <label htmlFor='note-input'>New Note</label>
      <textarea id='note-input' value={text} onChange={(e) => setText(e.target.value)}></textarea>
      <button className='notes-btn note-add' onClick={onClick}></button>
    </div>
  );
}

export default NoteInput;