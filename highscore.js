let highscoreItem = document.getElementById("highscoreList");
let resetBtn = document.getElementById("reset-btn");
let highscoreChart = [];

if (localStorage.getItem("High-Name")) {
  highscoreChart = JSON.parse(localStorage.getItem("High-Name"));
  renderHighscores();
}

function renderHighscores() {
  highscoreItem.textContent = "";

  highscoreChart.forEach(function (element) {
    let listItem = document.createElement("li");
    listItem.textContent =
      "Name: " + element.name + "- Score: " + element.score;
    highscoreItem.appendChild(listItem);
  });
}

resetBtn.addEventListener("click", () => {
  localStorage.removeItem("High-Name");
});
