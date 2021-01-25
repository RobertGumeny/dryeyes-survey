const form = document.getElementById("form");
const scoreDisplay = document.getElementById("scoreDisplay");
let questionOneScore = 0;
let questionTwoScore = 0;
let questionThreeScore = 0;
let questionFourScore = 0;
let questionFiveScore = 0;
let questionSixScore = 0;
let questionSevenScore = 0;
let questionEightScore = 0;
let questionNineScore = 0;
let questionTenScore = 0;
let questionElevenScore = 0;
let questionTwelveScore = 0;
let totalScore = 0;
let adjustedScore = 0;

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
  questionSevenScore = document.querySelector('input[name="dryEyes7"]:checked')
    .value;
  questionEightScore = document.querySelector('input[name="dryEyes8"]:checked')
    .value;
  questionNineScore = document.querySelector('input[name="dryEyes9"]:checked')
    .value;
  questionTenScore = document.querySelector('input[name="dryEyes10"]:checked')
    .value;
  questionElevenScore = document.querySelector(
    'input[name="dryEyes11"]:checked'
  ).value;
  questionTwelveScore = document.querySelector(
    'input[name="dryEyes12"]:checked'
  ).value;
  totalScore =
    parseInt(questionOneScore) +
    parseInt(questionTwoScore) +
    parseInt(questionThreeScore) +
    parseInt(questionFourScore) +
    parseInt(questionFiveScore) +
    parseInt(questionSixScore) +
    parseInt(questionSevenScore) +
    parseInt(questionEightScore) +
    parseInt(questionNineScore) +
    parseInt(questionTenScore) +
    parseInt(questionElevenScore) +
    parseInt(questionTwelveScore);

  adjustedScore = Math.round(totalScore / 4);

  scoreDisplay.innerHTML = ` ${adjustedScore}`;
}
