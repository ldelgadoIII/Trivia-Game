// DEPENDENCIES ========================
let qCards = document.getElementById("questionCards");
let timerEl = document.getElementById("timer");

// STARTING DATA =======================
let i = 0;
let timeLeft = 75;
let display = [];

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

// FUNCTIONS ===========================
function initPage() {
  // load saved data
  // display welcome card
  // set timer
  timerEl.textContent = "Time: " + timeLeft;
}

function startGame() {
  // when start button is pressed
  // hide welcome card
  // display first question card
}

// begin a timer countdown
function countdown() {
  const timeCrunch = setInterval(() => {
    timerEl.textContent = "Time: " + timeLeft;
    timeLeft--;

    if (timeLeft === 0) {
      timerEl.textContent = "Times Up!";
      clearInterval(timeCrunch);
    }
  }, 1000);
}

function questionInteraction() {
  // when button within the question is clicked
  // move onto next questions
  // display whether the question is correct or incorrect
  // display highscore card
}

// display the question and answer information from the questionHolder array
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

// display card function
// display a highscore title
// form to input name
// submit form
// take the user to highscore page

// highscore page
// display saved highscores
// a button to play again
// a button to reset scores

// USER INTERACTIONS ===================

// listen to start button
// listen for question interactions
// listen for reset

// INITIALIZE ==========================
initPage();
