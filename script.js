let qCards = document.getElementById("questionCards");

let timerEl = document.getElementById("timer");
let timeLeft = 75;
timerEl.textContent = "Time: " + timeLeft;

const questionHolder = [
  {
    question: "Hey this is a question?",
    options: {
      a: "Answer",
      b: "Answer",
      c: "Answer",
      d: "Answer",
    },
    correctAnswer: "a",
  },
  {
    question: "Hey this is a question?",
    options: {
      a: "Answer",
      b: "Answer",
      c: "Answer",
      d: "Answer",
    },
    correctAnswer: "a",
  },
  {
    question: "Hey this is a question?",
    options: {
      a: "Answer",
      b: "Answer",
      c: "Answer",
      d: "Answer",
    },
    correctAnswer: "a",
  },
  {
    question: "Hey this is a question?",
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

function displayQuestion() {
  const display = [];

  questionHolder.forEach((currentEl, index) => {
    const answers = [];

    for (choice in currentEl.options) {
      answers.push(
        `<button type="button" class="btn btn-primary" id="question ${index}">
            ${choice}: ${currentEl.options[choice]}
          </button>`
      );
    }
    display.push(
      `<div id="questionCards">${currentEl.question}</div>
        <div id="answers">${answers.join("")}</div>`
    );
  });
  qCards.innerHTML = display.join("");
}

displayQuestion();
