import "../styles/CVPreview.css";

export function CVPreview({ CVData }) {
  const {
    personalInfo = {},
    education = [],
    experience = [],
    projects = [],
    awards = [],
    skills = "",
  } = CVData;

  function splitLines(text) {
    return text
      .split("\n")
      .map((line) => line.trim())
      .filter((line) => line !== "");
  }

  return (
    <div className="cv-preview-wrapper">
      <article className="cv-preview">
        <header className="cv-header">
          <h1 className="cv-name">
            {personalInfo.firstName} {personalInfo.middleInitials}{" "}
            {personalInfo.lastName}
          </h1>

          <div className="cv-contact">
            {personalInfo.email && (
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
            )}

            {personalInfo.phone && (
              <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
            )}

            {personalInfo.linkedIn && (
              <a
                href={personalInfo.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            )}

            {personalInfo.github && (
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            )}
          </div>
        </header>

        {education.length > 0 && (
          <section className="cv-section">
            <h2 className="cv-section-title">Education</h2>

            {education.map((entry) => (
              <div className="cv-entry" key={entry.id}>
                <div className="cv-entry-header">
                  <h3>{entry.school}</h3>

                  <p>
                    {entry.startDate} -{" "}
                    {entry.endDate ? entry.endDate : "Present"}
                  </p>
                </div>

                <div className="cv-entry-subheader">
                  <p>
                    {entry.degree}
                    {entry.fieldOfStudy && `, ${entry.fieldOfStudy}`}
                  </p>

                  <p>{entry.location}</p>
                </div>
              </div>
            ))}
          </section>
        )}

        {experience.length > 0 && (
          <section className="cv-section">
            <h2 className="cv-section-title">Experience</h2>

            {experience.map((job) => (
              <div className="cv-entry" key={job.id}>
                <div className="cv-entry-header">
                  <h3>{job.company}</h3>

                  <p>
                    {job.startDate} - {job.endDate ? job.endDate : "Present"}
                  </p>
                </div>

                <p className="cv-entry-subtitle">{job.role}</p>

                {job.desc && (
                  <ul className="cv-entry-list">
                    {splitLines(job.desc).map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {projects.length > 0 && (
          <section className="cv-section">
            <h2 className="cv-section-title">Technical Projects</h2>

            {projects.map((project) => (
              <div className="cv-entry" key={project.id}>
                <div className="cv-entry-header">
                  <h3>{project.title}</h3>

                  <div className="cv-project-links">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    )}

                    {project.liveDemo && (
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>

                {project.technologies && (
                  <p className="cv-entry-subtitle">{project.technologies}</p>
                )}

                {project.description && (
                  <ul className="cv-entry-list">
                    {splitLines(project.description).map((bullet, index) => (
                      <li key={index}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {awards.length > 0 && (
          <section className="cv-section">
            <h2 className="cv-section-title">Awards</h2>

            {awards.map((award) => (
              <div className="cv-entry" key={award.id}>
                <div className="cv-entry-header">
                  <h3>{award.title}</h3>
                  <p>{award.date}</p>
                </div>

                <p className="cv-entry-subtitle">{award.issuer}</p>
              </div>
            ))}
          </section>
        )}

        {skills.trim() && (
          <section className="cv-section">
            <h2 className="cv-section-title">Skills</h2>

            <ul className="cv-skills">
              {splitLines(skills).map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </div>
  );
}
