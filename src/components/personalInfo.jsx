import { useState } from "react";

export function PersonalInfo({ onSaveSection }) {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    middleInitials: "",
    lastName: "",
    email: "",
    phone: "",
    linkedIn: "",
    github: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setPersonalInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSaveSection("personalInfo", personalInfo);
  }

  return (
    <form className="form-card" onSubmit={handleSubmit}>
      <label htmlFor="first-name">First Name:</label>
      <input
        id="first-name"
        type="text"
        name="firstName"
        autoComplete="given-name"
        value={personalInfo.firstName}
        onChange={handleChange}
      />

      <label htmlFor="middle-initials">Middle Initials:</label>
      <input
        id="middle-initials"
        type="text"
        name="middleInitials"
        autoComplete="additional-name"
        value={personalInfo.middleInitials}
        onChange={handleChange}
      />

      <label htmlFor="last-name">Last Name:</label>
      <input
        id="last-name"
        type="text"
        name="lastName"
        autoComplete="family-name"
        value={personalInfo.lastName}
        onChange={handleChange}
      />

      <label htmlFor="email">Email:</label>
      <input
        id="email"
        type="email"
        name="email"
        autoComplete="email"
        value={personalInfo.email}
        onChange={handleChange}
      />

      <label htmlFor="phone">Phone Number:</label>
      <input
        id="phone"
        type="tel"
        name="phone"
        autoComplete="tel"
        value={personalInfo.phone}
        onChange={handleChange}
      />

      <label htmlFor="linkedin">LinkedIn:</label>
      <input
        id="linkedin"
        type="url"
        name="linkedIn"
        value={personalInfo.linkedIn}
        onChange={handleChange}
      />
      <label htmlFor="github">Github:</label>
      <input
        id="github"
        type="url"
        name="github"
        value={personalInfo.github}
        onChange={handleChange}
      />

      <button type="submit">Save</button>
    </form>
  );
}
