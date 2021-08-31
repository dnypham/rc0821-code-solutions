var $modalButton = document.querySelector('.modal-button');
var $noButton = document.querySelector('.no-button');
var $pop = document.querySelector('.hide');

function handleClick(event) {
  if ($pop.className === 'pop-up-container hide') {
    $pop.classList.remove('hide');
  } else {
    $pop.classList.add('hide');
  }
}

$modalButton.addEventListener('click', handleClick);
$noButton.addEventListener('click', handleClick);
