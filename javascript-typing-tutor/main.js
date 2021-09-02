var $spanList = document.querySelectorAll('span');
var $paragraph = document.querySelector('p');
var $button = document.querySelector('button');
var index = 0;

function handleKeyDown(event) {
  var key = event.key;
  var letters = $spanList;
  var percent = $paragraph;

  if (letters.length === index) {
    percent.textContent = 'You got 100% correct!';
  } else if (letters[index].textContent === key) {
    letters[index].className = 'correct';
    index++;
    percent.textContent = 'You got ' + index / letters.length * 100 + '% correct!';
    letters[index].className = 'current';
  } else if (letters[index].textContent !== key) {
    letters[index].className = 'incorrect';
  }
}

document.addEventListener('keydown', handleKeyDown);

$button.addEventListener('click', function () {
  location.reload();
});
