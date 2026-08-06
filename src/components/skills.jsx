import { useState } from "react";

export function Skills({ onSaveSection }) {
  const [skills, setSkills] = useState("");

  function handleChange(event) {
    const skillsText = event.target.value;
    setSkills(skillsText);
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSaveSection("skills", skills);
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <label htmlFor="skills">Skills (one skill per line)</label>
      <textarea
        id="skills"
        name="skills"
        value={skills}
        onChange={(event) => handleChange(event)}
        maxLength={500}
        rows={6}
      />
      <button type="submit">Save</button>
    </form>
  );
}
