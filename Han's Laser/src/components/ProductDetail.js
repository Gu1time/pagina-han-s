/**
 * Product Detail Modal — Han's Laser Chile
 * Opens detailed product view with specs, highlights and CTAs
 */

function openProductModal(product) {
    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <div class="modal__header">
            <div class="modal__image">
                <img src="${product.image}" alt="${product.name}" onerror="this.src='https://www.hansme.net/uploads/20250725/e22c695eda3e86dae1e2dd5486446991.webp'">
                ${product.badge ? `<span class="product-card__badge">${product.badge}</span>` : ''}
            </div>
            <div class="modal__info">
                <span class="modal__category">${product.categoryLabel}</span>
                <h2 class="modal__title">${product.name}</h2>
                <p class="modal__desc">${product.tagline}</p>
                ${product.power ? `<div class="modal__power"><strong>Potencia:</strong> ${product.power}</div>` : ''}
                ${product.sizes ? `<div class="modal__sizes"><strong>Formatos:</strong> ${product.sizes}</div>` : ''}
                <div class="modal__highlights">
                    ${(product.highlights || []).map(h => `
                        <span class="modal__highlight">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><path d="M20 6L9 17l-5-5"/></svg>
                            ${h}
                        </span>
                    `).join('')}
                </div>
            </div>
        </div>

        ${product.specs && product.specs.length > 0 ? `
        <div class="modal__specs">
            <h3>Especificaciones Técnicas</h3>
            <table class="modal__specs-table">
                ${product.specs.map(spec => `
                    <tr>
                        <td>${spec.label}</td>
                        <td>${spec.value}</td>
                    </tr>
                `).join('')}
            </table>
        </div>
        ` : ''}

        <div class="modal__ctas">
            <a href="https://wa.me/56900000000?text=Hola%2C%20me%20interesa%20el%20modelo%20${encodeURIComponent(product.name)}" 
               target="_blank" rel="noopener" class="btn btn--whatsapp">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                Solicitar Cotización
            </a>
            ${product.detailUrl ? `
            <a href="${product.detailUrl}" target="_blank" rel="noopener" class="btn btn--outline">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                Ver en Web Global
            </a>
            ` : ''}
        </div>
    `;

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function initProductModal() {
    const modal = document.getElementById('product-modal');
    const backdrop = document.getElementById('modal-backdrop');
    const closeBtn = document.getElementById('modal-close');

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (backdrop) backdrop.addEventListener('click', closeModal);

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
}
