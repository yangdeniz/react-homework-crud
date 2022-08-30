import API_URL from '../../../../shared/api';
import './note.css';

function Note(props) {
  const onClick = () => {
    const uri = `${API_URL}/${props.note.id}`;
    fetch(uri, { method: 'DELETE' })
      .then(props.onRemove);
  }

  return (
    <div className='note'>
      <p>{props.note.content}</p>
      <button className='notes-btn note-remove' onClick={onClick}></button>
    </div>
  );
}

export default Note;