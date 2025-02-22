// Optional: Add a lightbox effect for viewing images
const screenshots = document.querySelectorAll('.screenshot img');

screenshots.forEach(img => {
    img.addEventListener('click', () => {
        const lightbox = document.createElement('div');
        lightbox.style.position = 'fixed';
        lightbox.style.top = '0';
        lightbox.style.left = '0';
        lightbox.style.width = '100%';
        lightbox.style.height = '100%';
        lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        lightbox.style.display = 'flex';
        lightbox.style.justifyContent = 'center';
        lightbox.style.alignItems = 'center';
        lightbox.style.zIndex = '1000';

        const lightboxImg = document.createElement('img');
        lightboxImg.src = img.src;
        lightboxImg.style.maxWidth = '90%';
        lightboxImg.style.maxHeight = '90%';
        lightboxImg.style.borderRadius = '10px';

        lightbox.appendChild(lightboxImg);
        document.body.appendChild(lightbox);

        lightbox.addEventListener('click', () => {
            document.body.removeChild(lightbox);
        });
    });
});