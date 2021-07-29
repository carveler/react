import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../contexts/TaskListContext';

export default function TaskForm() {
  const { addTask, clearTask, editTask, editItem } = useContext(
    TaskListContext
  );

  const [title, setTitle] = useState('');

  const handleChange = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!editItem) {
      addTask(title);
      setTitle('');
    } else {
      editTask(title, editItem.id);
    }
  };

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      console.log(editItem);
    } else {
      setTitle('');
    }
  }, [editItem]);

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input
        type='text'
        placeholder='Add Task...'
        value={title}
        onChange={handleChange}
        required
        className='task-input'
      />
      <div className='buttons'>
        <button type='submit' className='btn add-task-btn'>
          {!editItem ? 'Add Task' : 'Edit Task'}
        </button>

        <button className='btn clear-btn' onClick={clearTask}>
          Clear
        </button>
      </div>
    </form>
  );
}
