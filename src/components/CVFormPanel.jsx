import { Awards } from "./awards.jsx";
import { Education } from "./education.jsx";
import { Experience } from "./experience.jsx";
import { PersonalInfo } from "./personalInfo";
import { Skills } from "./skills.jsx";
import { Projects } from "./technicalProjects.jsx";

export function CVFormPanel({ onSaveSection }) {
  return (
    <section className="form-panel">
      <h2>Information:</h2>
      <PersonalInfo onSaveSection={onSaveSection} />
      <Education onSaveSection={onSaveSection} />
      <Experience onSaveSection={onSaveSection} />
      <Projects onSaveSection={onSaveSection} />
      <Skills onSaveSection={onSaveSection} />
      <Awards onSaveSection={onSaveSection} />
    </section>
  );
}
