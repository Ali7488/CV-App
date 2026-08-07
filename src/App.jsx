import { useState } from "react";
import { CVFormPanel } from "./components/CVFormPanel.jsx";
import { CVPreview } from "./components/preview.jsx";
import "./styles/App.css";

function App() {
  // Lifted state from all the individual form components, used for preview.
  const [savedData, setSavedData] = useState({
    personalInfo: {},
    education: [],
    experience: [],
    technicalProjects: [],
    skills: "",
    awards: [],
  });

  // Callback for sections to save their data into the apps state
  function handleSaveSection(sectionName, sectionData) {
    setSavedData((previousData) => ({
      ...previousData,
      [sectionName]: sectionData,
    }));
  }

  return (
    <>
      <header className="app-header">
        <h1>CV Generator</h1>
      </header>
      <main>
        <div className="workspace">
          <CVFormPanel onSaveSection={handleSaveSection} />
          <CVPreview CVData={savedData} />
        </div>
      </main>
      <footer className="app-footer">
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
