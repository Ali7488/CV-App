import { useState } from "react";
import { CVFormPanel } from "./components/CVFormPanel.jsx";
import "./styles/App.css";

function App() {
  const [savedData, setSavedData] = useState({
    personalInfo: {},
    education: {},
    experience: {},
    technicalProjects: {},
    skills: {},
    awards: {},
  });

  function handleSaveSection(sectionName, sectionData) {
    setSavedData((previousData) => ({
      ...previousData,
      [sectionName]: sectionData,
    }));
  }

  return (
    <>
      <header>
        <h1>CV Generator</h1>
      </header>
      <main>
        <div className="workspace"></div>
        <CVFormPanel onSaveSection={handleSaveSection} />
      </main>
      <footer>
        <p>
          Built by:{" "}
          <a
            href="https://github.com/Ali7488"
            target="_blank"
            className="footer-link"
            rel="noopener noreferrer"
          >
            Mohannad Ali
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
