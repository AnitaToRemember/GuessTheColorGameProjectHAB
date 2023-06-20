'use strict'

const colorRandom = () => {
    const randomNumber = Math.floor(Math.random() * 255) + 1;
    return randomNumber;
}


let redRandom = colorRandom();
let greenRandom = colorRandom();
let blueRandom = colorRandom();
let colorRGB = 'rgb(' + redRandom + ', ' + greenRandom + ', ' + blueRandom + ')';
let hits = 0;
let failures = 0;

const playButton = document.getElementById("play");
const redColorSpan = document.getElementById("random_red");
const greenColorSpan = document.getElementById("random_green");
const blueColorSpan = document.getElementById("random_blue");
const hitsSpan = document.getElementById("hits");
const failuresSpan = document.getElementById("failures");

const playGame = () => {
    redRandom = colorRandom();
    redColorSpan.innerText = redRandom;
    greenRandom = colorRandom();
    greenColorSpan.innerText = greenRandom;
    blueRandom = colorRandom();
    blueColorSpan.innerText = blueRandom;
    colorRGB = 'rgb(' + redRandom + ', ' + greenRandom + ', ' + blueRandom + ')';
    console.log(colorRGB);
    hits = 0;
    hitsSpan.innerText = hits;
    failures = 0;
    failuresSpan.innerText = failures;
}

playButton.addEventListener("click", playGame);
playGame();

const createBlockColor = () => {
    //añadir el color de fondo verdadero a una de las cajas de forma aleatoria y a las otras asignarles otros randoms
}

