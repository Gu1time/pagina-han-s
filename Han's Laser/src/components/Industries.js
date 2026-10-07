/**
 * Industries Component — Han's Laser Chile
 * Renders industry solution cards
 */

function initIndustries() {
    const grid = document.getElementById('industries-grid');
    if (!grid || typeof INDUSTRIES === 'undefined') return;

    grid.innerHTML = INDUSTRIES.map((ind, index) => `
        <a href="${ind.url}" ${ind.url.startsWith('http') ? 'target="_blank" rel="noopener"' : ''} 
           class="industry-card reveal" style="animation-delay: ${index * 0.08}s">
            <div class="industry-card__icon">${ind.icon}</div>
            <h3 class="industry-card__title">${ind.name}</h3>
            <p class="industry-card__desc">${ind.description}</p>
            <span class="industry-card__link">
                Ver más
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </span>
        </a>
    `).join('');
}
