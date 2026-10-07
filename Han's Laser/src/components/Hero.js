/**
 * Hero Component — Han's Laser Chile
 * Full-width image slider with auto-rotation
 */

function initHero() {
    const slider = document.getElementById('hero-slider');
    if (!slider) return;

    const slides = slider.querySelectorAll('.hero__slide');
    const dots = slider.querySelectorAll('.hero__slider-dot');
    let currentSlide = 0;
    let interval;

    // Preload background images
    slides.forEach(slide => {
        const bg = slide.dataset.bg;
        if (bg) {
            slide.style.backgroundImage = `url(${bg})`;
            slide.style.backgroundSize = 'cover';
            slide.style.backgroundPosition = 'center';
        }
    });

    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        goToSlide((currentSlide + 1) % slides.length);
    }

    function startAutoplay() {
        interval = setInterval(nextSlide, 6000);
    }

    function stopAutoplay() {
        clearInterval(interval);
    }

    // Dot navigation
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            stopAutoplay();
            goToSlide(parseInt(dot.dataset.slide));
            startAutoplay();
        });
    });

    startAutoplay();
}
