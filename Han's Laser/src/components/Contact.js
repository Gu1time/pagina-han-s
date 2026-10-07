/**
 * Contact Component — Han's Laser Chile
 * Form handling with mailto fallback
 */

function initContact() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('contact-name').value;
        const company = document.getElementById('contact-company').value;
        const email = document.getElementById('contact-email').value;
        const phone = document.getElementById('contact-phone').value;
        const product = document.getElementById('contact-product').value;
        const message = document.getElementById('contact-message').value;

        // Build mailto body
        const subject = `Consulta Web - Han's Laser Chile`;
        const body = [
            `Nombre: ${name}`,
            company ? `Empresa: ${company}` : '',
            `Email: ${email}`,
            phone ? `Teléfono: ${phone}` : '',
            product ? `Producto de interés: ${product}` : '',
            message ? `\nMensaje:\n${message}` : ''
        ].filter(Boolean).join('\n');

        // Open mailto
        const mailtoLink = `mailto:sales01@hanslaser.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;

        // Visual feedback
        const submitBtn = document.getElementById('contact-submit');
        const originalHTML = submitBtn.innerHTML;
        submitBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 6L9 17l-5-5"/></svg>
            ¡Mensaje preparado!
        `;
        submitBtn.style.background = 'linear-gradient(135deg, #25D366, #128C7E)';

        setTimeout(() => {
            submitBtn.innerHTML = originalHTML;
            submitBtn.style.background = '';
        }, 3000);
    });
}
