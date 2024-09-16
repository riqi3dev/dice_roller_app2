class Player {
  constructor(
    diceDotGridContainer,
    diceDot1,
    diceDot2,
    diceDot3,
    diceDot4,
    diceDot5,
    diceDot6
  ) {
    this.diceDotGridContainer = diceDotGridContainer;
    this.diceDot1 = diceDot1;
    this.diceDot2 = diceDot2;
    this.diceDot3 = diceDot3;
    this.diceDot4 = diceDot4;
    this.diceDot5 = diceDot5;
    this.diceDot6 = diceDot6;
  }
}

// let player1 = document.getElementsByClassName("item")[0];
// let diceDotGridContainer = player1.querySelector(
//   ".dice > #dice-dot-grid-container"
// );
const player1 = new Player(
  document.querySelector(".dice > #dice-dot-grid-container"),
  document.getElementById("dot-1"),
  document.getElementById("dot-2"),
  document.getElementById("dot-3"),
  document.getElementById("dot-4"),
  document.getElementById("dot-5"),
  document.getElementById("dot-6")
);

// let diceDotGridContainer = document.querySelector(".dice > #dice-dot-grid-container");
let title = document.getElementById("title");
// let diceDot1 = document.getElementById("dot-1");
// let diceDot2 = document.getElementById("dot-2");
// let diceDot3 = document.getElementById("dot-3");
// let diceDot4 = document.getElementById("dot-4");
// let diceDot5 = document.getElementById("dot-5");
// let diceDot6 = document.getElementById("dot-6");

function diceOutput() {
  let diceRollP1 = Math.floor(Math.random() * 6) + 1;
  let diceRollP2 = Math.floor(Math.random() * 6) + 1;
  if (diceRollP1 > diceRollP2) {
    title.innerHTML = "🚩 Player 1 Wins!";
  } else {
    title.innerHTML = "Player 2 Wins! 🚩";
  }
  playerOne(diceRollP1);
}

function playerOne(diceRollP1) {
  switch (diceRollP1) {
    case 1:
      diceRoll1();
      break;
    case 2:
      diceRoll2();
      break;
    case 3:
      diceRoll3();
      break;
    case 4:
      diceRoll4();
      break;
    case 5:
      diceRoll5();
      break;
    case 6:
      diceRoll6();
      break;
    default:
      break;
  }
}

function diceRoll6() {
  gridContainerStyle();
  player1.diceDotGridContainer.style.display = "grid";
  player1.diceDotGridContainer.style.gridTemplateColumns = "auto auto";
  player1.diceDotGridContainer.style.gridTemplateRows = "auto auto auto";
  player1.diceDotGridContainer.style.columnGap = "0.5rem";
  player1.diceDotGridContainer.style.rowGap = "1rem";
  player1.diceDot1.style.gridArea = "one";
  player1.diceDot2.style.gridArea = "five";
  player1.diceDot3.style.gridArea = "six";
  player1.diceDot4.style.gridArea = "seven";
  player1.diceDot5.style.gridArea = "eight";
  player1.diceDot6.style.gridArea = "three";
  addDot("div.dot#dot-1");
  addDot("div.dot#dot-2");
  addDot("div.dot#dot-3");
  addDot("div.dot#dot-4");
  addDot("div.dot#dot-5");
  addDot("div.dot#dot-6");
}

function diceRoll5() {
  gridContainerStyle();
  player1.diceDot1.style.gridArea = "one";
  player1.diceDot2.style.gridArea = "two";
  player1.diceDot3.style.gridArea = "three";
  player1.diceDot4.style.gridArea = "eight";
  player1.diceDot5.style.gridArea = "five";
  addDot("div.dot#dot-1");
  addDot("div.dot#dot-2");
  addDot("div.dot#dot-3");
  addDot("div.dot#dot-4");
  addDot("div.dot#dot-5");
  removeDot("div.dot#dot-6");
}

function diceRoll4() {
  gridContainerStyle();
  player1.diceDot1.style.gridArea = "one";
  player1.diceDot2.style.gridArea = "five";
  player1.diceDot3.style.gridArea = "three";
  player1.diceDot4.style.gridArea = "eight";
  addDot("div.dot#dot-1");
  addDot("div.dot#dot-2");
  addDot("div.dot#dot-3");
  addDot("div.dot#dot-4");
  removeDot("div.dot#dot-5");
  removeDot("div.dot#dot-6");
}

function diceRoll3() {
  gridContainerStyle();
  player1.diceDot1.style.gridArea = "one";
  player1.diceDot2.style.gridArea = "two";
  player1.diceDot3.style.gridArea = "three";
  addDot("div.dot#dot-1");
  addDot("div.dot#dot-2");
  addDot("div.dot#dot-3");
  removeDot("div.dot#dot-4");
  removeDot("div.dot#dot-5");
  removeDot("div.dot#dot-6");
}

function diceRoll2() {
  gridContainerStyle();
  player1.diceDot1.style.gridArea = "one";
  player1.diceDot2.style.gridArea = "three";
  addDot("div.dot#dot-1");
  addDot("div.dot#dot-2");
  removeDot("div.dot#dot-3");
  removeDot("div.dot#dot-4");
  removeDot("div.dot#dot-5");
  removeDot("div.dot#dot-6");
}

function diceRoll1() {
  player1.diceDotGridContainer.style.display = "flex";
  player1.diceDotGridContainer.style.alignItems = "center";
  player1.diceDotGridContainer.style.justifyItems = "center";
  addDot("div.dot#dot-1");
  removeDot("div.dot#dot-2");
  removeDot("div.dot#dot-3");
  removeDot("div.dot#dot-4");
  removeDot("div.dot#dot-5");
  removeDot("div.dot#dot-6");
}

function removeDot(name) {
  document.querySelector(name).classList.add("invisible");
}
function addDot(name) {
  document.querySelector(name).classList.remove("invisible");
}

function gridContainerStyle() {
  player1.diceDotGridContainer.style.position = "relative";
  player1.diceDotGridContainer.style.display = "grid";
  player1.diceDotGridContainer.style.gridTemplateAreas = `"one four five" "six two seven" "eight nine three"`;
  player1.diceDotGridContainer.style.columnGap = "0.5rem";
  player1.diceDotGridContainer.style.rowGap = "1rem";
}
