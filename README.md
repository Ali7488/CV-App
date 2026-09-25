# CV Generator

![CI](https://github.com/Ali7488/CV-App/actions/workflows/ci.yml/badge.svg)

A responsive React application for building a structured CV from guided form inputs. Users can add repeatable education, experience, project, and award entries, then save each section into a live document preview.

[Live Demo](https://cv-generator-ali7488.vercel.app/)

## Features

- Accordion-based form sections for a compact editing experience
- Personal information with email, phone, LinkedIn, and GitHub links
- Repeatable education, experience, project, and award entries
- Add and delete controls for every repeatable entry type
- Skills entered one per line and rendered as a structured list
- Shared application state powering the generated preview
- Conditional rendering so empty CV sections remain hidden
- Responsive two-panel layout for editing and previewing

## Built With

- React 19
- JavaScript
- CSS
- Vite
- ESLint

## State Flow

Each form section owns its editable input state. Pressing **Save** sends the section's data to `App.jsx`, which stores the complete CV state and passes it to the preview component.

```text
Form section input
    → onSaveSection(sectionName, sectionData)
    → App savedData state
    → CVPreview
```

This keeps input concerns inside the form components while giving the preview one consistent source of saved data.

## Getting Started

```bash
git clone https://github.com/Ali7488/CV-App.git
cd CV-App
npm install
npm run dev
```

## Available Scripts

| Command           | Purpose                              |
| ----------------- | ------------------------------------ |
| `npm run dev`     | Start the Vite development server    |
| `npm run build`   | Create a production build            |
| `npm run preview` | Preview the production build locally |
| `npm run lint`    | Run ESLint                           |

## Current Limitations

- CV data is not persisted after refreshing the page.
- PDF export and printing controls are not implemented.
- The project does not currently have automated tests.
- Input validation is intentionally minimal.

## Acknowledgements

This project was created as part of [The Odin Project](https://www.theodinproject.com/) React curriculum.
