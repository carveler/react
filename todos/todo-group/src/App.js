import React, { useReducer, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoList from './components/TodoList';
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';

const handleTodos = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { title: action.payload, id: uuidv4(), complete: false },
      ];
    case REMOVE_TODO:
      return state.filter((todo) => todo.id !== action.payload);
    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });

    default:
      return state;
  }
};

function App() {
  const [todos, dispatch] = useReducer(handleTodos, []);

  const titleRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(titleRef.current.value);
    dispatch({ type: ADD_TODO, payload: titleRef.current.value });
    titleRef.current.value = '';
  };

  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <input ref={titleRef} />
      </form>
      <TodoList todos={todos} dispatch={dispatch} />
      <ul>
        {todos.map(({ title, id, complete }) => (
          <li key={id}>
            <span
              className={complete ? 'is-Complete' : ''}
              onClick={() => dispatch({ type: TOGGLE_TODO, payload: id })}
            >
              {title}
            </span>

            <button
              onClick={() => dispatch({ type: REMOVE_TODO, payload: id })}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
