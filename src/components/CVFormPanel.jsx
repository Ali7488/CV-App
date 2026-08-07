import { Awards } from "./awards";
import { Education } from "./education";
import { Experience } from "./experience";
import { FormSection } from "./formSection";
import { PersonalInfo } from "./personalInfo";
import { Skills } from "./skills";
import { Projects } from "./technicalProjects";

export function CVFormPanel({ onSaveSection }) {
  return (
    <section className="form-panel">
      <FormSection title="Personal Information">
        <PersonalInfo onSaveSection={onSaveSection} />
      </FormSection>

      <FormSection title="Education">
        <Education onSaveSection={onSaveSection} />
      </FormSection>

      <FormSection title="Experience">
        <Experience onSaveSection={onSaveSection} />
      </FormSection>

      <FormSection title="Technical Projects">
        <Projects onSaveSection={onSaveSection} />
      </FormSection>

      <FormSection title="Awards">
        <Awards onSaveSection={onSaveSection} />
      </FormSection>

      <FormSection title="Skills">
        <Skills onSaveSection={onSaveSection} />
      </FormSection>
    </section>
  );
}
