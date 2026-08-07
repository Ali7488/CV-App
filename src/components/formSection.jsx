export function FormSection({ title, children }) {
  return (
    <section className="form-section">
      <h2 className="form-section-title">{title}</h2>

      <div className="form-section-content">{children}</div>
    </section>
  );
}
