export function renderSkills(skillsData) {
  const container = document.getElementById('skills');
  if (!container) return;

  const skillsHTML = skillsData.map((skill, index) => {
    return `
      <div class="skill-item glass-card" data-aos="zoom-in" data-aos-delay="${index * 100}">
        <div class="skill-icon-wrapper">
          <i class='bx ${skill.icon}'></i>
        </div>
        <span class="skill-name text-gradient">${skill.name}</span>
        <div class="skill-meta">
          <span class="skill-category">${skill.category}</span>
          <span class="skill-dot">•</span>
          <span class="skill-proficiency text-gradient">${skill.proficiency}</span>
        </div>
      </div>
    `;
  }).join('');

  container.innerHTML = `
    <div class="container">
      <h2 class="section-title text-gradient" data-aos="fade-up">Technical Arsenal</h2>
      <div class="skills-grid-icons">
        ${skillsHTML}
      </div>
    </div>
  `;
}
