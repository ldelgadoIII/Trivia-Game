let qCards = document.getElementById("questionCards");
let timerEl = document.getElementById("timer");

let timeLeft = 75;
timerEl.textContent = "Time: " + timeLeft;

i = 0;

const questionHolder = [
  {
    question: "This is Question #1?",
    options: {
      a: "Answer",
      b: "Answer",
      c: "Answer",
      d: "Answer",
    },
    correctAnswer: "a",
  },
  {
    question: "This is Question #2?",
    options: {
      a: "Answer",
      b: "Answer",
      c: "Answer",
      d: "Answer",
    },
    correctAnswer: "a",
  },
  {
    question: "This is Question #3?",
    options: {
      a: "Answer",
      b: "Answer",
      c: "Answer",
      d: "Answer",
    },
    correctAnswer: "a",
  },
  {
    question: "This is Question #4?",
    options: {
      a: "Answer",
      b: "Answer",
      c: "Answer",
      d: "Answer",
    },
    correctAnswer: "a",
  },
];

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

let display = [];

function displayQuestion() {
  display = [];

  questionHolder.forEach((currentEl, index) => {
    const answers = [];

    for (letter in currentEl.options) {
      answers.push(
        `<button type="button" class="btn btn-primary" id="question ${index}">
            ${letter}: ${currentEl.options[letter]}
          </button>`
      );
    }
    display.push(
      `<div id="questionCards"><h3>${currentEl.question}</h3></div>
        <ul class="list-group">${answers.join("")}</ul>`
    );
  });
  qCards.innerHTML = display.join("");
  qCards.innerHTML = display[i];
}

displayQuestion();
