export function renderHero(data) {
    const container = document.getElementById('hero');
    if (!container) return;

    container.innerHTML = `
    <div class="container hero-content" data-aos="fade-up">
      <div class="hero-text">
        <h1 class="hero-title">
          Hi, I'm <br />
          <span class="text-gradient">${data.name}</span>
        </h1>
        <h2 class="hero-subtitle">${data.title}</h2>
        <div class="hero-actions" data-aos="fade-up" data-aos-delay="200">
          <a href="#projects" class="btn btn-primary">View My Work</a>
          <a href="#contact" class="btn btn-outline">Contact Me</a>
        </div>
      </div>
      <div class="hero-image" data-aos="zoom-in" data-aos-delay="300">
        <div class="image-wrapper glass-card">
          <img src="${data.profileImage}" alt="${data.name} Profile" />
        </div>
      </div>
    </div>
  `;
}
