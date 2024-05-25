window.onload = function () {
    var logos = document.querySelectorAll('.image');
    var overlay = document.getElementById('overlay');
    var overlayImage = document.getElementById('overlayImage');
    var closeBtn = document.querySelector('#overlay .close');
    logos.forEach(function (logo) {
        logo.addEventListener('click', function () {
            if (overlay && overlayImage) {
                overlayImage.setAttribute('src', logo.src);
                overlay.style.display = 'flex';
            }
        });
    });
    if (overlay) {
        overlay.addEventListener('click', function (event) {
            if (event.target === overlay || event.target === closeBtn) {
                overlay.style.display = 'none';
            }
        });
    }
};
