import { useState } from "react";

export function FormSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="form-section">
      <h2 className="form-section-title">
        <button
          type="button"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          {title}
          <span
            className={`accordion-arrow ${isOpen ? "open" : ""}`}
            aria-hidden="true"
          >
            ▾
          </span>
        </button>
      </h2>
      <div className={`form-section-content ${isOpen ? "open" : ""}`}>
        <div className="form-section-content-wrapper">{children}</div>
      </div>
    </section>
  );
}
