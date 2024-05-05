import React from "react";

function SideBar({
  onClickStartNewProjet,
  projectList,
  onSelectProjectDisplay,
  selectedProjectId,
}) {
  return (
    <div>
      <aside className="w-1/3 bg-black px-8 py-16 sm:w-72 rounded-r-md">
        <h2 className="text-xl uppercase md:text-3xl text-gray-300 py-4">
          Your Projects
        </h2>
        <button
          onClick={onClickStartNewProjet}
          className="mt-4 w-full bg-black text-gray-300 hover:bg-zinc-700 hover:rounded-md hover:text-white p-2 rounded-md focus:outline-none focus:ring-1 focus:ring-stone-400 "
        >
          + Add Project
        </button>
        <ul>
          {projectList.map((project) => {
            let CSSclass =
              "mt-4 w-full  text-gray-300 hover:bg-text-stone-200  hover:bg-stone-800 hover:rounded-md hover:text-white p-2 rounded-md";
            if (project.id === selectedProjectId) {
              CSSclass += "   bg-stone-800 text-stone-200";
            } else {
              CSSclass += "   text-stone-400";
            }
            return (
              <li key={project.id}>
                <button
                  onClick={() => onSelectProjectDisplay(project.id)}
                  className={CSSclass}
                >
                  {project.title}
                </button>
              </li>
            );
          })}
        </ul>
      </aside>
    </div>
  );
}

export default SideBar;
