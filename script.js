// DEPENDENCIES ========================
let welcomeCard = document.getElementById("welcome-card");
let highscoreCard = document.getElementById("highscore-card");
let qCards = document.getElementById("questionCards");
let timerEl = document.getElementById("timer");
let startBtn = document.getElementById("start-btn");
let highscoreInput = document.getElementById("highscoreInput");
let highscoreSubmit = document.getElementById("highscoreSubmit");
let optionsBtn = document.getElementsByClassName("options");
let resetBtn = document.getElementById("reset-btn");
let answerCard = document.getElementById("answerCheckCard");
let answerDescrip = document.getElementById("answerCheck");
let highscoreItem = document.getElementById("highscoreList");
let playAgain = document.getAnimations("playAgain-btn");

// STARTING DATA =======================
let i = 0;
let timeLeft = 75;
let display = [];
let highscoreChart = [];

const questionHolder = [
  {
    question: "Commonly used data types DO NOT include",
    options: {
      a: "Numbers",
      b: "Booleans",
      c: "Alerts",
      d: "Strings",
    },
    correctAnswer: "c: Alerts",
  },
  {
    question: "A condition in an if/else statement is enclosed with?",
    options: {
      a: "Curly Braces",
      b: "Parentheses",
      c: "Quotes",
      d: "Commas",
    },
    correctAnswer: "b: Parentheses",
  },
  {
    question: "Arrays in Javascript can be used to store?",
    options: {
      a: "Numbers",
      b: "Strings",
      c: "Objects",
      d: "All of the above",
    },
    correctAnswer: "d: All of the above",
  },
  {
    question: "Who lives in a pineapple under the sea?",
    options: {
      a: "Mr. Crabs",
      b: "Plankton",
      c: "Spongebob",
      d: "This is Patrick",
    },
    correctAnswer: "c: Spongebob",
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

    if (timeLeft === 0 || i === questionHolder.length) {
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

  // check's the value of each button clicked
  for (let p = 0; p < optionsBtn.length; p++) {
    optionsBtn[p].addEventListener("click", function () {
      let currentVal = this.innerText;

      // condition to display correct or incorrect answer and to penalize incorrect answers
      if (currentVal === questionHolder[i].correctAnswer) {
        answerCard.setAttribute("style", "display: show");
        answerDescrip.innerHTML = "Correct!";
        setTimeout(function () {
          answerCard.setAttribute("style", "display: none");
        }, 1000);
      } else {
        answerCard.setAttribute("style", "display: show");
        answerDescrip.innerHTML = "Incorrect!";
        timeLeft -= 10;
        setTimeout(function () {
          answerCard.setAttribute("style", "display: none");
        }, 1000);
      }
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

function renderHighscores() {
  highscoreItem.textContent = "";

  highscoreChart.forEach(function (element) {
    let listItem = document.createElement("li");
    listItem.textContent = "Name: " + element.name + "Score: " + element.score;
    highscoreItem.appendChild(listItem);
  });
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

// USER INTERACTIONS ===================

// listen to start button
startBtn.addEventListener("click", countdown);
startBtn.addEventListener("click", startGame);
// listen for question interactions
qCards.addEventListener("click", questionInteraction);
// listen for reset to reset scores
// resetBtn.addEventListener("click", () => {
//   highscoreChart.forEach(function (element, index) {
//     element.splice(index);
//   });
// });

// resetBtn.addEventListener("click", () => {
//   localStorage.removeItem("High-Name");
// });

// INITIALIZE ==========================
initPage();
