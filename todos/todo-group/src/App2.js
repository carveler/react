import React, { useRef, useReducer } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

const ACTIONS = {
  ADD_TODO: 'ADD_TODO',
  DELETE_TODO: 'DELETE_TODO',
  TOGGLE_TODO: 'TOGGLE_TODO',
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [
        ...todos,
        { id: uuidv4(), title: action.payload.title, complete: false },
      ];
    case ACTIONS.DELETE_TODO:
      console.log(action.payload.id);
      return todos.filter((todo) => action.payload.id !== todo.id);
    case ACTIONS.TOGGLE_TODO:
      console.log(action.payload.id);
      return todos.map((todo) => {
        if (action.payload.id === todo.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });

    default:
      return todos;
  }
}

export default function App2() {
  const [todos, dispatch] = useReducer(reducer, []);
  const titleRef = useRef();

  const submit = (e) => {
    e.preventDefault();
    console.log(titleRef.current.value);
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: { title: titleRef.current.value },
    });
    titleRef.current.value = '';
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input ref={titleRef} />
      </form>

      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span className={todo.complete ? 'is-Complete' : ''}>
              {todo.title}
            </span>
            <button
              onClick={() =>
                dispatch({
                  type: ACTIONS.TOGGLE_TODO,
                  payload: { id: todo.id },
                })
              }
            >
              Complete
            </button>
            <button
              onClick={() =>
                dispatch({
                  type: ACTIONS.DELETE_TODO,
                  payload: { id: todo.id },
                })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
