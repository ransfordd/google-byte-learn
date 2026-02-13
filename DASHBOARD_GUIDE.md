# Google ByteLearn - Dashboard Guide

This guide details the implementation, structure, and functionality of the **Tutor** and **Admin** dashboards. It serves as an addendum to the main application guide.

---

## Table of Contents

- [Dashboard Overview](#dashboard-overview)
- [Tutor Dashboard](#tutor-dashboard)
- [Admin Dashboard](#admin-dashboard)
- [CSS Architecture](#css-architecture)
- [Component Library](#component-library)
- [Data & State Management](#data--state-management)

---

## Dashboard Overview

The dashboards provide role-specific interfaces for managing the ByteLearn platform. They share a common layout and design language with the main student application but introduce specialized components for data management.

> [!NOTE]
> A **third dashboard** is currently being developed by a fellow team member. This guide covers the **Tutor** and **Admin** dashboards only.

### Shared Layout Structure

Both dashboards use the main `app-layout` grid:

```html
<div class="app-layout">
    <aside class="app-sidebar">...</aside>
    <main class="app-main">
        <header class="app-header">...</header>
        <div class="app-content">...</div>
    </main>
</div>
```

-   **Sidebar:** Contains role-specific navigation links.
-   **Header:** Standard header with sidebar toggle, notifications, and theme switcher.
-   **Content Area:** The main scrollable region for dashboard widgets.

---

## Tutor Dashboard

**File:** `pages/tutor-dashboard.html`  
**CSS:** `css/pages/tutor-dashboard.css`

The Tutor Dashboard is designed for instructors to manage their courses and track student engagement.

### Key Sections

#### 1. Performance Stats
A grid of 4 cards displaying high-level metrics:
-   **Total Students:** Aggregate count across all courses.
-   **Active Courses:** Number of published courses.
-   **Average Rating:** Weighted average of student reviews.
-   **Completion Rate:** Percentage of students who finish enrolled courses.

#### 2. Course Management (`.courses-section`)
A list view of courses owned by the tutor. Each item (`.course-item`) displays:
-   **Thumbnail:** Visual identifier for the course.
-   **Metadata:** Lesson count and student enrollment.
-   **Actions:** "Edit" and "Analytics" buttons.
-   **Status:** "Draft" vs "Published" indicators.

#### 3. Recent Questions (`.qa-section`)
A feed of recent student queries from the Q&A system.
-   **Context:** Shows which course and module the question relates to.
-   **Reply Action:** Allows the tutor to respond directly (mock functionality).

### User Flow: Creating a Course
1.  Tutor clicks **"Create Course"** in the header.
2.  (Future) Opens a modal or navigates to a course creation wizard.
3.  New course appears in the list with "Draft" status.

---

## Admin Dashboard

**File:** `pages/admin-dashboard.html`  
**CSS:** `css/pages/admin-dashboard.css`

The Admin Dashboard provides platform-wide oversight, user management, and system health monitoring.

### Key Sections

#### 1. Site Analytics
A grid of 4 cards showing platform growth:
-   **Total Users:** Registered accounts (Tutors + Students).
-   **Total Courses:** Content library size.
-   **Page Views:** Traffic metric.
-   **System Uptime:** Simulated infrastructure health.

#### 2. User Management (`.users-section`)
A responsive table (`.admin-table`) listing users.
-   **Columns:** User info (Avatar + Name + Email), Role, Status, Join Date, Actions.
-   **Actions:** Edit (pencil icon) and Delete (trash icon).
-   **Responsive Behavior:** The table wrapper (`.table-container`) allows horizontal scrolling on small screens.

#### 3. Approvals Queue (`.approvals-section`)
A list of pending items requiring admin action:
-   **New Courses:** Courses submitted by tutors for review.
-   **Tutor Requests:** Users applying for tutor status.
-   **Actions:** "Approve/Verify" (Green) or "Reject/Deny" (Red).

#### 4. System Health
Visual progress bars indicating server load, database storage, and memory usage.

---

## CSS Architecture

The dashboards rely on the existing global styles (`variables.css`, `base.css`) while adding specific page-level styles.

### `css/pages/tutor-dashboard.css`
-   **`.dashboard-grid`**: Defines the main 2-column layout (2fr for main content, 1fr for sidebar/secondary).
-   **`.course-item`**: Flexbox layout for course cards with hover effects.
-   **`.qa-item`**: Styling for the question feed items.

### `css/pages/admin-dashboard.css`
-   **`.admin-table`**: Custom table styling with specific padding, borders, and header background colors.
-   **`.approval-item`**: Card styling for pending request items.
-   **`.btn-icon-sm`**: Small action buttons used inside table cells.

---

## Component Library

The dashboards make extensive use of reusable utility classes:

| Class | Description |
|-------|-------------|
| `.card` | White container with shadow and rounded corners. |
| `.badge` | Text pill with colored background (`.badge-success`, `.badge-warning`). |
| `.btn-ghost` | Transparent button that shows background on hover. |
| `.avatar` | Circular container for user images or initials. |
| `.animate-fade-in-up` | Keyframe animation for entering elements. |

---

## Data & State Management

Currently, the dashboards use **static HTML** for demonstration.

### Future Integration Points
1.  **Firebase Integration:**
    -   Fetch `users` collection for the Admin User Table.
    -   Query `courses` where `instructorId` matches the current user for the Tutor Dashboard.
2.  **Real-time Updates:**
    -   Use Firestore listeners (`onSnapshot`) to update stats like "Active Students" in real-time.
3.  **Authentication:**
    -   The `js/auth.js` logic handles login. The dashboards currently simulate a logged-in state. In production, we would check `firebase.auth().currentUser` and redirect if unauthorized.

---

*Verified compatible with ByteLearn Design System v1.0*
