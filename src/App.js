import AddProject from "./Components/AddProject.jsx";
import SideBar from "./Components/SideBar.jsx";
import HomePage from "./Components/HomePage.jsx";
import { useState } from "react";
import ProjectDisplay from "./Components/ProjectDisplay.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    //state helps us to store data(projects)
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });
  function handleClickStartNewProject() {
    setProjectState((prevState) => {
      //triggered when the add Project button is clicked
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  function handleSelectProjectDisplay(id) {
    //display the projects or tasks
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }
  function handleClickAddProject(projectData) {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId,
      };
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [newProject, ...prevState.projects],
      };
    });
  }
  // console.log(projectState);
  function handleCancelProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }
  function handleCancelProjectDisplay() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId
        ),
      };
    });
  }

  const selectedProjectDisplay = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );
  let content = (
    <ProjectDisplay
      project={selectedProjectDisplay}
      onDelete={handleCancelProjectDisplay}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );

  if (projectState.selectedProjectId === null) {
    content = (
      <AddProject
        onAdd={handleClickAddProject}
        onCancel={handleCancelProject}
      />
    );
  } else if (projectState.selectedProjectId === undefined) {
    content = <HomePage onClickStartNewProjet={handleClickStartNewProject} />;
  }
  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [newTask, ...prevState.tasks],
      };
    });
  }
  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }
  return (
    <div className="h-screen my-8 flex gap-8">
      <SideBar
        onClickStartNewProjet={handleClickStartNewProject}
        projectList={projectState.projects}
        onSelectProjectDisplay={handleSelectProjectDisplay}
        selectedProjectId={projectState.selectedProjectId}
      />
      {content}
    </div>
  );
}

export default App;
