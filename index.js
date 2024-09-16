let player1 = document.getElementsByClassName("item")[0];
let diceDotGridContainer = player1.querySelector(
  ".dice > #dice-dot-grid-container"
); 
 
let title = document.getElementById("title");
let diceDot1 = document.getElementById("dot-1");
let diceDot2 = document.getElementById("dot-2");
let diceDot3 = document.getElementById("dot-3");
let diceDot4 = document.getElementById("dot-4");
let diceDot5 = document.getElementById("dot-5");
let diceDot6 = document.getElementById("dot-6");

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
  diceDotGridContainer.style.display = "grid";
  diceDotGridContainer.style.gridTemplateColumns = "auto auto";
  diceDotGridContainer.style.gridTemplateRows = "auto auto auto";
  diceDotGridContainer.style.columnGap = "0.5rem";
  diceDotGridContainer.style.rowGap = "1rem";
  diceDot1.style.gridArea = "one";
  diceDot2.style.gridArea = "five";
  diceDot3.style.gridArea = "six";
  diceDot4.style.gridArea = "seven";
  diceDot5.style.gridArea = "eight";
  diceDot6.style.gridArea = "three";
  addDot("div.dot#dot-1");
  addDot("div.dot#dot-2");
  addDot("div.dot#dot-3");
  addDot("div.dot#dot-4");
  addDot("div.dot#dot-5");
  addDot("div.dot#dot-6");
}

function diceRoll5() {
  gridContainerStyle();
  diceDot1.style.gridArea = "one";
  diceDot2.style.gridArea = "two";
  diceDot3.style.gridArea = "three";
  diceDot4.style.gridArea = "eight";
  diceDot5.style.gridArea = "five";
  addDot("div.dot#dot-1");
  addDot("div.dot#dot-2");
  addDot("div.dot#dot-3");
  addDot("div.dot#dot-4");
  addDot("div.dot#dot-5");
  removeDot("div.dot#dot-6");
}

function diceRoll4() {
  gridContainerStyle();
  diceDot1.style.gridArea = "one";
  diceDot2.style.gridArea = "five";
  diceDot3.style.gridArea = "three";
  diceDot4.style.gridArea = "eight";
  addDot("div.dot#dot-1");
  addDot("div.dot#dot-2");
  addDot("div.dot#dot-3");
  addDot("div.dot#dot-4");
  removeDot("div.dot#dot-5");
  removeDot("div.dot#dot-6");
}

function diceRoll3() {
  gridContainerStyle();
  diceDot1.style.gridArea = "one";
  diceDot2.style.gridArea = "two";
  diceDot3.style.gridArea = "three";
  addDot("div.dot#dot-1");
  addDot("div.dot#dot-2");
  addDot("div.dot#dot-3");
  removeDot("div.dot#dot-4");
  removeDot("div.dot#dot-5");
  removeDot("div.dot#dot-6");
}

function diceRoll2() {
  gridContainerStyle();
  diceDot1.style.gridArea = "one";
  diceDot2.style.gridArea = "three";
  addDot("div.dot#dot-1");
  addDot("div.dot#dot-2");
  removeDot("div.dot#dot-3");
  removeDot("div.dot#dot-4");
  removeDot("div.dot#dot-5");
  removeDot("div.dot#dot-6");
}

function diceRoll1() {
  diceDotGridContainer.style.display = "flex";
  diceDotGridContainer.style.alignItems = "center";
  diceDotGridContainer.style.justifyItems = "center";
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
  diceDotGridContainer.style.position = "relative";
  diceDotGridContainer.style.display = "grid";
  diceDotGridContainer.style.gridTemplateAreas = `"one four five" "six two seven" "eight nine three"`;
  diceDotGridContainer.style.columnGap = "0.5rem";
  diceDotGridContainer.style.rowGap = "1rem";
}
