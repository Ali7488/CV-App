import { useState } from "react";

export function Experience({ onSaveSection }) {
  const [experience, setExperience] = useState([]);

  function handleChange(id, event) {
    const { name, value } = event.target;

    setExperience((prevExperience) =>
      prevExperience.map((job) => {
        if (job.id === id) {
          return {
            ...job,
            [name]: value,
          };
        }

        return job;
      }),
    );
  }

  function handleAddNewExperience() {
    const newExperience = {
      id: crypto.randomUUID(),
      company: "",
      role: "",
      startDate: "",
      endDate: "",
      desc: "",
    };

    setExperience((prevExperience) => [...prevExperience, newExperience]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSaveSection("experience", experience);
  }
  function handleExperienceDelete(id) {
    setExperience((prevExperience) =>
      prevExperience.filter((job) => job.id !== id),
    );
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      {experience.map((job, index) => (
        <fieldset key={job.id}>
          <legend className="entry-header">
            <span>Experience {index + 1}:</span>

            <button
              type="button"
              className="delete-btn"
              aria-label={`Delete experience ${index + 1}`}
              onClick={() => handleExperienceDelete(job.id)}
            >
              ×
            </button>
          </legend>
          <label htmlFor={`company-${job.id}`}>Company:</label>
          <input
            id={`company-${job.id}`}
            type="text"
            name="company"
            value={job.company}
            onChange={(event) => handleChange(job.id, event)}
          />

          <label htmlFor={`role-${job.id}`}>Role:</label>
          <input
            id={`role-${job.id}`}
            type="text"
            name="role"
            value={job.role}
            onChange={(event) => handleChange(job.id, event)}
          />

          <label htmlFor={`start-${job.id}`}>Start Date:</label>
          <input
            id={`start-${job.id}`}
            type="month"
            name="startDate"
            value={job.startDate}
            onChange={(event) => handleChange(job.id, event)}
          />

          <label htmlFor={`end-${job.id}`}>End Date:</label>
          <input
            id={`end-${job.id}`}
            type="month"
            name="endDate"
            value={job.endDate}
            onChange={(event) => handleChange(job.id, event)}
          />
          <label htmlFor={`desc-${job.id}`}>
            Description (seperate each bullet point by a new line):
          </label>
          <textarea
            name="desc"
            id={`desc-${job.id}`}
            value={job.desc}
            onChange={(event) => handleChange(job.id, event)}
            maxLength={300}
            rows={4}
          />
        </fieldset>
      ))}
      <button type="button" onClick={handleAddNewExperience}>
        Add Another Experience
      </button>
      <button type="submit">Save</button>
    </form>
  );
}
