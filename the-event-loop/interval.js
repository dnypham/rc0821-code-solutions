let count = 3;

const countdown = setInterval(() => {
  if (count === 0) {
    console.log('Blast Off!');
    clearInterval(countdown);
    return;
  }
  console.log(count);
  count--;
}, 1000);
