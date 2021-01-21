const form = document.getElementById("form");
const scoreDisplay = document.getElementById("scoreDisplay");
let questionOneScore = 0;
let questionTwoScore = 0;
let questionThreeScore = 0;
let questionFourScore = 0;
let questionFiveScore = 0;
let questionSixScore = 0;
let totalScore = 0;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  scoreTotal();
});

function scoreTotal() {
  questionOneScore = document.querySelector('input[name="dryEyes1"]:checked')
    .value;
  questionTwoScore = document.querySelector('input[name="dryEyes2"]:checked')
    .value;
  questionThreeScore = document.querySelector('input[name="dryEyes3"]:checked')
    .value;
  questionFourScore = document.querySelector('input[name="dryEyes4"]:checked')
    .value;
  questionFiveScore = document.querySelector('input[name="dryEyes5"]:checked')
    .value;
  questionSixScore = document.querySelector('input[name="dryEyes6"]:checked')
    .value;
  score =
    parseInt(questionOneScore) +
    parseInt(questionTwoScore) +
    parseInt(questionThreeScore) +
    parseInt(questionFourScore) +
    parseInt(questionFiveScore) +
    parseInt(questionSixScore);
  scoreDisplay.innerHTML = ` ${score}`;
}
