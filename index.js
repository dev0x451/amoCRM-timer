const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

let myInterval = null

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl

function secondsToHMS(totalSec) {
  const totalMin = Math.floor(totalSec / 60);
  const seconds = totalSec % 60;
  const hours = Math.floor(totalMin / 60);
  const minutes = totalMin % 60;

  return `${hours < 10 ? '0'+ hours : hours}:${minutes < 10 ? '0'+ minutes : minutes}:${seconds < 10 ? '0'+ seconds : seconds}`
};

const createTimerAnimator = () => {
  return (seconds) => {

    let secondsLeft = seconds

    myInterval = setInterval(() => {
      timerEl.innerText = secondsToHMS(secondsLeft)
      if (secondsLeft <= 0) clearInterval(myInterval)
      secondsLeft--
      
    }, 1000);
  };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.value = inputEl.value.replace(/\D/g,'');
})

buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  if (myInterval) clearInterval(myInterval)
  animateTimer(seconds);
  inputEl.value = '';
});