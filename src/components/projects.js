export function renderProjects(projectsData) {
    const container = document.getElementById('projects');
    if (!container) return;

    const projectsHTML = projectsData.map((project, index) => {
        const tagsHTML = project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('');

        return `
      <div class="project-card glass-card" data-aos="fade-up" data-aos-delay="${index * 100}">
        <div class="project-image-wrapper">
          <img src="${project.image}" alt="${project.title}" class="project-image" />
          <div class="project-overlay">
            <a href="${project.link}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Live Demo</a>
            <a href="${project.github}" class="btn btn-outline" target="_blank" rel="noopener noreferrer">Source</a>
          </div>
        </div>
        <div class="project-info">
          <h3 class="project-title text-gradient">${project.title}</h3>
          <p class="project-desc">${project.description}</p>
          <div class="project-tags">
            ${tagsHTML}
          </div>
        </div>
      </div>
    `;
    }).join('');

    container.innerHTML = `
    <div class="container">
      <h2 class="section-title text-gradient" data-aos="fade-up">Featured Projects</h2>
      <div class="projects-grid">
        ${projectsHTML}
      </div>
    </div>
  `;
}
