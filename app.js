const form = document.getElementById("form");
const scoreDisplay = document.getElementById("scoreDisplay");

let scores = [];
let nonZeroScores = [];
let totalScore = 0;
let adjustedScore = 0;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  getAdjustedScore();
});

function buildAnswerArr() {
  for (let i = 1; i <= 12; i++) {
    let res = document.querySelector(`input[name="dryEyes${i}"]:checked`).value;
    scores.push(parseInt(res));
  }
}

nonZeroScores = filterOutZeros(scores);
totalScore = getTotalScore(scores);

function filterOutZeros(scores) {
  return scores.filter((score) => score > 0);
}

function getTotalScore(scores) {
  return scores.reduce((a, b) => a + b, 0);
}

function getAdjustedScore() {
  buildAnswerArr();
  nonZeroScores = filterOutZeros(scores);
  totalScore = getTotalScore(scores);
  adjustedScore = (totalScore * 100) / (nonZeroScores.length * 4);
  scoreDisplay.innerHTML = ` ${Math.round(adjustedScore)}`;
}
