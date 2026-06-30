# Task 5 – Registration Form using useState

A clean, responsive, and beginner-friendly React application demonstrating advanced form handling and user input tracking using the `useState` hook. This implementation features distinct custom validation rules across 10 functional input fields using a split file architecture (JS/CSS).

## 🚀 Features

* **10-Field Tracking Matrix:** Managed via independent state variables (`useState`) capturing real-time DOM inputs.
* **Granular Input Validation:** * Required field validation across all data entry nodes.
  * Formatted regex matching for the Email configuration.
  * Explicit length checking requiring exactly 10 digits for the Mobile string.
  * Minimum 6-character length restrictions for the Password string.
  * Matching closure check verifying Password vs. Confirm Password configurations.
* **Instant Dynamic Feedback:** Inputs show target error text instantly on submit failure, while successful validation prints a structured data object to the console log alongside a green success layout banner.
* **Separation of Concerns:** Isolated layout styles directly into a separate CSS module (`Task5.css`).

## 📁 Project Structure

```text
src/
├── App.jsx        # Main structural viewport mounting the layout core
├── Task5.jsx      # Functional JavaScript logic, event workflows, and form states
└── Task5.css      # Separate stylesheet housing all structural class rules
