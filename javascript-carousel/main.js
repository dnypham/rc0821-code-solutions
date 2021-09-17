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
var count = 1;

function timer() {
  resetDots();

  if (imageArray.length === count) {
    count = 0;
  }

  $dots[count].className = 'fas fa-circle';
  $img.setAttribute('src', imageArray[count]);
  count++;
}

setInterval(timer, 3000);

$container.addEventListener('click', function () {
  if (event.target === $arrowLeft) {
    resetDots();

    if (count === imageArray[0]) {
      count = imageArray.length - 1;
      $img.setAttribute('src', imageArray[count]);
    }
  }

  if (event.target === $arrowRight) {

  }

  if (event.target === $dots[0]) {

  }
});

function resetDots() {
  for (var i = 0; i < $dots.length; i++) {
    $dots[i].className = 'far fa-circle';
  }
}

// function timer() {
//   if ($img.getAttribute('src') === 'images/001.png') {
//     $img.setAttribute('src', 'images/004.png');
//     $dots[0].className = 'far fa-circle';
//     $dots[1].className = 'fas fa-circle';
//   } else if ($img.getAttribute('src') === 'images/004.png') {
//     $img.setAttribute('src', 'images/007.png');
//     $dots[1].className = 'far fa-circle';
//     $dots[2].className = 'fas fa-circle';
//   } else if ($img.getAttribute('src') === 'images/007.png') {
//     $img.setAttribute('src', 'images/025.png');
//     $dots[2].className = 'far fa-circle';
//     $dots[3].className = 'fas fa-circle';
//   } else if ($img.getAttribute('src') === 'images/025.png') {
//     $img.setAttribute('src', 'images/039.png');
//     $dots[3].className = 'far fa-circle';
//     $dots[4].className = 'fas fa-circle';
//   } else if ($img.getAttribute('src') === 'images/039.png') {
//     $img.setAttribute('src', 'images/001.png');
//     $dots[4].className = 'far fa-circle';
//     $dots[0].className = 'fas fa-circle';
//   }
// }

// setInterval(timer, 3000);

// $container.addEventListener('click', function () {
//   for (var i = 0; i < $dots.length; i++) {
//     $dots[i].className = 'far fa-circle';
//   }

//   if (event.target === $arrowLeft) {
//     if ($img.getAttribute('src') === 'images/001.png') {
//       $img.setAttribute('src', 'images/039.png');
//       $dots[4].className = 'fas fa-circle';
//     } else if ($img.getAttribute('src') === 'images/039.png') {
//       $img.setAttribute('src', 'images/025.png');
//       $dots[3].className = 'fas fa-circle';
//     } else if ($img.getAttribute('src') === 'images/025.png') {
//       $img.setAttribute('src', 'images/007.png');
//       $dots[2].className = 'fas fa-circle';
//     } else if ($img.getAttribute('src') === 'images/007.png') {
//       $img.setAttribute('src', 'images/004.png');
//       $dots[1].className = 'fas fa-circle';
//     } else if ($img.getAttribute('src') === 'images/004.png') {
//       $img.setAttribute('src', 'images/001.png');
//       $dots[0].className = 'fas fa-circle';
//     }
//   }

//   if (event.target === $arrowRight) {
//     if ($img.getAttribute('src') === 'images/001.png') {
//       $img.setAttribute('src', 'images/004.png');
//       $dots[1].className = 'fas fa-circle';
//     } else if ($img.getAttribute('src') === 'images/004.png') {
//       $img.setAttribute('src', 'images/007.png');
//       $dots[2].className = 'fas fa-circle';
//     } else if ($img.getAttribute('src') === 'images/007.png') {
//       $img.setAttribute('src', 'images/025.png');
//       $dots[3].className = 'fas fa-circle';
//     } else if ($img.getAttribute('src') === 'images/025.png') {
//       $img.setAttribute('src', 'images/039.png');
//       $dots[4].className = 'fas fa-circle';
//     } else if ($img.getAttribute('src') === 'images/039.png') {
//       $img.setAttribute('src', 'images/001.png');
//       $dots[0].className = 'fas fa-circle';
//     }
//   }

//   if (event.target === $dots[0]) {
//     $img.setAttribute('src', 'images/001.png');
//     $dots[0].className = 'fas fa-circle';
//   } else if (event.target === $dots[1]) {
//     $img.setAttribute('src', 'images/004.png');
//     $dots[1].className = 'fas fa-circle';
//   } else if (event.target === $dots[2]) {
//     $img.setAttribute('src', 'images/007.png');
//     $dots[2].className = 'fas fa-circle';
//   } else if (event.target === $dots[3]) {
//     $img.setAttribute('src', 'images/025.png');
//     $dots[3].className = 'fas fa-circle';
//   } else if (event.target === $dots[4]) {
//     $img.setAttribute('src', 'images/039.png');
//     $dots[4].className = 'fas fa-circle';
//   }
// });
