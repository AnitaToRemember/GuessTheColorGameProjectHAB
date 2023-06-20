'use strict'

const randomNumber = (maxRange) => {
    const randomNumber = Math.floor(Math.random() * maxRange) + 1;
    return randomNumber;
}

let redRandom = randomNumber(255);
let greenRandom = randomNumber(255);
let blueRandom = randomNumber(255);
let colorRGB = 'rgb(' + redRandom + ', ' + greenRandom + ', ' + blueRandom + ')';
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
    const newColor = 'rgb(' + red + ', ' + green + ', ' + blue + ')';
    return newColor;
}

const createBlockColor = () => {
    const trueBoxNumber = randomNumber(6);
    for (let i = 1; i <= 6; i++) {
        const box = document.getElementById(`colour${i}`);
        if (trueBoxNumber === i) {
            box.style.backgroundColor = colorRGB;
        }else{
            box.style.backgroundColor = randomFakeColour();
        }
        
    }
}

const playGame = () => {
    redRandom = randomNumber(255);
    redColorSpan.innerText = redRandom;
    greenRandom = randomNumber(255);
    greenColorSpan.innerText = greenRandom;
    blueRandom = randomNumber(255);
    blueColorSpan.innerText = blueRandom;
    colorRGB = 'rgb(' + redRandom + ', ' + greenRandom + ', ' + blueRandom + ')';
    hits = 0;
    hitsSpan.innerText = hits;
    failures = 0;
    failuresSpan.innerText = failures;
    createBlockColor();
}

playButton.addEventListener("click", playGame);
playGame();



