export function renderAbout(data) {
    const container = document.getElementById('about');
    if (!container) return;

    container.innerHTML = `
    <div class="container" data-aos="fade-up">
      <h2 class="section-title text-gradient">About Me</h2>
      <div class="about-content glass-card" data-aos="fade-up" data-aos-delay="100">
        <div class="about-bio">
          ${data.bio}
        </div>
      </div>
    </div>
  `;
}
