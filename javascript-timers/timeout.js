function message() {
  document.querySelector('.message').innerText = 'Hello There';
}
document.addEventListener('onload', message);

setTimeout(message, 2000);
