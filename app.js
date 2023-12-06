const hands = document.querySelector(".hands");
const contest = document.querySelector(".contest");
const userHand = document.querySelector(".userPick");
const computerHand = document.querySelector(".computerPick");
const scoreText = document.querySelector(".score-number");
const dialog = document.querySelector("dialog");
const rulesBtn = document.querySelector(".rules-btn");
const resultText = document.querySelector(".result-text");
const closeBtn = document.querySelector(".close-btn");
const footer = document.querySelector("footer");


window.addEventListener("load",() => {
  scoreText.innerText = JSON.parse(localStorage.getItem("score"));
});

let score = localStorage.getItem("score") ? localStorage.getItem("score") : 0;
let userPick = "";
let computerPick = "";

const handOptions = {
  "rock": "./assets/Rock.png",
  "paper": "./assets/Paper.png",
  "scissors": "./assets/Scissors.png"
};

function pickUserHand(hand) {
  hands.style.display = "none";
  contest.style.display = "flex";
  footer.style.display = "none";

  userHand.src = handOptions[hand];
  userPick = hand;

  pickComputerHand();

  return hand;
}

function pickComputerHand() {
  const options = ["rock","paper","scissors"];
  const hand = Math.floor(Math.random() * options.length);

  computerHand.src = handOptions[options[hand]];
  computerPick = options[hand];

  result(userPick,computerPick);
}

function result(userPick,computerPick) {

  const previousScore = score;

  if (userPick === "rock" && computerPick === "paper") {
    score--;
  }
  if (userPick === "rock" && computerPick == "scissors") {
    score--;
  }
  if (userPick === "rock" && computerPick == "rock") {
    score;
  }
  if (userPick === "paper" && computerPick === "rock") {
    score++;
  }
  if (userPick === "paper" && computerPick == "scissors") {
    score--;
  }
  if (userPick === "paper" && computerPick == "paper") {
    score;
  }
  if (userPick === "scissors" && computerPick === "rock") {
    score--;
  }
  if (userPick === "scissors" && computerPick == "paper") {
    score++;
  }
  if (userPick === "scissors" && computerPick == "scissors") {
    score;
  }

  if (previousScore > score) {
    resultText.innerHTML = "YOU LOSE";

  }
  if (previousScore < score) {
    resultText.innerHTML = "YOU WIN";
  }

  if (previousScore === score) {
    resultText.innerHTML = "IT'S TIE";
  }

  scoreText.innerText = score;
  localStorage.setItem("score",JSON.stringify(score));
}

function playAgain() {
  userPick = "";
  computerPick = "";

  hands.style.display = "flex";
  contest.style.display = "none";
  footer.style.display = "flex";
}


rulesBtn.addEventListener("click",() => {
  dialog.showModal();
});

closeBtn.addEventListener("click",() => {
  dialog.close();
});