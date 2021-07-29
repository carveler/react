import React from 'react';
import Todo from './Todo';

export default function TodoList({ todos, dispatch }) {
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} dispatch={dispatch} />
      ))}
    </div>
  );
}
