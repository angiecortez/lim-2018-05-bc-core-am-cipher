const btn1 = document.getElementById('cifr');
const btn2 = document.getElementById('decifr');
const key = document.getElementById('offset');
const answer = document.getElementById('answer');
const message = document.getElementById('message');



 btn1.addEventListener('click', () => {
  let xxx = message.value;
  let yyy = key.value;
  answer.textContent = window.cipher.encode(xxx,yyy);
});
btn2.addEventListener('click', () => {
 let xxx = message.value;
 let yyy = key.value;
 answer.textContent = window.cipher.decode(xxx,yyy);
});
