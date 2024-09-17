let root = document.documentElement;
let title = document.getElementById("title");

let itemList = document.getElementById("grid-container");
let diceDotGridContainerP1 = itemList.children[0];
let diceDotGridContainerP2 = itemList.children[1];

let dice1 = diceDotGridContainerP1.querySelector("#dice-p1");
let dice2 = diceDotGridContainerP2.querySelector("#dice-p2");

let diceDot1P1 = diceDotGridContainerP1.querySelector("#dot-1-P1");
let diceDot2P1 = diceDotGridContainerP1.querySelector("#dot-2-P1");
let diceDot3P1 = diceDotGridContainerP1.querySelector("#dot-3-P1");
let diceDot4P1 = diceDotGridContainerP1.querySelector("#dot-4-P1");
let diceDot5P1 = diceDotGridContainerP1.querySelector("#dot-5-P1");
let diceDot6P1 = diceDotGridContainerP1.querySelector("#dot-6-P1");

let diceDot1P2 = diceDotGridContainerP2.querySelector("#dot-1-P2");
let diceDot2P2 = diceDotGridContainerP2.querySelector("#dot-2-P2");
let diceDot3P2 = diceDotGridContainerP2.querySelector("#dot-3-P2");
let diceDot4P2 = diceDotGridContainerP2.querySelector("#dot-4-P2");
let diceDot5P2 = diceDotGridContainerP2.querySelector("#dot-5-P2");
let diceDot6P2 = diceDotGridContainerP2.querySelector("#dot-6-P2");

function diceOutput() {
  let diceRollP1 = Math.floor(Math.random() * 6) + 1;
  let diceRollP2 = Math.floor(Math.random() * 6) + 1;
  let diceRotate1 = Math.floor(Math.random() * 360) + 1;
  let diceRotate2 = Math.floor(Math.random() * 360) + 1;
  root.style.setProperty("--rotation1", "rotate(" + diceRotate1 + "deg)");
  root.style.setProperty("--rotation2", "rotate(" + diceRotate2 + "deg)");
  // let setRotation = root.style.setProperty('--rotation1', 'rotate(' + diceRotate1 + 'deg)');

  if (diceRollP1 > diceRollP2) {
    title.innerHTML = "🚩 Player 1 Wins!";
  } else if (diceRollP2 > diceRollP1) {
    title.innerHTML = "Player 2 Wins! 🚩";
  } else {
    title.innerHTML = "🚩 Draw! 🚩";
  }

  switch (diceRollP1) {
    case 1:
      diceRoll1P1(diceRotate1);
      break;
    case 2:
      diceRoll2P1(diceRotate1);
      break;
    case 3:
      diceRoll3P1(diceRotate1);
      break;
    case 4:
      diceRoll4P1(diceRotate1);
      break;
    case 5:
      diceRoll5P1(diceRotate1);
      break;
    case 6:
      diceRoll6P1(diceRotate1);
      break;
    default:
      break;
  }

  switch (diceRollP2) {
    case 1:
      diceRoll1P2(diceRotate2);
      break;
    case 2:
      diceRoll2P2(diceRotate2);
      break;
    case 3:
      diceRoll3P2(diceRotate2);
      break;
    case 4:
      diceRoll4P2(diceRotate2);
      break;
    case 5:
      diceRoll5P2(diceRotate2);
      break;
    case 6:
      diceRoll6P2(diceRotate2);
      break;
    default:
      break;
  }
}

function diceRoll6P1(diceRotate1) {
  flipAnimation(dice1, 1, 500);
  dice1.style.transform = `rotate(${diceRotate1}deg)`;
  diceDot1P1.style.gridArea = "one";
  diceDot2P1.style.gridArea = "five";
  diceDot3P1.style.gridArea = "six";
  diceDot4P1.style.gridArea = "seven";
  diceDot5P1.style.gridArea = "eight";
  diceDot6P1.style.gridArea = "three";
}

function diceRoll5P1(diceRotate1) {
  flipAnimation(dice1, 1, 500);
  dice1.style.transform = `rotate(${diceRotate1}deg)`;
  diceDot1P1.style.gridArea = "one";
  diceDot2P1.style.gridArea = "two";
  diceDot3P1.style.gridArea = "three";
  diceDot4P1.style.gridArea = "eight";
  diceDot5P1.style.gridArea = "five";
  diceDot6P1.style.gridArea = "five";
}

function diceRoll4P1(diceRotate1) {
  flipAnimation(dice1, 1, 500);
  dice1.style.transform = `rotate(${diceRotate1}deg)`;
  diceDot1P1.style.gridArea = "one";
  diceDot2P1.style.gridArea = "five";
  diceDot3P1.style.gridArea = "three";
  diceDot4P1.style.gridArea = "eight";
  diceDot1P1.style.gridArea = "one";
  diceDot2P1.style.gridArea = "five";
}

function diceRoll3P1(diceRotate1) {
  flipAnimation(dice1, 1, 500);
  dice1.style.transform = `rotate(${diceRotate1}deg)`;
  diceDot1P1.style.gridArea = "one";
  diceDot2P1.style.gridArea = "two";
  diceDot3P1.style.gridArea = "three";
  diceDot4P1.style.gridArea = "one";
  diceDot5P1.style.gridArea = "two";
  diceDot6P1.style.gridArea = "three";
}

function diceRoll2P1(diceRotate1) {
  flipAnimation(dice1, 1, 500);
  dice1.style.transform = `rotate(${diceRotate1}deg)`;
  diceDot1P1.style.gridArea = "one";
  diceDot2P1.style.gridArea = "three";
  diceDot3P1.style.gridArea = "one";
  diceDot4P1.style.gridArea = "three";
  diceDot5P1.style.gridArea = "one";
  diceDot6P1.style.gridArea = "three";
}

function diceRoll1P1(diceRotate1) {
  flipAnimation(dice1, 1, 500);
  dice1.style.transform = `rotate(${diceRotate1}deg)`;
  diceDot1P1.style.gridArea = "two";
  diceDot2P1.style.gridArea = "two";
  diceDot3P1.style.gridArea = "two";
  diceDot4P1.style.gridArea = "two";
  diceDot5P1.style.gridArea = "two";
  diceDot6P1.style.gridArea = "two";
}

function diceRoll6P2(diceRotate2) {
  flipAnimation(dice2, 2, 600);
  dice2.style.transform = `rotate(${diceRotate2}deg)`;
  diceDot1P2.style.gridArea = "one";
  diceDot2P2.style.gridArea = "five";
  diceDot3P2.style.gridArea = "six";
  diceDot4P2.style.gridArea = "seven";
  diceDot5P2.style.gridArea = "eight";
  diceDot6P2.style.gridArea = "three";
}

function diceRoll5P2(diceRotate2) {
  flipAnimation(dice2, 2, 600);
  dice2.style.transform = `rotate(${diceRotate2}deg)`;
  diceDot1P2.style.gridArea = "one";
  diceDot2P2.style.gridArea = "two";
  diceDot3P2.style.gridArea = "three";
  diceDot4P2.style.gridArea = "eight";
  diceDot5P2.style.gridArea = "five";
  diceDot6P2.style.gridArea = "five";
}

function diceRoll4P2(diceRotate2) {
  flipAnimation(dice2, 2, 600);
  dice2.style.transform = `rotate(${diceRotate2}deg)`;
  diceDot1P2.style.gridArea = "one";
  diceDot2P2.style.gridArea = "five";
  diceDot3P2.style.gridArea = "three";
  diceDot4P2.style.gridArea = "eight";
  diceDot1P2.style.gridArea = "one";
  diceDot2P2.style.gridArea = "five";
}

function diceRoll3P2(diceRotate2) {
  flipAnimation(dice2, 2, 600);
  dice2.style.transform = `rotate(${diceRotate2}deg)`;
  diceDot1P2.style.gridArea = "one";
  diceDot2P2.style.gridArea = "two";
  diceDot3P2.style.gridArea = "three";
  diceDot4P2.style.gridArea = "one";
  diceDot5P2.style.gridArea = "two";
  diceDot6P2.style.gridArea = "three";
}

function diceRoll2P2(diceRotate2) {
  flipAnimation(dice2, 2, 600);
  dice2.style.transform = `rotate(${diceRotate2}deg)`;
  diceDot1P2.style.gridArea = "one";
  diceDot2P2.style.gridArea = "three";
  diceDot3P2.style.gridArea = "one";
  diceDot4P2.style.gridArea = "three";
  diceDot5P2.style.gridArea = "one";
  diceDot6P2.style.gridArea = "three";
}

function diceRoll1P2(diceRotate2) {
  flipAnimation(dice2, 2, 600);
  dice2.style.transform = `rotate(${diceRotate2}deg)`;
  diceDot1P2.style.gridArea = "two";
  diceDot2P2.style.gridArea = "two";
  diceDot3P2.style.gridArea = "two";
  diceDot4P2.style.gridArea = "two";
  diceDot5P2.style.gridArea = "two";
  diceDot6P2.style.gridArea = "two";
}

function flipAnimation(dice, number, speed) {
  dice.classList.add(`flipAnimation${number}`);
  setTimeout(function () {
    dice.classList.remove(`flipAnimation${number}`);
  }, speed);
}
