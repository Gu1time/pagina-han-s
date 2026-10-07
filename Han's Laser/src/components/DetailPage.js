/**
 * DetailPage Component — Han's Laser Chile
 * Renders a full product detail page with:
 *  - Hero banner with product name
 *  - Sticky sub-nav (Overview / Technical Data)
 *  - Overview section with feature cards (alternating image/text)
 *  - Welding samples gallery
 *  - Technical comparison table between models
 *  - Contact CTA
 */

document.addEventListener('DOMContentLoaded', () => {
    initHeader();
    renderDetailPage();
});

function renderDetailPage() {
    const root = document.getElementById('detail-root');
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    if (!productId || !PRODUCT_DETAILS[productId]) {
        root.innerHTML = `
            <div class="detail-error container">
                <h2>Producto no encontrado</h2>
                <p>El producto que busca no existe o aún no tiene una página de detalle.</p>
                <a href="index.html#productos" class="btn btn--primary">Volver a Productos</a>
            </div>
        `;
        return;
    }

    const product = PRODUCT_DETAILS[productId];
    document.title = `${product.name} — Han's Laser Chile`;

    // Build the page
    root.innerHTML = `
        <!-- Hero Banner -->
        <section class="detail-hero" style="background-image: url('${product.heroImage}')">
            <div class="detail-hero__overlay"></div>
            <div class="detail-hero__content container">
                <a href="index.html#productos" class="detail-hero__back">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                    Volver a Productos
                </a>
                <span class="detail-hero__category">${product.subtitle}</span>
                <h1 class="detail-hero__title">${product.name}</h1>
                <p class="detail-hero__tagline">${product.tagline}</p>
                <div class="detail-hero__ctas">
                    <a href="https://wa.me/56900000000?text=Hola%2C%20me%20interesa%20el%20modelo%20${encodeURIComponent(product.name)}" 
                       target="_blank" rel="noopener" class="btn btn--whatsapp">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                        Solicitar Cotización
                    </a>
                    <a href="#technical" class="btn btn--outline">Ver Datos Técnicos</a>
                </div>
            </div>
        </section>

        <!-- Sticky Sub-Nav -->
        <nav class="detail-subnav" id="detail-subnav">
            <div class="container detail-subnav__inner">
                <a href="#overview" class="detail-subnav__link active">${product.name}</a>
                <a href="#technical" class="detail-subnav__link">Datos Técnicos</a>
                <a href="#contact-detail" class="detail-subnav__link">Contactar</a>
            </div>
        </nav>

        <!-- Overview Section -->
        <section id="overview" class="detail-overview">
            <div class="container">
                <div class="detail-section-header">
                    <h2>Overview</h2>
                    <p class="detail-section-subtitle">${product.description}</p>
                </div>

                <div class="detail-features">
                    ${product.overview.map((feature, i) => {
                        const isHorizontal = feature.layout === 'horizontal';
                        const descHTML = Array.isArray(feature.description)
                            ? feature.description.map(d => `<li>${d}</li>`).join('')
                            : `<li>${feature.description}</li>`;
                        
                        return `
                        <div class="detail-feature ${isHorizontal ? 'detail-feature--horizontal' : ''} ${i % 2 !== 0 ? 'detail-feature--reversed' : ''}">
                            <div class="detail-feature__image">
                                <img src="${feature.image}" alt="${feature.title}" loading="lazy">
                            </div>
                            <div class="detail-feature__content">
                                <h3 class="detail-feature__title">${feature.title}</h3>
                                <ul class="detail-feature__list">
                                    ${descHTML}
                                </ul>
                            </div>
                        </div>
                        `;
                    }).join('')}
                </div>
            </div>
        </section>

        <!-- Welding Samples -->
        ${product.weldingSamples ? `
        <section class="detail-samples">
            <div class="container">
                <div class="detail-section-header">
                    <h2>Capacidad de Soldadura</h2>
                </div>
                <div class="detail-samples__grid">
                    ${product.weldingSamples.map((img, i) => `
                        <div class="detail-samples__item">
                            <img src="${img}" alt="Muestra de soldadura ${i + 1}" loading="lazy">
                        </div>
                    `).join('')}
                </div>
            </div>
        </section>
        ` : ''}

        <!-- Technical Data Section -->
        <section id="technical" class="detail-technical">
            <div class="container">
                <div class="detail-section-header">
                    <h2>Datos Técnicos</h2>
                    <p class="detail-technical__disclaimer">${product.technicalDisclaimer}</p>
                </div>

                <!-- Model selector buttons -->
                <div class="detail-technical__selectors">
                    <div class="detail-technical__model-label">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>
                        Modelo
                    </div>
                    ${product.technicalData.models.map((model, i) => `
                        <button class="detail-technical__model-btn ${i === 0 ? 'active' : ''}" data-model="${i}">
                            <span class="detail-technical__check">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>
                            </span>
                            ${model.name}
                        </button>
                    `).join('')}
                </div>

                <!-- Comparison Table -->
                <div class="detail-technical__table-wrap">
                    <table class="detail-technical__table">
                        <thead>
                            <tr>
                                <th class="detail-technical__th-label">DZW Series</th>
                                ${product.technicalData.models.map((model, i) => `
                                    <th class="detail-technical__th-model" data-col="${i}">
                                        ${model.image ? `<img src="${model.image}" alt="${model.name}" class="detail-technical__model-img">` : ''}
                                    </th>
                                `).join('')}
                            </tr>
                        </thead>
                        <tbody>
                            ${product.technicalData.labels.map((label, rowIdx) => `
                                <tr>
                                    <td class="detail-technical__td-label">${label}</td>
                                    ${product.technicalData.models.map((model, colIdx) => `
                                        <td class="detail-technical__td-value" data-col="${colIdx}">${model.values[rowIdx] || '—'}</td>
                                    `).join('')}
                                </tr>
                            `).join('')}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>

        <!-- Contact CTA -->
        <section id="contact-detail" class="detail-contact">
            <div class="container">
                <div class="detail-contact__card">
                    <h2>¿Interesado en ${product.name}?</h2>
                    <p>Solicite una cotización, una demostración presencial o más información técnica. Nuestro equipo le responderá en menos de 24 horas.</p>
                    <div class="detail-contact__ctas">
                        <a href="https://wa.me/56900000000?text=Hola%2C%20me%20interesa%20el%20modelo%20${encodeURIComponent(product.name)}%20y%20me%20gustaría%20más%20información" 
                           target="_blank" rel="noopener" class="btn btn--whatsapp">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                            Solicitar Cotización por WhatsApp
                        </a>
                        <a href="mailto:sales01@hanslaser.com?subject=Consulta%20${encodeURIComponent(product.name)}" class="btn btn--outline">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
                            Enviar Email
                        </a>
                        <a href="index.html#contacto" class="btn btn--outline">
                            Formulario de Contacto
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- Related Products -->
        ${product.relatedProducts && product.relatedProducts.length > 0 ? `
        <section class="detail-related">
            <div class="container">
                <div class="detail-section-header">
                    <h2>Productos Relacionados</h2>
                </div>
                <div class="detail-related__grid">
                    ${product.relatedProducts.map(relId => {
                        const rel = PRODUCTS.find(p => p.id === relId);
                        if (!rel) return '';
                        return `
                        <a href="detail.html?id=${relId}" class="detail-related__card">
                            <div class="detail-related__image">
                                <img src="${rel.image}" alt="${rel.name}" loading="lazy" onerror="this.src='https://www.hansme.net/uploads/20250725/e22c695eda3e86dae1e2dd5486446991.webp'">
                            </div>
                            <div class="detail-related__info">
                                <span class="detail-related__category">${rel.categoryLabel}</span>
                                <h3>${rel.name}</h3>
                                <p>${rel.tagline}</p>
                            </div>
                        </a>
                        `;
                    }).join('')}
                </div>
            </div>
        </section>
        ` : ''}
    `;

    // Initialize interactions
    initDetailSubnav();
    initModelToggles();
    initDetailSmoothScroll();
}

/**
 * Sticky subnav that highlights current section
 */
function initDetailSubnav() {
    const subnav = document.getElementById('detail-subnav');
    const links = subnav.querySelectorAll('.detail-subnav__link');
    
    window.addEventListener('scroll', () => {
        // Make subnav sticky
        const heroBottom = document.querySelector('.detail-hero').getBoundingClientRect().bottom;
        if (heroBottom <= 72) {
            subnav.classList.add('stuck');
        } else {
            subnav.classList.remove('stuck');
        }

        // Highlight active section
        const sections = ['overview', 'technical', 'contact-detail'];
        const scrollPos = window.scrollY + 180;
        
        sections.forEach(id => {
            const section = document.getElementById(id);
            if (section) {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                if (scrollPos >= top && scrollPos < top + height) {
                    links.forEach(l => l.classList.remove('active'));
                    const activeLink = subnav.querySelector(`[href="#${id}"]`);
                    if (activeLink) activeLink.classList.add('active');
                }
            }
        });
    }, { passive: true });
}

/**
 * Model toggle buttons for technical data table
 */
function initModelToggles() {
    const buttons = document.querySelectorAll('.detail-technical__model-btn');
    const table = document.querySelector('.detail-technical__table');
    if (!buttons.length || !table) return;

    // Start with all visible
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            const modelIdx = btn.dataset.model;
            
            // Toggle column visibility
            const headerCells = table.querySelectorAll(`th[data-col="${modelIdx}"]`);
            const dataCells = table.querySelectorAll(`td[data-col="${modelIdx}"]`);
            
            const isActive = btn.classList.contains('active');
            [...headerCells, ...dataCells].forEach(cell => {
                cell.style.display = isActive ? '' : 'none';
            });
        });
    });
}

/**
 * Smooth scroll for detail page anchors
 */
function initDetailSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            if (targetId === '#') return;
            e.preventDefault();
            const target = document.querySelector(targetId);
            if (target) {
                const offset = 140; // header + subnav
                window.scrollTo({
                    top: target.offsetTop - offset,
                    behavior: 'smooth'
                });
            }
        });
    });
}
