/**
 * Google ByteLearn - Dashboard Logic
 * Handles interactivity for Tutor and Admin dashboards.
 * Note: This contains MOCK functionality for demonstration purposes.
 */

document.addEventListener('DOMContentLoaded', () => {
    initDashboardInteractions();
});

function initDashboardInteractions() {
    // --- Shared Interactions ---

    // Notifications
    const notificationBtns = document.querySelectorAll('.navbar-action-btn[aria-label="Notifications"]');
    notificationBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('No new notifications at the moment.');
        });
    });

    // --- Layout Interactions (Sidebar & Theme) ---
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const appMain = document.querySelector('.app-main');

    document.getElementById('sidebarToggle')?.addEventListener('click', () => {
        if (sidebar) sidebar.classList.toggle('collapsed');
        if (appMain) appMain.classList.toggle('sidebar-collapsed');
    });

    document.getElementById('mobileMenuToggle')?.addEventListener('click', () => {
        if (sidebar) sidebar.classList.add('open');
        if (sidebarOverlay) sidebarOverlay.classList.add('active');
    });

    document.getElementById('sidebarOverlay')?.addEventListener('click', () => {
        if (sidebar) sidebar.classList.remove('open');
        if (sidebarOverlay) sidebarOverlay.classList.remove('active');
    });

    // Theme Toggle (relying on app.js `toggleTheme`)
    const themeBtn = document.getElementById('themeToggle');
    if (themeBtn && typeof toggleTheme === 'function') {
        themeBtn.addEventListener('click', toggleTheme);
    }

    // Sidebar Placeholder Links
    document.querySelectorAll('.sidebar-link[href="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const featureName = link.querySelector('.sidebar-link-text').textContent;
            alert(`The "${featureName}" feature is coming soon!`);
        });
    });

    // --- Tutor Dashboard Interactions ---

    // Create Course Button
    const createCourseBtn = document.querySelector('.btn-primary'); // Assumes it's the first primary button in header
    if (createCourseBtn && createCourseBtn.textContent.includes('Create Course')) {
        createCourseBtn.addEventListener('click', () => {
            const courseName = prompt("Enter the name of your new course:");
            if (courseName) {
                alert(`Draft course "${courseName}" created successfully!`);
                // In a real app, this would add a new item to the list
            }
        });
    }

    // Course List Actions (Edit, Analytics, Publish)
    document.querySelectorAll('.course-item-actions .btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const action = e.target.textContent.trim();
            const courseTitle = e.target.closest('.course-item').querySelector('h3').textContent;

            if (action === 'Edit') {
                alert(`Opening editor for "${courseTitle}"...`);
            } else if (action === 'Analytics') {
                alert(`Showing analytics for "${courseTitle}"...`);
            } else if (action === 'Publish') {
                if (confirm(`Are you sure you want to publish "${courseTitle}"?`)) {
                    alert(`"${courseTitle}" is now live!`);
                    e.target.textContent = 'Analytics';
                    e.target.classList.replace('btn-primary', 'btn-ghost');
                    e.target.closest('.course-item').querySelector('.badge').remove();
                }
            }
        });
    });

    // Q&A Reply
    document.querySelectorAll('.qa-item .btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const student = e.target.closest('.qa-item').querySelector('.user-name').textContent;
            const reply = prompt(`Reply to ${student}:`);
            if (reply) {
                alert('Reply sent!');
                e.target.textContent = 'Replied';
                e.target.disabled = true;
            }
        });
    });

    // --- Admin Dashboard Interactions ---



    // --- Admin Users / Tutors / Students Page Logic ---
    if (window.location.href.includes('admin-users') || window.location.href.includes('admin-tutors') || window.location.href.includes('admin-students')) {
        const modal = document.getElementById('userModal');
        const userForm = document.getElementById('userForm');
        const modalTitle = document.getElementById('modalTitle');
        const cancelBtn = document.getElementById('cancelModalBtn');

        const tutorsTableBody = document.querySelector('#tutorsTable tbody');
        const studentsTableBody = document.querySelector('#studentsTable tbody');

        // Open Add Modal
        document.getElementById('addUserBtn')?.addEventListener('click', () => {
            modal.style.display = 'flex';
            modalTitle.textContent = 'Add User';
            userForm.reset();
            document.getElementById('editRowId').value = ''; // Clear edit ID
            document.getElementById('passwordGroup').style.display = 'block'; // Show password for new users
        });

        // Close Modal
        const closeModal = () => {
            modal.style.display = 'none';
        };
        cancelBtn?.addEventListener('click', closeModal);
        modal?.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        // Search Logic
        document.getElementById('userSearch')?.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();
            const allRows = document.querySelectorAll('.admin-table tbody tr');

            allRows.forEach(row => {
                const text = row.textContent.toLowerCase();
                row.style.display = text.includes(term) ? '' : 'none';
            });
        });

        // Delegate Edit/Delete Actions for BOTH tables
        const handleTableActions = (e) => {
            const editBtn = e.target.closest('.edit-user');
            const deleteBtn = e.target.closest('.delete-user');
            const row = e.target.closest('tr');

            if (editBtn) {
                const name = row.querySelector('.font-medium').textContent.trim();
                const email = row.querySelector('.text-xs').textContent.trim();
                const role = row.closest('table').id === 'tutorsTable' ? 'Tutor' : 'Student';
                const status = row.querySelector('td:nth-child(3) .badge').textContent.trim();

                // Open Modal with Data
                modal.style.display = 'flex';
                modalTitle.textContent = 'Edit User';
                document.getElementById('editRowId').value = row.rowIndex;
                // Store table ID to know which table to update
                userForm.dataset.editingTable = row.closest('table').id;

                document.getElementById('userNameInput').value = name;
                document.getElementById('userEmailInput').value = email;
                document.getElementById('userRoleInput').value = role;
                document.getElementById('userStatusInput').value = status;
                document.getElementById('passwordGroup').style.display = 'none';
            }

            if (deleteBtn) {
                const name = row.querySelector('.font-medium').textContent.trim();
                if (confirm(`Are you sure you want to delete user "${name}"?`)) {
                    row.style.opacity = '0.5';
                    row.style.pointerEvents = 'none';
                    alert(`User "${name}" has been deactivated.`);
                }
            }
        };

        tutorsTableBody?.addEventListener('click', handleTableActions);
        studentsTableBody?.addEventListener('click', handleTableActions);

        // Save User Logic
        userForm?.addEventListener('submit', (e) => {
            e.preventDefault();
            const editRowId = document.getElementById('editRowId').value;
            const editingTableId = userForm.dataset.editingTable;

            const name = document.getElementById('userNameInput').value;
            const email = document.getElementById('userEmailInput').value;
            const role = document.getElementById('userRoleInput').value; // Student, Tutor, Admin
            const status = document.getElementById('userStatusInput').value;

            // Determine Target Table based on Role
            // Admin role defaults to Tutors table for now, or could have its own.
            let targetTableBody;
            if (role === 'Tutor' || role === 'Admin') {
                targetTableBody = tutorsTableBody;
            } else {
                targetTableBody = studentsTableBody;
            }

            const roleBadgeClass = role === 'Tutor' ? 'badge-warning' : (role === 'Admin' ? 'badge-danger' : 'badge-primary');
            const statusBadgeClass = status === 'Active' ? 'badge-success' : 'badge-secondary';

            // HTML for the User Cell
            const userCellHtml = `
                <div class="user-cell">
                    <div class="avatar avatar-sm" style="background: var(--google-blue);">${name.charAt(0).toUpperCase()}</div>
                    <div>
                        <div class="font-medium">${name}</div>
                        <div class="text-xs text-muted">${email}</div>
                    </div>
                </div>
            `;

            // HTML for Actions
            const actionsHtml = `
                 <button class="btn-icon-sm edit-user" title="Edit"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></button>
                 <button class="btn-icon-sm text-danger delete-user" title="Delete"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg></button>
            `;

            if (editRowId && editingTableId) {
                // Update Existing Row
                // Note: If role changed (e.g. Student -> Tutor), we should move the row.
                // For simplicity here, we'll just update in place or re-create.
                // A robust solution would delete old row and add new row if table changed.

                const sourceTable = document.getElementById(editingTableId);
                const row = sourceTable.rows[editRowId]; // 1-based index from rowIndex matches table.rows access if header is row 0

                // Check if role change requires moving tables
                const currentTableId = (role === 'Tutor' || role === 'Admin') ? 'tutorsTable' : 'studentsTable';

                if (currentTableId !== editingTableId) {
                    // Role changed, delete from old table and add to new
                    sourceTable.deleteRow(editRowId);
                    const newRow = targetTableBody.insertRow();
                    newRow.innerHTML = `
                        <td>${userCellHtml}</td>
                        <td><span class="badge ${roleBadgeClass}">${role}</span></td>
                        <td><span class="badge ${statusBadgeClass}">${status}</span></td>
                        <td>${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                        <td class="text-sm text-muted">Just now</td>
                        <td>${actionsHtml}</td>
                    `;
                    alert(`User "${name}" updated and moved to ${role}s list!`);
                } else {
                    // Update in place
                    if (row) {
                        row.cells[0].innerHTML = userCellHtml;
                        row.cells[1].innerHTML = `<span class="badge ${roleBadgeClass}">${role}</span>`;
                        row.cells[2].innerHTML = `<span class="badge ${statusBadgeClass}">${status}</span>`;
                        alert(`User "${name}" updated successfully!`);
                    }
                }
            } else {
                // Add New Row
                const newRow = targetTableBody.insertRow();
                newRow.innerHTML = `
                    <td>${userCellHtml}</td>
                    <td><span class="badge ${roleBadgeClass}">${role}</span></td>
                    <td><span class="badge ${statusBadgeClass}">${status}</span></td>
                    <td>${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</td>
                    <td class="text-sm text-muted">Just now</td>
                    <td>${actionsHtml}</td>
                `;
                alert(`User "${name}" added successfully!`);
            }

            closeModal();
        });
    }

    // Export CSV
    const exportBtn = document.querySelector('.users-section .btn-outline-primary');
    if (exportBtn) {
        exportBtn.addEventListener('click', () => {
            console.log('Exporting data...');
            alert('Downloading user_data.csv...');
        });
    }

    // Approval Queue
    document.querySelectorAll('.approval-item .btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const action = e.target.textContent.trim();
            const title = e.target.closest('.approval-item').querySelector('h3').textContent;
            const card = e.target.closest('.approval-item');

            if (['Approve', 'Verify'].includes(action)) {
                if (confirm(`Approve "${title}"?`)) {
                    card.style.display = 'none';
                    alert(`"${title}" approved!`);
                }
            } else {
                if (confirm(`Reject "${title}"?`)) {
                    card.style.display = 'none';
                    alert(`"${title}" rejected.`);
                }
            }
        });
    });

    // --- Advanced Admin Features ---

    // Export Users to CSV (Real Implementation)
    const realExportBtn = document.getElementById('exportUsers');
    if (realExportBtn) {
        realExportBtn.addEventListener('click', () => {
            const rows = [['Name', 'Email', 'Role', 'Status', 'Joined']];
            const tables = document.querySelectorAll('.admin-table');

            tables.forEach(table => {
                table.querySelectorAll('tbody tr').forEach(tr => {
                    const nameEl = tr.querySelector('.font-medium');
                    const emailEl = tr.querySelector('.text-xs');
                    const roleEl = tr.querySelector('td:nth-child(2) .badge');
                    const statusEl = tr.querySelector('td:nth-child(3) .badge');
                    const joinedEl = tr.querySelectorAll('td')[3];

                    if (nameEl && emailEl) {
                        const name = nameEl.textContent.trim();
                        const email = emailEl.textContent.trim();
                        const role = roleEl ? roleEl.textContent.trim() : '';
                        const status = statusEl ? statusEl.textContent.trim() : '';
                        const joined = joinedEl ? joinedEl.textContent.trim() : '';
                        rows.push([`"${name}"`, `"${email}"`, `"${role}"`, `"${status}"`, `"${joined}"`]);
                    }
                });
            });

            if (rows.length <= 1) {
                alert('No data found to export.');
                return;
            }

            const csvContent = "data:text/csv;charset=utf-8,"
                + rows.map(e => e.join(",")).join("\n");

            let filename = "bytelearn_users.csv";
            if (window.location.href.includes('admin-tutors')) filename = "bytelearn_tutors.csv";
            else if (window.location.href.includes('admin-students')) filename = "bytelearn_students.csv";
            else if (window.location.href.includes('admin-dashboard')) filename = "bytelearn_dashboard_users.csv";

            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", filename);
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }

    // Support Ticket Logic
    const supportTable = document.querySelector('table'); // Generic selector, safe for dedicated page
    if (supportTable && window.location.href.includes('support')) {
        supportTable.addEventListener('click', (e) => {
            if (e.target.textContent === 'Resolve') {
                if (confirm('Mark this ticket as resolved?')) {
                    const row = e.target.closest('tr');
                    const statusBadge = row.querySelector('.badge');
                    statusBadge.className = 'badge badge-success';
                    statusBadge.textContent = 'Resolved';
                    e.target.textContent = 'Closed';
                    e.target.disabled = true;
                    e.target.classList.add('btn-ghost');
                }
            }
        });
    }

    // Course Management Logic
    if (window.location.href.includes('admin-courses')) {
        document.querySelectorAll('.btn-outline-primary').forEach(btn => {
            btn.addEventListener('click', (e) => {
                if (confirm('Are you sure you want to unpublish this course?')) {
                    const row = e.target.closest('tr');
                    const badge = row.querySelector('.badge');
                    badge.className = 'badge badge-warning';
                    badge.textContent = 'Draft';
                    e.target.disabled = true;
                    e.target.textContent = 'Unpublished';
                }
            });
        });
    }
}
