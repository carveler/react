import React, { useState, useRef, useEffect } from 'react';
import TodoList from './Postlist';
// import uuidv4 from 'uuid/v4';
// import { v4 as uuidv4 } from 'uuid';
const { v4: uuidv4 } = require('uuid');
const Local_Storege_Key = 'todoApp.todos';

function App() {
  const [todos, setTodos] = useState([]);
  const todoNameRef = useRef();
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(Local_Storege_Key));
    if (storedTodos) setTodos(storedTodos);
  }, []);
  useEffect(() => {
    localStorage.setItem(Local_Storege_Key, JSON.stringify(todos));
  }, [todos]);

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value;
    if (name === '') return;
    setTodos((pervTodos) => {
      return [...pervTodos, { id: uuidv4(), name: name, complete: false }];
    });
    todoNameRef.current.value = null;
  }
  function handleClearTodos() {
    const newTodos = todos.filter((todo) => !todo.complete);
    setTodos(newTodos);
  }
  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type='text' />
      <button onClick={handleAddTodo}>Add Todo</button>
      <button onClick={handleClearTodos}>Clear Todo</button>
      <div>{todos.filter((todo) => !todo.complete).length} left to do</div>
    </>
  );
}

export default App;
