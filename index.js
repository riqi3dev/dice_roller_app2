
let title = document.getElementById("title");
let itemList = document.getElementById("grid-container");
let diceDotGridContainer = itemList.querySelector("div.item #dice-dot-grid-container");  
let diceDot1 = diceDotGridContainer.querySelector("#dot-1");
let diceDot2 = diceDotGridContainer.querySelector("#dot-2");
let diceDot3 = diceDotGridContainer.querySelector("#dot-3");
let diceDot4 = diceDotGridContainer.querySelector("#dot-4");
let diceDot5 = diceDotGridContainer.querySelector("#dot-5");
let diceDot6 = diceDotGridContainer.querySelector("#dot-6");

function diceOutput() {
  let diceRollP1 = Math.floor(Math.random() * 6) + 1; 
  let diceRollP2 = Math.floor(Math.random() * 6) + 1; 

  playerOne(diceRollP1);
  playerTwo(diceRollP2);
  if (diceRollP1 > diceRollP2) {
    title.innerHTML = "🚩 Player 1 Wins!";
  } else if (diceRollP2 > diceRollP1) {
    title.innerHTML = "Player 2 Wins! 🚩";
  } else {
    title.innerHTML = "🚩 Draw! 🚩";
  }
 
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

function playerTwo(diceRollP2) {
  switch (diceRollP2) {
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
  gridContainerStyle();
  diceDot1.style.gridArea = "two";
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
