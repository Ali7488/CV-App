import { useState } from "react";

export function Awards({ onSaveSection }) {
  const [awards, setAwards] = useState([]);

  function handleChange(id, event) {
    const { name, value } = event.target;

    setAwards((prevAwards) =>
      prevAwards.map((award) => {
        if (award.id === id) {
          return {
            ...award,
            [name]: value,
          };
        }

        return award;
      }),
    );
  }

  function handleAddNewAward() {
    const newAward = {
      id: crypto.randomUUID(),
      title: "",
      issuer: "",
      date: "",
    };

    setAwards((prevAwards) => [...prevAwards, newAward]);
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSaveSection("awards", awards);
  }

  function handleAwardDelete(id) {
    setAwards((prevAwards) => prevAwards.filter((award) => award.id !== id));
  }
  return (
    <form className="form-card" onSubmit={handleSubmit}>
      {awards.map((award, index) => (
        <fieldset key={award.id}>
          <legend className="entry-header">
            <span>Award {index + 1}:</span>

            <button
              type="button"
              className="delete-btn"
              aria-label={`Delete award ${index + 1}`}
              onClick={() => handleAwardDelete(award.id)}
            >
              ×
            </button>
          </legend>
          <label htmlFor={`award-title-${award.id}`}>Award:</label>
          <input
            id={`award-title-${award.id}`}
            type="text"
            name="title"
            value={award.title}
            onChange={(event) => handleChange(award.id, event)}
          />

          <label htmlFor={`award-issuer-${award.id}`}>Issuer:</label>
          <input
            id={`award-issuer-${award.id}`}
            type="text"
            name="issuer"
            value={award.issuer}
            onChange={(event) => handleChange(award.id, event)}
          />

          <label htmlFor={`award-date-${award.id}`}>Date:</label>
          <input
            id={`award-date-${award.id}`}
            type="month"
            name="date"
            value={award.date}
            onChange={(event) => handleChange(award.id, event)}
          />
        </fieldset>
      ))}

      <button type="button" onClick={handleAddNewAward}>
        Add Another Award
      </button>

      <button type="submit">Save</button>
    </form>
  );
}
