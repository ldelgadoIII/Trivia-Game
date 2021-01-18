let timerEl = document.getElementById("timer");
let timeLeft = 75;
timerEl.textContent = "Time: " + timeLeft;

function countdown() {
  const timeCrunch = setInterval(() => {
    timerEl.textContent = "Time: " + timeLeft;
    timeLeft--;

    if (timeLeft === 0) {
      timerEl.textContent = "Times Up!";
      clearInterval(timeCrunch);
    }
  }, 500);
}
