const slides = document.querySelectorAll(".slide");
const btnRight = document.querySelector(".btn__slider--right");
const btnLeft = document.querySelector(".btn__slider--left");
let currentSlide = 0;
const maxSlides = slides.length;

const goToSlide = function (slide) {
    slides.forEach((s, i) => {
        s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
};

goToSlide(0);

const nextSlide = function () {
    if (currentSlide === maxSlides - 1) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
    goToSlide(currentSlide);
};

const prevSlider = function () {
    if (currentSlide === 0) {
        currentSlide = maxSlides - 1;
    } else {
        currentSlide--;
    }
    goToSlide(currentSlide);
};

btnRight.addEventListener("click", nextSlide);
btnLeft.addEventListener("click", prevSlider);
