// DEPENDENCIES ========================
let welcomeCard = document.getElementById("welcome-card");
let highscoreCard = document.getElementById("highscore-card");
let qCards = document.getElementById("questionCards");
let timerEl = document.getElementById("timer");
let startBtn = document.getElementById("start-btn");
let highscoreInput = document.getElementById("highscoreInput");
let highscoreSubmit = document.getElementById("highscoreSubmit");
let optionsBtn = document.getElementsByClassName("options");

// STARTING DATA =======================
let i = 0;
let timeLeft = 75;
let display = [];
let highscoreChart = [];

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
  if (localStorage.getItem("High-Name")) {
    highscoreChart = JSON.parse(localStorage.getItem("High-Name"));
  }
  // display welcome card
  welcomeCard.setAttribute("style", "display: show");
  // set timer
  timerEl.textContent = "Time: " + timeLeft;
}

// when start button is pressed
function startGame() {
  // hide welcome card
  welcomeCard.setAttribute("style", "display: none");
  // display first question card
  qCards.setAttribute("style", "display: show");
  displayQuestion();
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

// display the question and answer information from the questionHolder array
function displayQuestion() {
  display = [];

  questionHolder.forEach((currentEl, index) => {
    const answers = [];

    for (letter in currentEl.options) {
      answers.push(
        `<button type="button" class="btn btn-primary options" id="question ${index}">
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

  for (let p = 0; p < optionsBtn.length; p++) {
    optionsBtn[p].addEventListener("click", function () {
      let currentVal = this.innerText;

      console.log(currentVal);
      console.log("clicked button");
    });
  }
}

function questionInteraction() {
  // when button within the question is clicked
  i++;
  // display highscore card
  if (i >= questionHolder.length) {
    highscoreCard.setAttribute("style", "display: show");
    qCards.setAttribute("style", "display: none");
  } else {
    // move onto next questions
    displayQuestion();
  }
  // grab value of what was clicked
  // display whether the question is correct or incorrect
  // end timer
}

highscoreSubmit.addEventListener("click", (event) => {
  event.preventDefault();

  let newScore = {
    name: highscoreInput.value,
    score: timeLeft,
  };
  highscoreChart.push(newScore);
  localStorage.setItem("High-Name", JSON.stringify(highscoreChart));

  // display highscore list
  for (let j = 0; j < highscoreChart.length; j++) {
    console.log(highscoreChart[j].name);
  }
});

// take the user to highscore page
// highscore page
// display saved highscores
// a button to play again

// USER INTERACTIONS ===================

// listen to start button
startBtn.addEventListener("click", countdown);
startBtn.addEventListener("click", startGame);
// listen for question interactions
qCards.addEventListener("click", questionInteraction);
// listen for reset
// a button to reset scores
function clearHighscore() {
  localStorage.removeItem("High-Name");
}

// listen for options clicked

// INITIALIZE ==========================
initPage();
