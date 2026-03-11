import Lenis from '@studio-freight/lenis';
import AOS from 'aos';
import { loadSlim } from '@tsparticles/slim';
import { tsParticles } from '@tsparticles/engine';

// Import Components
import { renderHero } from './components/hero.js';
import { renderAbout } from './components/about.js';
import { renderSkills } from './components/skills.js';
import { renderExperience } from './components/experience.js';
import { renderProjects } from './components/projects.js';
import { renderContact } from './components/contact.js';

// Initialize Smooth Scrolling (Lenis)
const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// Initialize Scroll Reveal (AOS)
AOS.init({
    duration: 1000,
    once: false,
    offset: 100,
    easing: 'ease-in-out',
});

// Initialize Particle Background
async function initParticles() {
    await loadSlim(tsParticles);
    await tsParticles.load({
        id: "tsparticles",
        options: {
            background: {
                color: {
                    value: "transparent",
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: {
                    value: "#00f0ff",
                },
                links: {
                    color: "#b026ff",
                    distance: 150,
                    enable: true,
                    opacity: 0.2,
                    width: 1,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 1,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.3,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 3 },
                },
            },
            detectRetina: true,
        },
    });
}
initParticles();

// Custom Cursor Logic
function initCustomCursor() {
    const cursorDot = document.querySelector('[data-cursor-dot]');
    const cursorOutline = document.querySelector('[data-cursor-outline]');

    if (!cursorDot || !cursorOutline) return;

    window.addEventListener('mousemove', function (e) {
        const posX = e.clientX;
        const posY = e.clientY;

        cursorDot.style.left = `${posX}px`;
        cursorDot.style.top = `${posY}px`;

        // Add a slight delay/smoothness to the outline
        cursorOutline.animate({
            left: `${posX}px`,
            top: `${posY}px`
        }, { duration: 500, fill: "forwards" });
    });

    // Add hover effect to clickable elements
    const clickables = document.querySelectorAll('a, button, .btn, .glass-card, .skill-item');
    clickables.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursorOutline.classList.add('hover-active');
            cursorDot.classList.add('hover-active');
        });
        el.addEventListener('mouseleave', () => {
            cursorOutline.classList.remove('hover-active');
            cursorDot.classList.remove('hover-active');
        });
    });
}

// Fetch Data & Render Sections
async function loadPortfolioData() {
    try {
        const response = await fetch('/src/data/profile.json');
        if (!response.ok) throw new Error('Failed to load profile data');
        const data = await response.json();

        // Render each component dynamically
        renderHero(data);
        renderAbout(data);
        renderSkills(data.skills);
        renderExperience(data.experience);
        renderProjects(data.projects);
        renderContact(data.contact, data.socialLinks);

        // Initialize cursor after DOM paints
        initCustomCursor();

        // Refresh AOS due to DOM mutation
        setTimeout(() => {
            AOS.refreshHard();
        }, 100);

    } catch (error) {
        console.error('Error loading portfolio data:', error);
        document.getElementById('app').innerHTML = `<div class="container" style="text-align:center; padding: 100px 0;"><h2 class="text-gradient">Error loading profile data.</h2><p>${error.message}</p></div>`;
    }
}

document.addEventListener('DOMContentLoaded', loadPortfolioData);
