import { useState, useContext } from 'react';

import { ProjectContext } from '../store/project-context.jsx';

function NewTask() {
  const [task, setTask] = useState('');

  const { addTask } = useContext(ProjectContext);

  const taskChangeHandler = e => {
    setTask(e.target.value);
  };

  const addTaskhandler = () => {
    if (task !== '') {
      addTask(task);
      setTask('');
    }
  };

  return (
    <div className='flex items-center gap-4'>
      <input
        type='text'
        value={task}
        onChange={taskChangeHandler}
        className='w-64 px-2 py-1 rounded-sm bg-stone-200'
      />
      <button
        onClick={addTaskhandler}
        className='text-stone-700 hover:text-stone-950'
      >
        Add Task
      </button>
    </div>
  );
}

export default NewTask;
