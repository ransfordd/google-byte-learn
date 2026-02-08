# Google ByteLearn

A comprehensive computer science e-learning platform built with HTML, CSS, and JavaScript. ByteLearn offers interactive courses with video lessons, reading materials, coding exercises, quizzes, and AI-assisted learning.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Pages Overview](#pages-overview)
- [CSS Architecture](#css-architecture)
- [JavaScript Modules](#javascript-modules)
- [Course Content System](#course-content-system)
- [Adding a New Course](#adding-a-new-course)
- [Firebase Setup](#firebase-setup)
- [Coding Conventions](#coding-conventions)
- [Contributing](#contributing)

---

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Edge, Safari)
- [Node.js](https://nodejs.org/) (optional, for the local dev server)
- Git

### Running Locally

`ash
# Clone the repository
git clone https://github.com/ransfordd/google-byte-learn.git
cd google-byte-learn

# Option 1: Node.js dev server
npm start           # serves on http://localhost:3000

# Option 2: Python dev server
python -m http.server 8080

# Option 3: VS Code Live Server extension
# Right-click index.html -> "Open with Live Server"
`

> **Note:** The project is a static site (no build step required). Any HTTP server will work.

---

## Project Structure

`
google-byte-learn/
 index.html                  # Home page (landing page)
 package.json                # Project metadata & scripts
 README.md                   # This file

 assets/
    icons/
       favicon.svg         # Site favicon
    images/
        courses/            # Course thumbnail images

 css/
    variables.css           # CSS custom properties (colors, spacing, typography)
    base.css                # Reset, global styles, utility classes
    layout.css              # Page layouts, grid system, containers
    components.css          # Reusable UI components (buttons, cards, modals, etc.)
    navigation.css          # Navbar, mobile menu, sidebar navigation
    animations.css          # Keyframe animations and transitions
    responsive.css          # Media queries and responsive utilities
    pages/                  # Page-specific styles
        home.css            # Home/landing page
        courses.css         # Course listing page
        course-detail.css   # Individual course page + course notes
        course-hero.css     # Course detail hero section
        lesson.css          # Lesson viewer (video + notes)
        quiz.css            # Quiz page
        dashboard.css       # Student dashboard
        leaderboard.css     # Leaderboard page
        editor.css          # Code editor/practice page
        auth.css            # Login, signup, reset password

 js/
    app.js                  # Core app logic (theme, menu, tabs, search, etc.)
    auth.js                 # Authentication logic (Firebase Auth)
    firebase-config.js      # Firebase project configuration
    course-notes.js         # Reading content: Python & Web Programming
    course-notes-2.js       # Reading content: AI & Machine Learning
    course-notes-3.js       # Reading content: Computer Fundamentals
    course-notes-4.js       # Reading content: Databases Intro
    course-notes-render.js  # Renders course notes into the DOM

 data/
    courses/                # Course metadata (JSON)
        python-programming.json
        web-programming.json
        ai-machine-learning.json
        computer-fundamentals.json
        databases-intro.json

 pages/
     courses.html            # Course catalog / listing
     dashboard.html          # Student dashboard
     leaderboard.html        # XP leaderboard
     auth/
        login.html          # Login page
        signup.html         # Registration page
        reset-password.html # Password reset
     course/
        python-programming.html     # Python course detail
        web-programming.html        # Web Dev course detail
        ai-machine-learning.html    # AI/ML course detail
        computer-fundamentals.html  # CS Fundamentals detail
        databases-intro.html        # Databases course detail
        course-detail.html          # Generic course detail template
        lesson.html                 # Lesson viewer page
        quiz.html                   # Quiz page
     practice/
         editor.html         # Code practice editor
`

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **HTML5** | Page structure and semantic markup |
| **CSS3** | Styling with custom properties (CSS variables) |
| **JavaScript (ES6+)** | Interactivity, DOM manipulation, dynamic content |
| **Firebase** | Authentication, Firestore database, storage, analytics |
| **Google Fonts** | Poppins, Roboto, Fira Code typefaces |

> **No build tools required.** The project uses vanilla HTML/CSS/JS with ES module imports for Firebase. No bundler, no framework.

---

## Pages Overview

| Page | Path | Description |
|------|------|-------------|
| **Home** | `/index.html` | Landing page with hero, features, courses preview, gamification, CTA |
| **Courses** | `/pages/courses.html` | Filterable course catalog |
| **Course Detail** | `/pages/course/[course-name].html` | Syllabus, Course Notes, Overview, Reviews tabs |
| **Lesson** | `/pages/course/lesson.html` | Video player, notes, code editor, resources, discussion |
| **Quiz** | `/pages/course/quiz.html` | Module quizzes with XP rewards |
| **Dashboard** | `/pages/dashboard.html` | Student progress, enrolled courses, XP stats |
| **Leaderboard** | `/pages/leaderboard.html` | XP rankings |
| **Code Editor** | `/pages/practice/editor.html` | In-browser coding practice |
| **Login** | `/pages/auth/login.html` | Email/password and Google sign-in |
| **Sign Up** | `/pages/auth/signup.html` | Registration |
| **Reset Password** | `/pages/auth/reset-password.html` | Password recovery |

---

## CSS Architecture

The CSS follows a **modular, layered architecture**. Files are loaded in a specific order  later files can override earlier ones.

### Load Order (in every HTML page)

1. `variables.css`  Design tokens (colors, spacing, typography, shadows, radii)
2. `base.css`  CSS reset, body defaults, utility classes
3. `layout.css`  Container widths, page layout, grid system
4. `components.css`  Buttons, cards, badges, modals, forms, avatars, progress bars
5. `animations.css`  Keyframe animations (fade-in, slide-up, pulse, etc.)
6. `navigation.css`  Navbar, mobile menu overlay, sidebar
7. `responsive.css`  Breakpoints and responsive utility classes
8. `pages/[page].css`  Page-specific styles

### CSS Variables (Design Tokens)

All design values are defined as CSS custom properties in `css/variables.css`:

`css
/* Colors */
--primary: #4285f4;        /* Google Blue */
--google-red: #ea4335;
--google-yellow: #fbbc04;
--google-green: #34a853;

/* Spacing scale */
--space-1 through --space-20

/* Typography */
--font-primary: 'Poppins', sans-serif;
--font-secondary: 'Roboto', sans-serif;
--font-mono: 'Fira Code', monospace;

/* Breakpoints (used in media queries) */
/* sm: 640px, md: 768px, lg: 1024px, xl: 1280px, 2xl: 1536px */
`

### Naming Conventions

- **BEM-inspired:** `.course-card`, `.course-card:hover`, `.course-meta span`
- **Page prefixes:** `.courses-header`, `.lesson-sidebar`, `.dashboard-stats`
- **State classes:** `.active`, `.open`, `.visible`, `.completed`
- **Utility classes:** `.hide-mobile`, `.show-mobile`, `.text-center`

---

## JavaScript Modules

### `js/app.js`  Core Application

The main JS file loaded on every page. Provides:

- **Theme toggle** (light/dark mode, persisted in localStorage)
- **Mobile menu** (hamburger toggle, overlay)
- **Dropdown menus** (click-to-open, click-outside-to-close)
- **Modal dialogs** (open/close with backdrop)
- **Tab switching** (generic tab component)
- **Scroll reveal** (IntersectionObserver-based animations)
- **Search bar** (focus/blur effects)
- **Chatbot widget** (toggle open/close)
- **Tooltips** (hover-triggered)

Key globals:

`javascript
const App = {
  user: null,
  isAuthenticated: false,
  theme: 'light',      // persisted in localStorage
  sidebarOpen: false,
  chatbotOpen: false,
};

const $ = (selector) => document.querySelector(selector);
const -Append = (selector) => document.querySelectorAll(selector);
`

### `js/auth.js`  Authentication

Handles Firebase Authentication (email/password and Google sign-in). Used by the auth pages.

### `js/firebase-config.js`  Firebase Setup

Initializes Firebase services (Auth, Firestore, Storage, Analytics). Uses ES module imports from the Firebase CDN.

**Important:** The Firebase config contains project-specific keys. These are safe to include in client-side code (Firebase security rules protect data), but do NOT commit sensitive server-side keys.

### Course Notes System (`js/course-notes*.js`)

Reading content is stored as JavaScript objects and rendered dynamically:

| File | Content |
|------|---------|
| `course-notes.js` | Defines `const courseNotes = {}`; contains Python & Web Programming notes |
| `course-notes-2.js` | AI & Machine Learning notes |
| `course-notes-3.js` | Computer Fundamentals notes |
| `course-notes-4.js` | Databases Intro notes |
| `course-notes-render.js` | `renderCourseNotes(courseId)` function that builds the DOM |

---

## Course Content System

### Course Data Structure

Each course has two data sources:

1. **JSON metadata** (`data/courses/[course-id].json`)  Course info, modules, chapters
2. **JS notes** (`js/course-notes*.js`)  Detailed reading content per module

### Course Notes Structure

Each course's notes are an array of module objects:

`javascript
courseNotes['course-id'] = [
  {
    module: 1,
    title: 'Module Title',
    sections: [
      {
        heading: 'Section Heading',
        content: <p>HTML content with <strong>formatting</strong>,
                  <code>code</code>, tables, callouts, etc.</p>
                  <pre><code>// Code examples</code></pre>
                  <div class="reading-callout">
                    <h5>Tip Title</h5>
                    <p>Helpful information.</p>
                  </div>
      }
    ]
  }
];
`

### Available CSS Classes for Content

| Class | Purpose |
|-------|---------|
| `reading-section` | Wraps each topic section |
| `reading-callout` | Blue info/tip box with left border |
| `reading-warning` | Yellow/orange warning box (add alongside `reading-callout`) |
| `reading-table` | Styled data table |
| `<pre><code>` | Code block (dark background) |
| `<code>` in `<p>` | Inline code (blue background) |

---

## Adding a New Course

Follow these steps to add a new course to the platform:

### Step 1: Create Course Data

Create `data/courses/[course-id].json` with course metadata (title, description, modules, chapters).

### Step 2: Create Course Detail Page

Copy an existing course page (e.g., `pages/course/python-programming.html`) and update:

- Hero section (title, description, badges, instructor info)
- Syllabus modules and chapters
- Overview tab (learning outcomes, prerequisites, description)
- Reviews tab
- Sidebar info (difficulty, duration, modules count)

Make sure the tabs include the **Course Notes** tab:

`html
<div class="tabs">
    <button class="tab active" data-tab="syllabus">Syllabus</button>
    <button class="tab" data-tab="coursenotes">Course Notes</button>
    <button class="tab" data-tab="overview">Overview</button>
    <button class="tab" data-tab="reviews">Reviews</button>
</div>
`

And include the empty container for notes:

`html
<div class="tab-pane" id="coursenotes">
    <div class="course-notes-content" id="courseNotesContent"></div>
</div>
`

### Step 3: Add Course Notes

Create a new file `js/course-notes-[name].js` and add your reading content:

`javascript
courseNotes['your-course-id'] = [
  {
    module: 1,
    title: 'Module Title',
    sections: [
      {
        heading: 'Topic Heading',
        content: <p>Your detailed content here...</p>
      }
    ]
  }
];
`

### Step 4: Link Scripts in Your Course Page

Add the script tags before the closing `</body>`:

`html
<script src="../../js/app.js"></script>
<script src="../../js/course-notes.js"></script>
<script src="../../js/course-notes-[name].js"></script>
<script src="../../js/course-notes-render.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', () => {
        renderCourseNotes('your-course-id');
    });
</script>
`

### Step 5: Add Course Card

Add a course card to `pages/courses.html` and `index.html` (courses section) linking to your new course page.

### Step 6: Add Course Image

Place a thumbnail image in `assets/images/courses/` and reference it in your course card.

---

## Firebase Setup

The project uses Firebase for authentication and data storage.

### Firebase Services Used

| Service | Purpose |
|---------|---------|
| **Firebase Auth** | Email/password login, Google sign-in |
| **Cloud Firestore** | User profiles, progress tracking, course data |
| **Firebase Storage** | File uploads (if needed) |
| **Firebase Analytics** | Usage tracking |

### Configuration

Firebase config is in `js/firebase-config.js`. The current project ID is `bytelearn-75245`.

To use your own Firebase project:

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable **Authentication** (Email/Password + Google providers)
4. Enable **Cloud Firestore**
5. Copy your config object and replace the values in `js/firebase-config.js`

`javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};
`

---

## Coding Conventions

### General

- **No build tools**  keep it vanilla HTML/CSS/JS
- **No frameworks**  pure DOM manipulation
- **ES6+ syntax**  `const`/`let`, arrow functions, template literals, destructuring
- **Semantic HTML**  use `<header>`, `<main>`, `<section>`, `<article>`, `<nav>`, `<footer>`

### CSS

- Use CSS custom properties from `variables.css`  never hard-code colors or spacing
- Mobile-first responsive design
- Use existing component classes from `components.css` before writing new styles
- Page-specific styles go in `css/pages/[page].css`

### JavaScript

- `app.js` is loaded on every page  put shared utilities there
- Page-specific JS goes in inline `<script>` tags at the bottom of each page
- Use `document.addEventListener('DOMContentLoaded', ...)` for initialization
- Use `const`/`let` (never `var`)

### File Naming

- HTML pages: `kebab-case.html` (e.g., `python-programming.html`)
- CSS files: `kebab-case.css`
- JS files: `kebab-case.js`
- Course IDs: `kebab-case` matching the HTML filename (e.g., `python-programming`)

---

## Contributing

### Getting Started

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Test locally by running the dev server
5. Commit with clear messages: `git commit -m "Add: new quiz component"`
6. Push to your branch: `git push origin feature/your-feature-name`
7. Open a Pull Request

### Commit Message Format

`
Type: Brief description

Types:
  Add:    New feature or content
  Fix:    Bug fix
  Update: Modify existing feature
  Style:  CSS/UI changes (no logic change)
  Docs:   Documentation changes
  Refactor: Code restructuring
`

### Branch Naming

- `feature/description`  New features
- `fix/description`  Bug fixes
- `content/course-name`  Course content additions
- `style/description`  UI/CSS changes

---

## Current Courses

| Course | ID | Modules | Status |
|--------|----|---------|--------|
| Programming with Python | `python-programming` | 5 | Complete (syllabus + notes) |
| Web Programming | `web-programming` | 5 | Complete (syllabus + notes) |
| AI & Machine Learning | `ai-machine-learning` | 5 | Complete (syllabus + notes) |
| Computer Fundamentals | `computer-fundamentals` | 5 | Complete (syllabus + notes) |
| Introduction to Databases | `databases-intro` | 5 | Complete (syllabus + notes) |

---

## License

MIT License. See `package.json` for details.

---

*Built with care by the ByteLearn Team.*
