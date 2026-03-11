export function renderExperience(experienceData) {
    const container = document.getElementById('experience');
    if (!container) return;

    const expHTML = experienceData.map((exp, index) => {
        return `
      <div class="timeline-item" data-aos="fade-up" data-aos-delay="${index * 150}">
        <div class="timeline-dot"></div>
        <div class="timeline-content glass-card">
          <div class="timeline-header">
            <h3 class="role text-gradient">${exp.role}</h3>
            <span class="period">${exp.period}</span>
          </div>
          <h4 class="company">${exp.company}</h4>
          <p class="description">${exp.description}</p>
        </div>
      </div>
    `;
    }).join('');

    container.innerHTML = `
    <div class="container">
      <h2 class="section-title text-gradient" data-aos="fade-up">Experience Matrix</h2>
      <div class="timeline">
        ${expHTML}
      </div>
    </div>
  `;
}
