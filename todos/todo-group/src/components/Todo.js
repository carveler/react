import React from 'react';
import { REMOVE_TODO, TOGGLE_TODO } from '../constants/todos';

export default function Todo({ todo: { title, id, complete }, dispatch }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setTitle] = useState('');

  const handleSave = () => {
    setIsEditing(false);
    dispatch();
  };

  if (isEditing) {
    return (
      <div>
        <p>Change the name of:{title}</p>
        <input value={newTitle} onChange={(e) => setTitle(e.target.value)} />
        <button onClick={() => setIsEditing(false)}>cancel</button>
        <button onClick={handleSave}>save</button>
      </div>
    );
  }

  return (
    <li key={id}>
      <span
        className={complete ? 'is-Complete' : ''}
        onClick={() => dispatch({ type: TOGGLE_TODO, payload: id })}
      >
        {title}
      </span>

      <button onClick={() => dispatch({ type: REMOVE_TODO, payload: id })}>
        Delete
      </button>
    </li>
  );
}
