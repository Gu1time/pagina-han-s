/**
 * Products Component — Han's Laser Chile
 * Renders product cards from data with category filtering.
 * Welding products open a full detail page; others open the modal.
 */

function initProducts() {
    const grid = document.getElementById('products-grid');
    const categoriesContainer = document.getElementById('product-categories');

    if (!grid || !categoriesContainer) return;

    // Render category tabs
    categoriesContainer.innerHTML = PRODUCT_CATEGORIES.map(cat => `
        <button class="filter-btn ${cat.id === 'all' ? 'active' : ''}" data-filter="${cat.id}">
            <span class="filter-btn__icon">${cat.icon}</span>
            <span class="filter-btn__label">${cat.label}</span>
        </button>
    `).join('');

    // Category click handlers
    categoriesContainer.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            categoriesContainer.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProducts(btn.dataset.filter);
        });
    });

    // Also populate nav dropdown
    const navDropdown = document.getElementById('nav-product-dropdown');
    if (navDropdown) {
        navDropdown.innerHTML = PRODUCT_CATEGORIES.filter(c => c.id !== 'all').map(cat => `
            <a href="#productos" class="nav__dropdown-link" data-filter="${cat.id}">
                <span>${cat.icon}</span> ${cat.label}
            </a>
        `).join('');

        navDropdown.querySelectorAll('.nav__dropdown-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const filter = link.dataset.filter;
                categoriesContainer.querySelectorAll('.filter-btn').forEach(b => {
                    b.classList.toggle('active', b.dataset.filter === filter);
                });
                renderProducts(filter);
                document.getElementById('productos').scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });
    }

    renderProducts('all');
}

function renderProducts(filter) {
    const grid = document.getElementById('products-grid');

    const filtered = filter === 'all'
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === filter);

    grid.style.opacity = '0';
    grid.style.transform = 'translateY(10px)';

    setTimeout(() => {
        grid.innerHTML = filtered.map((product, index) => {
            // Check if this product has a rich detail page
            const hasDetailPage = typeof PRODUCT_DETAILS !== 'undefined' && PRODUCT_DETAILS[product.id];
            const detailAction = hasDetailPage
                ? `onclick="window.open('detail.html?id=${product.id}', '_blank')"`
                : `data-product-id="${product.id}"`;

            return `
            <div class="product-card" ${detailAction} style="animation-delay: ${Math.min(index * 0.05, 0.5)}s">
                <div class="product-card__image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='https://www.hansme.net/uploads/20250725/e22c695eda3e86dae1e2dd5486446991.webp'">
                    ${product.badge ? `<span class="product-card__badge">${product.badge}</span>` : ''}
                </div>
                <div class="product-card__body">
                    <span class="product-card__category">${product.categoryLabel}</span>
                    <h3 class="product-card__title">${product.name}</h3>
                    <p class="product-card__desc">${product.tagline}</p>
                    <div class="product-card__footer">
                        <div class="product-card__specs">
                            <div class="product-card__spec">
                                <span class="product-card__spec-value">${product.power}</span>
                                <span class="product-card__spec-label">Potencia</span>
                            </div>
                        </div>
                        <span class="product-card__cta">
                            ${hasDetailPage ? 'Ver Detalles' : 'Detalles'}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </span>
                    </div>
                </div>
            </div>
            `;
        }).join('');

        grid.style.transition = 'all 0.4s ease';
        grid.style.opacity = '1';
        grid.style.transform = 'translateY(0)';

        // Add click handlers for products WITHOUT detail pages (modal fallback)
        grid.querySelectorAll('.product-card[data-product-id]').forEach(card => {
            card.addEventListener('click', () => {
                const product = PRODUCTS.find(p => p.id === card.dataset.productId);
                if (product) openProductModal(product);
            });
        });
    }, 200);
}
