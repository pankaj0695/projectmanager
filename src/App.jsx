import { useContext } from 'react';

import ProjectsSidebar from './components/ProjectsSideBar';
import NewProject from './components/NewProject';
import NoProjectSelected from './components/NoProjectSelected';
import ProjectDetail from './components/ProjectDetail';
import { ProjectContext } from './store/project-context';

function App() {
  const { projects, selectedProjectId } = useContext(ProjectContext);

  let content;

  const selectedProject = projects.find(
    project => project.id === selectedProjectId
  );

  if (selectedProject) content = <ProjectDetail project={selectedProject} />;
  else if (selectedProjectId === null) content = <NewProject />;
  else if (selectedProjectId === undefined) content = <NoProjectSelected />;

  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar />
      {content}
    </main>
  );
}

export default App;
