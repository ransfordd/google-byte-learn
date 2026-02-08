# Google ByteLearn  Application Guide

This guide explains how the ByteLearn application works from a user and technical perspective. Read this to understand the full user journey, how each feature functions, and how the different parts of the codebase connect together.

---

## Table of Contents

- [Application Overview](#application-overview)
- [User Journey](#user-journey)
- [Home Page](#home-page)
- [Authentication Flow](#authentication-flow)
- [Course Catalog](#course-catalog)
- [Course Detail Page](#course-detail-page)
- [Lesson Viewer](#lesson-viewer)
- [Quiz System](#quiz-system)
- [Dashboard](#dashboard)
- [Leaderboard & Gamification](#leaderboard--gamification)
- [Code Editor](#code-editor)
- [AI Chat Assistant](#ai-chat-assistant)
- [Theme System](#theme-system)
- [Navigation & Responsive Behavior](#navigation--responsive-behavior)
- [Data Flow Diagram](#data-flow-diagram)

---

## Application Overview

ByteLearn is a **computer science e-learning platform** that provides structured courses with multiple learning modes:

- **Video Lessons**  Embedded YouTube videos for each chapter
- **Reading Materials**  Detailed text content with code examples, tables, and callouts
- **Coding Exercises**  Hands-on practice with an in-browser code editor
- **Quizzes**  Module-end assessments with XP rewards
- **AI Assistant**  Chat widget for learner questions

The platform uses a **gamification system** (XP points, streaks, leaderboard) to motivate learners.

### Current Courses

| Course | Difficulty | Duration | Modules |
|--------|-----------|----------|---------|
| Programming with Python | Beginner | 8 weeks | 5 |
| Web Programming | Beginner | 10 weeks | 5 |
| AI & Machine Learning | Intermediate | 12 weeks | 5 |
| Computer Fundamentals | Beginner | 6 weeks | 5 |
| Introduction to Databases | Beginner | 8 weeks | 5 |

---

## User Journey

Here is the typical flow a user follows through the application:

`
Landing Page (index.html)
    |
    v
Sign Up / Log In (/pages/auth/)
    |
    v
Browse Courses (/pages/courses.html)
    |
    v
Course Detail Page (/pages/course/[course].html)
    |-- Syllabus Tab: View modules and chapters
    |-- Course Notes Tab: Read detailed content per module
    |-- Overview Tab: Learning outcomes, prerequisites
    |-- Reviews Tab: Student feedback
    |
    v
Start Learning
    |
    |-- Lesson Page (/pages/course/lesson.html)
    |   |-- Watch video
    |   |-- Read notes
    |   |-- Try code editor
    |   |-- View resources
    |   |-- Ask AI assistant
    |   |-- Mark as complete
    |   +-- Continue to next lesson
    |
    |-- Quiz Page (/pages/course/quiz.html)
    |   |-- Answer questions
    |   +-- Earn XP
    |
    v
Dashboard (/pages/dashboard.html)
    |-- Track progress across courses
    |-- View XP earned
    |-- Continue where you left off
    |
    v
Leaderboard (/pages/leaderboard.html)
    +-- Compare XP with other learners
`

---

## Home Page

**File:** index.html | **CSS:** css/pages/home.css

The landing page is the first thing visitors see. It consists of these sections:

### Hero Section
- **Animated title** with continuous floating motion and gradient underline shimmer
- **Animated description** with floating effect and flowing accent line
- **Floating decorative elements** (code snippets, particles) in the background
- **CTA buttons**  "Start Learning Free" and "Explore Courses"
- **Parallax scrolling**  hero elements respond to scroll position

### Features Section
- Four feature cards (Interactive Lessons, AI Assistant, Hands-on Practice, Track Progress)
- **Scroll-reveal animation**  cards fade in and slide up when scrolled into view
- **Hover effects**  cards lift with shadow on hover, icons get color backgrounds
- **Click pulse**  cards animate briefly when clicked

### Courses Preview Section
- Shows cards for all 5 courses with thumbnail images, difficulty badges, duration, and lesson count
- **Scroll-reveal** with staggered animation (each card appears slightly after the previous)
- **Hover effects**  image zooms, title turns blue, meta info highlights
- **Click navigation**  clicking anywhere on the card navigates to the course detail page

### How It Works Section
- Four step cards explaining the learning process
- **Staggered reveal animation** on scroll
- **Hover lift effect** with step number highlight

### Gamification Section
- Showcases the XP, streak, and leaderboard features
- **Leaderboard preview** with animated XP counters (numbers count up when scrolled into view)
- **Feature cards** with hover effects

### CTA Section
- Final call-to-action to sign up
- **Hover scale effect** with glowing box shadow

### How Animations Work (Technical)

All scroll-reveal animations use the **Intersection Observer API** in JavaScript:

`javascript
// Elements start hidden (opacity: 0, translateY: 30px))
// When they scroll into view, the 'visible' class is added
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, index * 100); // Staggered delay
        }
    });
}, { threshold: 0.1 });
`

The CSS transitions handle the actual animation:

`css
.feature-card {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.6s ease;
}
.feature-card.visible {
    opacity: 1;
    transform: translateY(0);
}
`

---

## Authentication Flow

**Files:** pages/auth/login.html, pages/auth/signup.html, pages/auth/reset-password.html
**CSS:** css/pages/auth.css | **JS:** js/auth.js, js/firebase-config.js

### How It Works

1. **Sign Up**  User enters name, email, password. Form validates input client-side (required fields, email format, password length). On submit, uth.js calls Firebase Auth createUserWithEmailAndPassword().

2. **Log In**  Email/password login via signInWithEmailAndPassword(). Also supports **Google Sign-In** via signInWithPopup() using Google as the auth provider.

3. **Password Reset**  User enters email, Firebase sends a password reset email via sendPasswordResetEmail().

4. **Auth State**  Firebase Auth maintains a session. When a page loads, onAuthStateChanged() detects whether the user is logged in and updates the UI (show/hide login buttons, show user avatar, etc.).

### Auth Pages Structure

Each auth page has:
- A **split layout**  decorative left panel + form right panel
- **Form validation**  HTML5 validation attributes (equired, 	ype="email", minlength)
- **Error messages**  displayed inline below the form
- **Social login**  Google sign-in button
- **Links**  between login, signup, and reset password pages

### Auth State in the App

`
User visits page
    |
    v
Firebase checks auth state (onAuthStateChanged)
    |
    +-- Logged in: Show user avatar, dashboard link, hide login/signup buttons
    |
    +-- Not logged in: Show login/signup buttons, hide dashboard link
`

---

## Course Catalog

**File:** pages/courses.html | **CSS:** css/pages/courses.css

### How It Works

The course catalog displays all available courses in a filterable grid layout.

### Page Structure

1. **Header**  Shared navbar with search bar, navigation links, and auth buttons
2. **Page Hero**  "Explore Courses" title with subtitle, styled with gradient background
3. **Filter Bar**  Tab-style buttons to filter courses by category (All, Programming, Web, Data Science, Fundamentals)
4. **Course Grid**  Responsive grid of course cards

### Course Cards

Each card displays:
- **Thumbnail image** from ssets/images/courses/
- **Difficulty badge** (Beginner, Intermediate)  color-coded
- **Course title** and short description
- **Meta info**  duration and lesson count with icons
- **Tags**  technology/topic tags
- **"View Course" button**  links to the course detail page

### Filtering (Technical)

The filter tabs use JavaScript to show/hide course cards:

`javascript
// Each course card has a data-category attribute
// Clicking a filter tab shows only matching cards
filterTab.addEventListener('click', () => {
    const category = tab.dataset.filter;
    document.querySelectorAll('.course-card').forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
`

---

## Course Detail Page

**Files:** pages/course/[course-name].html (5 course pages)
**CSS:** css/pages/course-detail.css, css/pages/course-hero.css

### Page Structure

Each course detail page has two main sections:

### 1. Hero Section

A visually rich header with:
- **Breadcrumb navigation**  Home > Courses > [Course Name]
- **Difficulty and category badges**
- **Course title and description**
- **Meta cards**  showing duration, lessons count, XP available, and certificate info
- **Instructor info**  avatar, name, title
- **Action buttons**  "Start Learning" and "Add to Wishlist"
- **Visual card**  decorative element with course icon
- **Floating animated elements**  background decoration

### 2. Content Section (Tabbed)

A two-column layout with main content (left) and sidebar (right).

#### Tabs

| Tab | What It Shows |
|-----|---------------|
| **Syllabus** | Accordion of modules, each containing chapter links (video lessons, exercises, quizzes) |
| **Course Notes** | Detailed reading material organized by module (dynamically rendered from JS) |
| **Overview** | Learning outcomes checklist, prerequisites, course description |
| **Reviews** | Rating summary and student review cards |

#### Tab Switching (Technical)

`javascript
document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active from all tabs and panes
        document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
        // Activate clicked tab and its pane
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});
`

#### Syllabus Accordion

Each module has a clickable header that expands/collapses its chapter list:

`javascript
document.querySelectorAll('.module-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const chevron = header.querySelector('.module-chevron');
        const isOpen = content.style.display !== 'none';
        content.style.display = isOpen ? 'none' : 'block';
        chevron.style.transform = isOpen ? '' : 'rotate(180deg)';
    });
});
`

#### Course Notes (Technical)

Notes are loaded dynamically from JavaScript:

1. The HTML page includes script files: course-notes.js (defines courseNotes object) + a course-specific file + course-notes-render.js
2. On DOMContentLoaded, enderCourseNotes('course-id') is called
3. The renderer builds collapsible module sections with all reading content
4. The first module auto-expands; users click headers to expand others

#### Sidebar

Sticky sidebar showing:
- **Progress bar**  percentage of lessons completed
- **Course info**  difficulty, duration, modules, exercises, certificate
- **"Start Learning" button**

---

## Lesson Viewer

**File:** pages/course/lesson.html | **CSS:** css/pages/lesson.css

The lesson page is where the actual learning happens. It has a unique layout different from other pages.

### Layout

`
+--------------------------------------------------+
| Lesson Header (module name, lesson title, progress)|
+----------+---------------------------------------+
| Sidebar  |  Video Player (YouTube embed)          |
| (chapter |  +-----------------------------------+ |
|  list)   |  | Video Controls (Prev/Next/Chapters)| |
|          |  +-----------------------------------+ |
|          |  | Content Tabs                       | |
|          |  |  [Notes] [Code] [Resources] [Chat] | |
|          |  |  +-------------------------------+ | |
|          |  |  | Tab Content Area               | | |
|          |  |  +-------------------------------+ | |
|          |  +-----------------------------------+ |
|          |  | Footer (Mark Complete + Continue)  | |
+----------+---------------------------------------+
| AI Chat Widget (floating button, bottom-right)    |
+--------------------------------------------------+
`

### Components

#### Video Player
- Embedded YouTube iframe
- Previous/Next lesson buttons
- "Chapters" button toggles the sidebar on mobile

#### Sidebar (Chapter List)
- Lists all modules and their chapters
- Current chapter highlighted with ctive class
- Completed chapters shown with a green checkmark
- Chapter types indicated by icons (video icon, code icon for exercises)
- Collapsible module sections (click to expand/collapse)
- On mobile: slides in as an overlay (toggled via "Chapters" button)

#### Content Tabs

| Tab | Content |
|-----|---------|
| **Notes** | Written lesson content with headings, paragraphs, code blocks, info cards, and callout boxes |
| **Code Editor** | In-browser code textarea with Run/Reset buttons and output panel. Simulates Python execution by extracting print() statements |
| **Resources** | Links to official documentation, downloadable slides, starter code repos |
| **Discussion** | Comment section with post form and existing comments (placeholder) |

#### Lesson Footer
- **"Mark as complete" checkbox**  learner checks when done
- **"Continue to Next Lesson" button**  navigates to the next chapter

#### AI Chat Widget
- Floating chat button (bottom-right corner)
- Opens a chat panel with message history
- Bot provides placeholder responses (would connect to an AI API in production)

### Sidebar Toggle (Mobile)

`javascript
document.getElementById('toggleSidebar').addEventListener('click', () => {
    document.getElementById('lessonSidebar').classList.toggle('open');
});
document.getElementById('sidebarClose').addEventListener('click', () => {
    document.getElementById('lessonSidebar').classList.remove('open');
});
`

---

## Quiz System

**File:** pages/course/quiz.html | **CSS:** css/pages/quiz.css

### How It Works

Each module ends with a quiz that tests the learner's understanding. Quizzes are accessed from the module card in the syllabus (e.g., "Module 1 Quiz - 8 questions - 80 XP").

### Quiz Structure

1. **Quiz Header**  Module name, question count, XP reward, time estimate
2. **Question Cards**  Each question displayed as a card with:
   - Question number and text
   - Multiple-choice options (radio buttons)
   - Visual feedback on selection (highlighted border)
3. **Navigation**  Previous/Next question buttons, progress indicator
4. **Submit**  After answering all questions, submit for grading
5. **Results**  Score displayed with correct/incorrect breakdown, XP earned

### URL Parameters

Quiz pages use URL query parameters to identify the course and module:

`
quiz.html?course=python-programming&module=1
`

### XP Rewards

Each quiz has a set XP value (shown on the module card). XP is awarded based on the score:
- **100%**  Full XP
- **80%+**  Pass threshold (most quizzes)
- **Below threshold**  Can retake the quiz

---

## Dashboard

**File:** pages/dashboard.html | **CSS:** css/pages/dashboard.css

### What It Shows

The dashboard is the learner's personal hub after logging in.

### Sections

1. **Welcome Banner**  Personalized greeting with user's name, current streak, and motivational message

2. **Stats Cards**  Quick metrics displayed in a row:
   - Total XP earned
   - Courses enrolled
   - Lessons completed
   - Current streak (days)

3. **Continue Learning**  Shows the course the user was last working on with:
   - Course title and progress bar
   - Current module and chapter name
   - "Continue" button to jump back into the lesson

4. **Enrolled Courses**  Grid of course cards showing:
   - Course thumbnail
   - Progress percentage with visual progress bar
   - Number of lessons completed out of total
   - "Continue" or "Start" button

5. **Recent Activity**  Timeline of recent actions:
   - Completed lessons
   - Quiz scores
   - XP earned
   - Achievements unlocked

6. **Achievements**  Badge/trophy display for milestones (first lesson, first quiz, streak milestones, course completion)

---

## Leaderboard & Gamification

**File:** pages/leaderboard.html | **CSS:** css/pages/leaderboard.css

### Gamification System

ByteLearn uses gamification to keep learners motivated:

| Element | How It Works |
|---------|-------------|
| **XP (Experience Points)** | Earned by completing lessons, quizzes, and exercises. Each activity has a set XP value. |
| **Streaks** | Consecutive days of learning. Displayed on the dashboard. Encourages daily engagement. |
| **Leaderboard** | Ranks all learners by total XP. Updated in real-time. Shows top performers. |
| **Achievements/Badges** | Unlocked at milestones (first lesson, 7-day streak, course completion, etc.) |
| **Progress Tracking** | Visual progress bars on each course showing percentage complete. |

### Leaderboard Page

- **Ranking table**  position, avatar, name, XP, courses completed
- **Top 3 highlight**  featured cards for the top 3 learners with larger avatars
- **Current user highlight**  the logged-in user's row is highlighted
- **Time filters**  All Time, This Month, This Week
- **Animated XP counters**  XP numbers count up when scrolled into view (IntersectionObserver)

### XP Values (Typical)

| Activity | XP Earned |
|----------|-----------|
| Complete a video lesson | 10 XP |
| Complete a coding exercise | 20 XP |
| Pass a module quiz (80%+) | 60-120 XP |
| Complete a course | 500 XP |
| Daily login streak bonus | 5 XP/day |

---

## Code Editor

**File:** pages/practice/editor.html | **CSS:** css/pages/editor.css

### How It Works

The code editor page provides an in-browser coding environment for practice exercises.

### Layout

- **Editor toolbar**  Language selector, Reset button, Run button
- **Code textarea**  Syntax-highlighted input area with monospace font (Fira Code)
- **Output panel**  Shows execution results below the editor

### Code Execution (Simulated)

Since there is no backend, code execution is **simulated** on the client side:

`javascript
// For Python: extracts print() statements and displays their content
const printRegex = /print\(['"](.*?)['"]\)/g;
let matches = [];
let match;
while ((match = printRegex.exec(code)) !== null) {
    matches.push(match[1]);
}
output.textContent = matches.join('\n');
`

> **Future Enhancement:** Connect to a real code execution backend (e.g., Judge0 API, Piston API, or a custom Docker-based sandbox) for actual code compilation and execution.

### Editor Features

- **Pre-filled starter code** for each exercise
- **Reset button**  restores the original starter code
- **Clear output**  clears the output panel
- **Run button**  simulates execution and shows output

---

## AI Chat Assistant

The AI chat widget appears on the lesson page as a floating button in the bottom-right corner.

### How It Works

1. User clicks the chat bubble icon
2. A chat panel slides open with a welcome message from the bot
3. User types a question and submits
4. The user's message appears in the chat
5. After a short delay, a **placeholder bot response** appears

### Current Implementation (Placeholder)

`javascript
// User message is added to the chat
messagesEl.innerHTML += 
    <div class="chat-message user">
        <div class="message-content"><p> + message + </p></div>
    </div>;

// Bot responds with a generic placeholder after 500ms
setTimeout(() => {
    messagesEl.innerHTML += 
        <div class="chat-message bot">
            <div class="message-avatar">robot emoji</div>
            <div class="message-content">
                <p>I understand you're asking about " + message + ".
                This is a placeholder response.</p>
            </div>
        </div>;
}, 500);
`

> **Future Enhancement:** Connect to an AI API (OpenAI, Google Gemini, etc.) to provide real answers based on the current lesson context. The chat could receive the lesson topic and course notes as context for relevant responses.

### UI Structure

- **Chat trigger button**  fixed position, bottom-right, primary color, round icon button
- **Chat panel**  slides up from the button, contains header, messages area, and input form
- **Messages**  user messages aligned right (blue), bot messages aligned left (gray) with avatar
- **Close button**  X icon in the panel header

---

## Theme System

**File:** js/app.js (initTheme function)

### How It Works

ByteLearn supports **light and dark themes**, toggled via a button in the navbar.

### Technical Implementation

1. **Theme preference** is stored in localStorage under the key 'theme'
2. On page load, initTheme() reads the stored preference and applies it
3. The theme toggle button switches between 'light' and 'dark'
4. The theme is applied by setting a data-theme attribute on the <html> element

`javascript
// Reading theme
const theme = localStorage.getItem('theme') || 'light';

// Applying theme
document.documentElement.setAttribute('data-theme', theme);

// Toggling
function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
}
`

### CSS Variables for Theming

The ariables.css file defines color variables that change based on the theme:

`css
/* Light theme (default) */
:root {
    --bg-primary: #ffffff;
    --text-primary: #202124;
    /* ... */
}

/* Dark theme */
[data-theme="dark"] {
    --bg-primary: #1a1a2e;
    --text-primary: #e8eaed;
    /* ... */
}
`

Because all styles use CSS variables, switching the data-theme attribute instantly recolors the entire application.

---

## Navigation & Responsive Behavior

**CSS:** css/navigation.css, css/responsive.css

### Desktop Navigation

The navbar is sticky at the top of every page and contains:
- **Logo/Brand**  "ByteLearn" text, links to home
- **Search bar**  centered, with focus expansion effect
- **Nav links**  Home, Courses, Dashboard, Leaderboard
- **Auth buttons**  Log In (ghost button), Sign Up Free (primary button)
- **Theme toggle**  sun/moon icon button

### Mobile Navigation

On screens below 768px:
- Search bar and nav links are **hidden** (hide-mobile class)
- A **hamburger menu button** appears
- Clicking it opens a **full-screen overlay** (mobile-menu-overlay) with:
  - Close button (X icon)
  - Vertical nav links
  - Search bar
  - Auth buttons

### Responsive Breakpoints

| Breakpoint | Width | Typical Device |
|-----------|-------|----------------|
| sm | 640px | Large phones |
| md | 768px | Tablets |
| lg | 1024px | Small laptops |
| xl | 1280px | Desktops |
| 2xl | 1536px | Large screens |

### Mobile Menu Toggle (Technical)

`javascript
// Open mobile menu
document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
    document.querySelector('.mobile-menu-overlay').classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scroll
});

// Close mobile menu
document.querySelector('.mobile-menu-close').addEventListener('click', () => {
    document.querySelector('.mobile-menu-overlay').classList.remove('active');
    document.body.style.overflow = '';
});
`

---

## Data Flow Diagram

This shows how data moves through the application:

`
+-------------------+     +-------------------+     +-------------------+
|   Static Files    |     |    Firebase       |     |   External APIs   |
|                   |     |                   |     |                   |
| - HTML pages      |     | - Auth (users)    |     | - YouTube (videos)|
| - CSS styles      |     | - Firestore (data)|     | - Google Fonts    |
| - JS scripts      |     | - Storage (files) |     | - Firebase CDN    |
| - Images          |     | - Analytics       |     |                   |
| - JSON data       |     |                   |     |                   |
| - Course notes    |     |                   |     |                   |
+--------+----------+     +--------+----------+     +--------+----------+
         |                          |                          |
         v                          v                          v
+----------------------------------------------------------------------+
|                        Browser (Client)                               |
|                                                                       |
|  +------------------+  +------------------+  +---------------------+  |
|  |     app.js       |  |    auth.js       |  |  course-notes*.js   |  |
|  | (core utilities) |  | (Firebase Auth)  |  | (reading content)   |  |
|  +------------------+  +------------------+  +---------------------+  |
|                                                                       |
|  +------------------+  +------------------+  +---------------------+  |
|  |   localStorage   |  |  DOM Rendering   |  |  URL Parameters     |  |
|  | (theme, state)   |  | (dynamic UI)     |  | (course, module)    |  |
|  +------------------+  +------------------+  +---------------------+  |
+----------------------------------------------------------------------+
`

### Key Data Flows

| Flow | Description |
|------|-------------|
| **Page Load** | Browser loads HTML -> CSS styles applied -> JS initializes (theme, menu, tabs, animations) |
| **Authentication** | User submits form -> uth.js calls Firebase Auth -> auth state stored in Firebase -> UI updated |
| **Course Notes** | Page loads course-notes*.js -> enderCourseNotes() builds HTML -> injected into #courseNotesContent div |
| **Lesson Navigation** | URL params (?course=X&module=Y&chapter=Z) identify the lesson -> page displays matching content |
| **Theme Toggle** | User clicks toggle -> JS updates data-theme attribute -> CSS variables switch -> localStorage persists choice |
| **Progress Tracking** | User marks lesson complete -> data saved to Firestore -> dashboard and progress bars updated |

---

## Known Limitations & Future Work

### Current Limitations

- **No real code execution**  The code editor simulates output by parsing print() statements. It cannot actually run Python or any other language.
- **Static quiz data**  Quiz questions are hardcoded in HTML. No randomization or question bank.
- **Placeholder AI chat**  The chat bot returns generic responses, not real AI answers.
- **No real-time progress sync**  Progress tracking requires full Firebase integration (partially implemented).
- **Lesson page is a single template**  lesson.html currently shows the same content regardless of URL parameters. Each lesson would need dynamic content loading.

### Suggested Future Enhancements

1. **Code execution backend**  Integrate Judge0 API or Piston API for real code compilation
2. **AI integration**  Connect chat widget to Google Gemini or OpenAI API with lesson context
3. **Dynamic lesson loading**  Load lesson content from JSON/Firestore based on URL parameters
4. **Quiz engine**  Store questions in Firestore, support randomization, track attempts
5. **User profiles**  Profile page with avatar upload, bio, social links
6. **Notifications**  Achievement notifications, streak reminders
7. **Discussion forums**  Real comment system with Firestore backend
8. **Course certificates**  Generate PDF certificates on course completion
9. **Admin panel**  For instructors to manage courses, add content, view analytics

---

*This guide is maintained by the ByteLearn development team. Update it when adding new features or changing how existing features work.*
