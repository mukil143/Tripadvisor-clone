let index = 0;
const visibleSlides = 4;

function moveSlide(step) {
    const slider = document.querySelector(".sliders");
    const slides = document.querySelectorAll(".slide__images");
    
    index += step;
    const maxIndex = slides.length - visibleSlides;
    if (index < 0) index = 0;
    if (index > maxIndex) index = maxIndex;  
    
    slider.style.transform = `translateX(-${index * (slides[0].offsetWidth)}px)`;
}


let index1 = 0;

function moveSlide1(step) {
    const slider = document.querySelector(".sliders1");
    const slides = document.querySelectorAll(".slide__images1");
    
    index1 += step;
    const maxIndex = slides.length - visibleSlides;
    if (index1 < 0) index = 0;
    if (index1 > maxIndex) index1 = maxIndex;  
    slider.style.transform = `translateX(-${index1 * (slides[0].offsetWidth)}px)`;
}

let index2 = 0;

function moveSlide2(step) {
    const slider = document.querySelector(".sliders2");
    const slides = document.querySelectorAll(".slide__images2");
    
    index2 += step;
    const maxIndex = slides.length - visibleSlides;
    if (index2 < 0) index2 = 0;
    if (index2 > maxIndex) index2 = maxIndex;  
    slider.style.transform = `translateX(-${index2 * (slides[0].offsetWidth)}px)`;
}

let index3 = 0;
const visibleSlides1 = 2;
function moveSlide3(step) {
    const slider = document.querySelector(".sliders3");
    const slides = document.querySelectorAll(".slide__images3");
    
    index3 += step;
    const maxIndex = slides.length - visibleSlides1;
    if (index3 < 0) index2 = 0;
    if (index3 > maxIndex) index3 = maxIndex;  
    slider.style.transform = `translateX(-${index3 * (slides[0].offsetWidth)}px)`;
}

let currentIndex = 0;
  const cardsPerView = 4;
  const track = document.querySelector('.sliders4');
  const cards = document.querySelectorAll('.slide__images4');

  function moveSlide4(direction) {
    const totalCards = cards.length;
    const maxIndex = Math.ceil(totalCards / cardsPerView) - 1;

    currentIndex += direction;

    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;

    const cardWidth = cards[0].offsetWidth + 20; // +margin
    track.style.transform = `translateX(-${currentIndex * cardWidth * cardsPerView}px)`;
  }