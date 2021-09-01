var $spanList = document.querySelectorAll('span');
var $paragraph = document.querySelector('p');
var $button = document.querySelector('button');
var index = 0;

function handleKeyDown(event) {
  var key = event.key;

  if ($spanList.length === index) {
    $paragraph.textContent = 'You got 100% correct!';
    alert('If you would like to play again, click the RESET button!');
  } else if ($spanList[index].textContent === key) {
    $spanList[index].className = 'correct';
    index++;
    $paragraph.textContent = 'You got ' + index / $spanList.length * 100 + '% correct!';
  } else if ($spanList[index].textContent !== key) {
    $spanList[index].className = 'incorrect';
  }

  if ($spanList.length > index) {
    $spanList[index].className = 'current';
  }
}

document.addEventListener('keydown', handleKeyDown);

function handleClick(event) {
  location.reload();
}

$button.addEventListener('click', handleClick);
