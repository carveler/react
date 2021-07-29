import React, { useContext } from 'react';
import { TaskListContext } from '../contexts/TaskListContext';
import Task from './Task';

export default function TaskList() {
  const { tasks } = useContext(TaskListContext);
  console.log(tasks);
  return (
    <div>
      {tasks.length ? (
        <ul className='list'>
          {tasks.map((task) => {
            return <Task task={task} key={task.id} />;
          })}
        </ul>
      ) : (
        <div className='no-tasks'>No Tasks</div>
      )}
    </div>
  );
}
