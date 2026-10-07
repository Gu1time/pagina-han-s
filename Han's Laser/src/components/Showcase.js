/**
 * Showcase Component — Han's Laser
 * Renders the product feature showcase with alternating image/text layout
 * and welding capacity gallery, mirroring the hansme.net DZW PRO page structure
 */

function initShowcase() {
    renderShowcaseFeatures();
    renderWeldingGallery();
}

function renderShowcaseFeatures() {
    const container = document.getElementById('showcase-features');
    if (!container || typeof FEATURES_DATA === 'undefined') return;

    container.innerHTML = FEATURES_DATA.map((feature, index) => {
        const isReversed = index % 2 !== 0;
        return `
            <div class="showcase__feature reveal ${isReversed ? 'showcase__feature--reversed' : ''}" style="animation-delay: ${index * 0.1}s">
                <div class="showcase__feature-image">
                    <div class="showcase__feature-image-wrapper">
                        <img src="${feature.image}" alt="${feature.title}" loading="lazy">
                        <div class="showcase__feature-image-overlay"></div>
                    </div>
                    <div class="showcase__feature-number">${String(index + 1).padStart(2, '0')}</div>
                </div>
                <div class="showcase__feature-content">
                    <div class="showcase__feature-badge">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
                        Característica ${index + 1}
                    </div>
                    <h3 class="showcase__feature-title">${feature.title}</h3>
                    <p class="showcase__feature-desc">${feature.description}</p>
                    <div class="showcase__feature-line"></div>
                </div>
            </div>
        `;
    }).join('');
}

function renderWeldingGallery() {
    const container = document.getElementById('welding-gallery');
    if (!container || typeof WELDING_SAMPLES === 'undefined') return;

    container.innerHTML = WELDING_SAMPLES.map((sample, index) => `
        <div class="showcase__gallery-item reveal" style="animation-delay: ${index * 0.15}s">
            <div class="showcase__gallery-image">
                <img src="${sample.image}" alt="${sample.title}" loading="lazy">
                <div class="showcase__gallery-overlay">
                    <span class="showcase__gallery-label">${sample.title}</span>
                </div>
            </div>
        </div>
    `).join('');
}
