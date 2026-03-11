export function renderContact(contactData, socialLinksData) {
    const container = document.getElementById('contact');
    const footerContainer = document.getElementById('footer');
    if (!container || !footerContainer) return;

    container.innerHTML = `
    <div class="container" data-aos="fade-up">
      <div class="contact-card glass-card">
        <h2 class="section-title text-gradient">Let's Connect</h2>
        <p class="contact-message">${contactData.message}</p>
        <a href="mailto:${contactData.email}" class="btn btn-primary btn-large">Say Hello</a>
      </div>
    </div>
  `;

    const currentYear = new Date().getFullYear();
    const socialHTML = socialLinksData.map(social => {
        return `<a href="${social.url}" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="${social.platform}">${social.platform}</a>`;
    }).join('');

    footerContainer.innerHTML = `
    <div class="container footer-content">
      <div class="footer-socials">
        ${socialHTML}
      </div>
      <p class="copyright">&copy; ${currentYear} Built with <span class="text-gradient">Vite</span>. All rights reserved.</p>
    </div>
  `;
}
