var $spanList = document.querySelectorAll('span');
var $paragraph = document.querySelector('p');
var index = 0;

function handleKeyDown(event) {
  var key = event.key;

  if ($spanList.length === index) {
    $paragraph.textContent = 'You got 100% correct!';
  } else if ($spanList[index].textContent === key) {
    $spanList[index].className = 'correct';
    index++;
    $paragraph.textContent = 'You got ' + index / $spanList.length * 100 + '% correct!';
    $spanList[index].className = 'current';
  } else if ($spanList[index].textContent !== key) {
    $spanList[index].className = 'incorrect';
  }
}

document.addEventListener('keydown', handleKeyDown);
