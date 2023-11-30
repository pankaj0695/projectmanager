import { useContext } from 'react';

import NewTask from './NewTask.jsx';
import { ProjectContext } from '../store/project-context.jsx';

function Tasks() {
  const { selectedProjectId, tasks, deleteTask } = useContext(ProjectContext);

  const selectedProjectTasks = tasks.filter(
    task => task.projectId === selectedProjectId
  );

  return (
    <section>
      <h2 className='text-2xl font-bold text-stone-700 mb-4'>Tasks</h2>
      <NewTask />
      {selectedProjectTasks && selectedProjectTasks.length !== 0 ? (
        <ul className='p-4 mt-8 rounded-md bg-stone-100'>
          {selectedProjectTasks.map(task => (
            <li key={task.id} className='flex justify-between my-4'>
              <span>{task.text}</span>
              <button
                onClick={deleteTask.bind(null, task.id)}
                className='text-stone-700 hover:text-red-500'
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className='text-stone-800 my-4'>
          This project does not have any tasks yet.
        </p>
      )}
    </section>
  );
}

export default Tasks;
