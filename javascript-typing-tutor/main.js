var $spanList = document.querySelectorAll('span');
var $paragraph = document.querySelector('p');
var $button = document.querySelector('button');
var index = 0;

function handleKeyDown(event) {
  var key = event.key;
  var letters = $spanList;
  var percent = $paragraph;

  if (letters.length === index) {
    return;
  }

  if (letters.length - 1 === index) {
    letters[index].className = 'correct';
    percent.textContent = 'You got ' + index / letters.length * 100 + '% correct!';
    index++;
    percent.textContent = 'You got 100% correct! If you would like to play again, click the RESET button!';
  } else if (letters[index].textContent === key) {
    letters[index].className = 'correct';
    index++;
    percent.textContent = 'You got ' + (index / letters.length * 100).toFixed(2) + '% correct!';
    letters[index].className = 'current';
  } else if (letters[index].textContent !== key) {
    letters[index].className = 'incorrect';
  }
}

document.addEventListener('keydown', handleKeyDown);

$button.addEventListener('click', function () {
  location.reload();
});
