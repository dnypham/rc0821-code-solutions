var $bulb = document.querySelector('.bulb');
var $background = document.querySelector('.background');

function handleClick(event) {
  if ($bulb.className === 'bulb on') {
    $bulb.className = 'bulb off';
    $background.className = 'background off-background';
  } else if ($bulb.className === 'bulb off') {
    $bulb.className = 'bulb on';
    $background.className = 'background on-background';
  }
}

$bulb.addEventListener('click', handleClick);
