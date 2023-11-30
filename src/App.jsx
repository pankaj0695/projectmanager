import { useContext } from 'react';

import ProjectsSidebar from './components/ProjectsSideBar.jsx';
import NewProject from './components/NewProject.jsx';
import NoProjectSelected from './components/NoProjectSelected.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';
import { ProjectContext } from './store/project-context.jsx';

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
