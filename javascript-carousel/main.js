var $container = document.querySelector('.container');
var $img = document.querySelector('img');
var $dots = document.querySelectorAll('.progress-dots > i');
var $arrowLeft = document.querySelector('#arrow-left');
var $arrowRight = document.querySelector('#arrow-right');

var imageArray = [
  'images/001.png',
  'images/004.png',
  'images/007.png',
  'images/025.png',
  'images/039.png'
];
var count = 0;

function timer() {
  resetDots();
  count++;

  if (imageArray.length === count) {
    count = 0;
  }
  updateImg();
}

var interval = setInterval(timer, 3000);

// Click Events

$container.addEventListener('click', function () {
  if (event.target === $arrowLeft) {
    resetDots();

    if (count === 0) {
      count = imageArray.length;
    }
    count--;
    updateImg();
    resetTimer();
  }

  if (event.target === $arrowRight) {
    resetDots();
    count++;

    if (imageArray.length === count) {
      count = 0;
    }
    updateImg();
    resetTimer();
  }

  for (var i = 0; i < $dots.length; i++) {
    if (event.target === $dots[i]) {
      resetDots();
      count = i;
      updateImg();
      resetTimer();
    }
  }
});

// Callback Functions

function resetDots() {
  for (var i = 0; i < $dots.length; i++) {
    $dots[i].className = 'far fa-circle';
  }
}

function updateImg() {
  $dots[count].className = 'fas fa-circle';
  $img.setAttribute('src', imageArray[count]);
}

function resetTimer() {
  clearInterval(interval);
  interval = setInterval(timer, 3000);
}
