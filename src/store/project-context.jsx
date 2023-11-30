import { createContext, useState } from 'react';

export const ProjectContext = createContext({
  projects: [],
  selectedProjectId: undefined,
  tasks: [],
  startAddProject: () => {},
  cancelAddProject: () => {},
  addProject: projectData => {},
  selectProject: projectId => {},
  deleteProject: () => {},
  addTask: text => {},
  deleteTask: taskId => {},
});

const ProjectProvider = props => {
  const [projects, setProjects] = useState([]);
  const [selectedProjectId, setSelectedProjectId] = useState(undefined);
  const [tasks, setTasks] = useState([]);

  const startAddProject = () => {
    setSelectedProjectId(null);
  };

  const cancelAddProject = () => {
    setSelectedProjectId(undefined);
  };

  const addProject = projectData => {
    const newProject = {
      id: Math.random().toString(),
      ...projectData,
    };
    setProjects(prevProjects => [...prevProjects, newProject]);
    setSelectedProjectId(newProject.id);
  };

  const selectProject = projectId => {
    setSelectedProjectId(projectId);
  };

  const deleteProject = () => {
    const updatedProjects = projects.filter(
      project => project.id !== selectedProjectId
    );
    setProjects(updatedProjects);
    setSelectedProjectId(undefined);
  };

  const addTask = text => {
    setTasks(prevTasks => [
      { id: Math.random().toString(), projectId: selectedProjectId, text },
      ...prevTasks,
    ]);
  };

  const deleteTask = taskId => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <ProjectContext.Provider
      value={{
        projects,
        selectedProjectId,
        tasks,
        startAddProject,
        cancelAddProject,
        addProject,
        selectProject,
        deleteProject,
        addTask,
        deleteTask,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectProvider;
