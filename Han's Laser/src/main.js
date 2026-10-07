/**
 * Main Entry Point — Han's Laser Chile
 * Initializes all components on DOM ready
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize components
    initHeader();
    initHero();
    initProducts();
    initIndustries();
    initProductModal();
    initContact();

    // Render about stats
    renderAboutStats();

    // Initialize animations
    initScrollReveal();
    animateCounters();
    initSmoothScroll();

    console.log('🔴 Han\'s Laser Chile — Sitio cargado correctamente');
});

function renderAboutStats() {
    const container = document.getElementById('about-stats');
    if (!container || typeof COMPANY_STATS === 'undefined') return;

    container.innerHTML = COMPANY_STATS.slice(0, 3).map(stat => `
        <div class="about__highlight">
            <span class="about__highlight-number">${stat.number.toLocaleString()}${stat.suffix}</span>
            <span class="about__highlight-label">${stat.label}</span>
        </div>
    `).join('');
}
