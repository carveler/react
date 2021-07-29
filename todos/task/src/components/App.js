import React from 'react';
import TaskListContextProvider from '../contexts/TaskListContext';
import TaskList from './TaskList';
import '../App.css';
import TaskForm from './TaskForm';
import Header from './Header';

function App() {
  return (
    <TaskListContextProvider>
      <div className='Container'>
        <div className='app-wrapper'>
          <Header />
          <div className='main'>
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
}

export default App;
