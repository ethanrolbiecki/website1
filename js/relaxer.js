const container = document.getElementById('container');
const text = document.getElementById('text');

function breathAnimation() {
  text.innerHTML = 'Breathe In';
  container.classList.add('grow');
  container.classList.remove('shrink');

  setTimeout(() => {
    text.innerHTML = 'Hold';
  }, 3000);

  setTimeout(() => {
    text.innerHTML = 'Breathe Out!';
    container.classList.remove('grow');
    container.classList.add('shrink');
  }, 4500);
}


breathAnimation();


setInterval(breathAnimation, 7500);
