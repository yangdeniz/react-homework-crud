import Note from './note/note';
import './notes-list.css';

function NotesList(props) {
  return (
    <div className='notes-list'>
      {props.notes.map(note => <Note key={note.id} note={note} onRemove={props.onRemove} />)}
    </div>
  );
}

export default NotesList;