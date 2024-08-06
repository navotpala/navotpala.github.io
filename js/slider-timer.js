const heroSlider = document.querySelector('.heroSlider');
const inputs = heroSlider.querySelectorAll('input[type="radio"]');
let currentSlide = 0;

function nextSlide() {
  inputs[currentSlide].checked = false;
  currentSlide = (currentSlide + 1) % inputs.length;
  inputs[currentSlide].checked = true;
}

setInterval(nextSlide, 10000); // Change slide every 5 seconds