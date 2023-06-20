"use strict";

const randomNumber = (maxRange) => {
  const randomNumber = Math.floor(Math.random() * maxRange) + 1;
  return randomNumber;
};

let redRandom = randomNumber(255);
let greenRandom = randomNumber(255);
let blueRandom = randomNumber(255);
let colorRGB =
  "rgb(" + redRandom + ", " + greenRandom + ", " + blueRandom + ")";
let hits = 0;
let failures = 0;

const playButton = document.getElementById("play");
const redColorSpan = document.getElementById("random_red");
const greenColorSpan = document.getElementById("random_green");
const blueColorSpan = document.getElementById("random_blue");
const hitsSpan = document.getElementById("hits");
const failuresSpan = document.getElementById("failures");

const randomFakeColour = () => {
  const red = randomNumber(255);
  const green = randomNumber(255);
  const blue = randomNumber(255);
  const newColor = "rgb(" + red + ", " + green + ", " + blue + ")";
  return newColor;
};

const createBlockColor = () => {
  const trueBoxNumber = randomNumber(6);
  for (let i = 1; i <= 6; i++) {
    const box = document.getElementById(`colour${i}`);
    if (trueBoxNumber === i) {
      box.style.backgroundColor = colorRGB;
    } else {
      box.style.backgroundColor = randomFakeColour();
    }
  }
};

const playGame = () => {
  redRandom = randomNumber(255);
  redColorSpan.innerText = redRandom;
  greenRandom = randomNumber(255);
  greenColorSpan.innerText = greenRandom;
  blueRandom = randomNumber(255);
  blueColorSpan.innerText = blueRandom;
  colorRGB = "rgb(" + redRandom + ", " + greenRandom + ", " + blueRandom + ")";
  hits = 0;
  hitsSpan.innerText = hits;
  failures = 0;
  failuresSpan.innerText = failures;
  createBlockColor();
};

playButton.addEventListener("click", playGame);
playGame();

const box1 = document.getElementById("colour1");

const box1Clicked = () => {
    if (box1.style.backgroundColor === colorRGB) {
        console.log("¡Acertaste!");
    }else{
        console.log("¡Fallaste!");
    }
};

box1.addEventListener("click", box1Clicked);

const box2 = document.getElementById("colour2");

const box2Clicked = () => {
    if (box2.style.backgroundColor === colorRGB) {
        console.log("¡Acertaste!");
    }else{
        console.log("¡Fallaste!");
    }
};

box2.addEventListener("click", box2Clicked);

const box3 = document.getElementById("colour3");

const box3Clicked = () => {
    if (box3.style.backgroundColor === colorRGB) {
        console.log("¡Acertaste!");
    }else{
        console.log("¡Fallaste!");
    }
};

box3.addEventListener("click", box3Clicked);

const box4 = document.getElementById("colour4");

const box4Clicked = () => {
    if (box4.style.backgroundColor === colorRGB) {
        console.log("¡Acertaste!");
    }else{
        console.log("¡Fallaste!");
    }
};

box4.addEventListener("click", box4Clicked);

const box5 = document.getElementById("colour5");

const box5Clicked = () => {
    if (box5.style.backgroundColor === colorRGB) {
        console.log("¡Acertaste!");
    }else{
        console.log("¡Fallaste!");
    }
};

box5.addEventListener("click", box5Clicked);

const box6 = document.getElementById("colour6");

const box6Clicked = () => {
    if (box6.style.backgroundColor === colorRGB) {
        console.log("¡Acertaste!");
    }else{
        console.log("¡Fallaste!");
    }
};

box6.addEventListener("click", box6Clicked);
