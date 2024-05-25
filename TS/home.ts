window.onload = () => {
    const logos = document.querySelectorAll('.image');
    const overlay = document.getElementById('overlay');
    const overlayImage = document.getElementById('overlayImage');
    const closeBtn = document.querySelector('#overlay .close');

    logos.forEach(logo => {
        logo.addEventListener('click', () => {
            if (overlay && overlayImage) {
                overlayImage.setAttribute('src', (logo as HTMLImageElement).src);
                overlay.style.display = 'flex';
            }
        });
    });

    if (overlay) {
        overlay.addEventListener('click', (event) => {
            if (event.target === overlay || event.target === closeBtn) {
                overlay.style.display = 'none';
            }
        });
    }
};

