import { Experience } from "./experience.jsx";
import { PersonalInfo } from "./personalInfo";

export function CVFormPanel({ onSaveSection }) {
  return (
    <section className="form-panel">
      <h2>Information:</h2>
      <PersonalInfo onSaveSection={onSaveSection} />
      <Experience onSaveSection={onSaveSection} />
    </section>
  );
}
