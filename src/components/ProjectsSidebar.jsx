import { useContext } from 'react';

import Button from './Button.jsx';
import { ProjectContext } from '../store/project-context.jsx';

function ProjectsSidebar() {
  const { projects, selectedProjectId, selectProject, startAddProject } =
    useContext(ProjectContext);

  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
      <h2 className='mb-8 fond-bold uppercase md:text-xl text-stone-200'>
        Your Projects
      </h2>
      <div>
        <Button onClick={startAddProject}>+ Add Project</Button>
      </div>
      <ul className='mt-8'>
        {projects.map(project => {
          let cssClasses =
            'w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800';
          if (project.id === selectedProjectId)
            cssClasses += ' text-stone-200 bg-stone-800';
          else cssClasses += ' text-stone-400';

          return (
            <li key={project.id}>
              <button
                onClick={selectProject.bind(null, project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default ProjectsSidebar;
