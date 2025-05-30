const upButton = document.querySelector('.up-button');
const downButton = document.querySelector('.down-button');
const rightSide = document.querySelector('.right-side');
const leftSide = document.querySelector('.left-side');
const slidesLength = rightSide.querySelectorAll('div').length;

let currentSlide = 0;

// Position the left side correctly at the start
leftSide.style.top = `-${(slidesLength - 1) * 100}%`;

upButton.addEventListener('click', () => changeSlide('up'));
downButton.addEventListener('click', () => changeSlide('down'));

function changeSlide(direction) {
  if (direction === 'up') {
    currentSlide = currentSlide + 1;
    if (currentSlide > slidesLength - 1) {
      currentSlide = 0;
    }
  } else if (direction === 'down') {
    currentSlide = currentSlide - 1;
    if (currentSlide < 0) {
      currentSlide = slidesLength - 1;
    }
  }

  rightSide.style.top = `-${currentSlide * 100}%`;
  leftSide.style.top = `-${(slidesLength - 1 - currentSlide) * 100}%`;
}