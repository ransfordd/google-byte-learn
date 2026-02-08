// Course Notes Renderer - renders course notes into the page
function renderCourseNotes(courseId) {
    const container = document.getElementById('courseNotesContent');
    if (!container || !courseNotes[courseId]) return;

    const modules = courseNotes[courseId];
    let html = '';

    modules.forEach((mod, index) => {
        const isFirst = index === 0;
        html += `
        <div class="module-reading">
            <div class="module-reading-header${isFirst ? ' open' : ''}" onclick="this.classList.toggle('open'); this.nextElementSibling.classList.toggle('open');">
                <span class="reading-module-num">${mod.module}</span>
                <h3>${mod.title}</h3>
                <svg class="reading-chevron" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="6 9 12 15 18 9"/>
                </svg>
            </div>
            <div class="module-reading-body${isFirst ? ' open' : ''}">
                ${mod.sections.map(section => `
                    <div class="reading-section">
                        <h4>${section.heading}</h4>
                        ${section.content}
                    </div>
                `).join('')}
            </div>
        </div>`;
    });

    container.innerHTML = html;
}
