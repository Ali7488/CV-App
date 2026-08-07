import { useState } from "react";

export function Education({ onSaveSection }) {
  const [education, setEducation] = useState([]);

  function handleChange(id, event) {
    const { name, value } = event.target;

    setEducation((prevEducation) =>
      prevEducation.map((entry) => {
        if (entry.id === id) {
          return {
            ...entry,
            [name]: value,
          };
        }

        return entry;
      }),
    );
  }

  function handleAddNewEducation() {
    const newEducation = {
      id: crypto.randomUUID(),
      school: "",
      degree: "",
      fieldOfStudy: "",
      location: "",
      startDate: "",
      endDate: "",
    };

    setEducation((prevEducation) => [...prevEducation, newEducation]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSaveSection("education", education);
  }

  function handleEntryDelete(id) {
    setEducation((prevEntry) => prevEntry.filter((entry) => entry.id !== id));
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      {education.map((entry, index) => (
        <fieldset key={entry.id}>
          <legend className="entry-header">
            <span>Education {index + 1}:</span>

            <button
              type="button"
              className="delete-btn"
              aria-label={`Delete education ${index + 1}`}
              onClick={() => handleEntryDelete(entry.id)}
            >
              ×
            </button>
          </legend>

          <label htmlFor={`school-${entry.id}`}>School:</label>
          <input
            id={`school-${entry.id}`}
            type="text"
            name="school"
            value={entry.school}
            onChange={(event) => handleChange(entry.id, event)}
          />

          <label htmlFor={`degree-${entry.id}`}>Degree:</label>
          <input
            id={`degree-${entry.id}`}
            type="text"
            name="degree"
            value={entry.degree}
            onChange={(event) => handleChange(entry.id, event)}
          />

          <label htmlFor={`field-of-study-${entry.id}`}>Field of Study:</label>
          <input
            id={`field-of-study-${entry.id}`}
            type="text"
            name="fieldOfStudy"
            value={entry.fieldOfStudy}
            onChange={(event) => handleChange(entry.id, event)}
          />

          <label htmlFor={`education-location-${entry.id}`}>Location:</label>
          <input
            id={`education-location-${entry.id}`}
            type="text"
            name="location"
            value={entry.location}
            onChange={(event) => handleChange(entry.id, event)}
          />

          <label htmlFor={`education-start-${entry.id}`}>Start Date:</label>
          <input
            id={`education-start-${entry.id}`}
            type="month"
            name="startDate"
            value={entry.startDate}
            onChange={(event) => handleChange(entry.id, event)}
          />

          <label htmlFor={`education-end-${entry.id}`}>End Date:</label>
          <input
            id={`education-end-${entry.id}`}
            type="month"
            name="endDate"
            value={entry.endDate}
            onChange={(event) => handleChange(entry.id, event)}
          />
        </fieldset>
      ))}

      <button type="button" onClick={handleAddNewEducation}>
        Add Another Education
      </button>

      <button type="submit">Save</button>
    </form>
  );
}
