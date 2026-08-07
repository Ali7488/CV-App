import { useState } from "react";

export function Projects({ onSaveSection }) {
  const [projects, setProjects] = useState([]);

  function handleChange(id, event) {
    const { name, value } = event.target;

    setProjects((prevProjects) =>
      prevProjects.map((project) => {
        if (project.id === id) {
          return {
            ...project,
            [name]: value,
          };
        }

        return project;
      }),
    );
  }

  function handleAddNewProject() {
    const newProject = {
      id: crypto.randomUUID(),
      title: "",
      technologies: "",
      github: "",
      liveDemo: "",
      description: "",
    };

    setProjects((prevProjects) => [...prevProjects, newProject]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSaveSection("projects", projects);
  }

  function handleProjectDelete(id) {
    setProjects((prevProjects) =>
      prevProjects.filter((project) => project.id !== id),
    );
  }
  return (
    <form className="form-card" onSubmit={handleSubmit}>
      {projects.map((project, index) => (
        <fieldset key={project.id}>
          <legend className="entry-header">
            <span>Project {index + 1}:</span>

            <button
              type="button"
              className="delete-btn"
              aria-label={`Delete project ${index + 1}`}
              onClick={() => handleProjectDelete(project.id)}
            >
              ×
            </button>
          </legend>
          <label htmlFor={`project-title-${project.id}`}>Project Title:</label>
          <input
            id={`project-title-${project.id}`}
            type="text"
            name="title"
            value={project.title}
            onChange={(event) => handleChange(project.id, event)}
          />

          <label htmlFor={`technologies-${project.id}`}>Technologies:</label>
          <input
            id={`technologies-${project.id}`}
            type="text"
            name="technologies"
            value={project.technologies}
            onChange={(event) => handleChange(project.id, event)}
          />

          <label htmlFor={`project-github-${project.id}`}>GitHub:</label>
          <input
            id={`project-github-${project.id}`}
            type="url"
            name="github"
            value={project.github}
            onChange={(event) => handleChange(project.id, event)}
          />

          <label htmlFor={`live-demo-${project.id}`}>Live Demo:</label>
          <input
            id={`live-demo-${project.id}`}
            type="url"
            name="liveDemo"
            value={project.liveDemo}
            onChange={(event) => handleChange(project.id, event)}
          />

          <label htmlFor={`project-description-${project.id}`}>
            Description:
          </label>
          <textarea
            id={`project-description-${project.id}`}
            name="description"
            value={project.description}
            onChange={(event) => handleChange(project.id, event)}
            maxLength={300}
            rows={4}
          />
        </fieldset>
      ))}

      <button type="button" onClick={handleAddNewProject}>
        Add Another Project
      </button>

      <button type="submit">Save</button>
    </form>
  );
}
