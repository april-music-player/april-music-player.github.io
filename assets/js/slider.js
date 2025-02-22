// assets/js/slider.js
document.addEventListener('DOMContentLoaded', () => {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevArrow = document.querySelector('.slider-arrow.prev');
    const nextArrow = document.querySelector('.slider-arrow.next');
    let currentIndex = 0;

    // Function to update slider position
    const updateSlider = () => {
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    };

    // Next Slide
    nextArrow.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // Loop back to the first slide
        }
        updateSlider();
    });

    // Previous Slide
    prevArrow.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1; // Loop to the last slide
        }
        updateSlider();
    });

    // Keyboard Navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            nextArrow.click(); // Simulate next arrow click
        } else if (e.key === 'ArrowLeft') {
            prevArrow.click(); // Simulate previous arrow click
        }
    });
});