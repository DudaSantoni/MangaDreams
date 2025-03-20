let slideIndex = 0;
const slides = document.querySelector('.gallery-slide');
const totalSlides = slides.children.length;
const slideWidth = slides.children[0].offsetWidth + 20; // Considerando margens

document.getElementById('next').addEventListener('click', function() {
    if (slideIndex < totalSlides - 1) {
        slideIndex++;
        slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
    }
});

document.getElementById('prev').addEventListener('click', function() {
    if (slideIndex > 0) {
        slideIndex--;
        slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
    }
});
