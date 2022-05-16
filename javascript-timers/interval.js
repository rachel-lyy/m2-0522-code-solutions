let count = 4;

var counter = setInterval(timer, 1000); // 1000 will  run it every 1 second
var theText = document.querySelector('.countdown-display');

function timer() {
  count = count - 1;
  if (count <= 0) {
    clearInterval(counter);
    theText.innerHTML = '~Earth Beeeeelow Us~';
  } else {
    theText.innerHTML = count;
  }
}
