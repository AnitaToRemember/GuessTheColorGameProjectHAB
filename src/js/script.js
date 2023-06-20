'use strict'

const colorRandom = () => {
    const randomNumber = Math.floor(Math.random() * 255) + 1;
    return randomNumber;
}

const getRandomColorRGB = () => {
    const redRandom = colorRandom();
    const greenRandom = colorRandom();
    const blueRandom = colorRandom();
    return 'rgb(' + redRandom + ', ' + greenRandom + ', ' + blueRandom + ')';
}

let correctColorRGB = getRandomColorRGB();
let hits = 0;
let failures = 0;

const playButton = document.getElementById("play");
const colorBoxes = document.getElementsByClassName("color-box");
const hitsSpan = document.getElementById("hits");
const failuresSpan = document.getElementById("failures");

const playGame = () => {
    correctColorRGB = getRandomColorRGB();
    hits = 0;
    hitsSpan.innerText = hits;
    failures = 0;
    failuresSpan.innerText = failures;

    // Asignar colores aleatorios a las cajas
    const colorArray = Array.from(colorBoxes);
    colorArray.forEach((box) => {
        if (box.id === "correct-box") {
            box.style.backgroundColor = correctColorRGB;
        } else {
            const randomColorRGB = getRandomColorRGB();
            box.style.backgroundColor = randomColorRGB;
        }
    });
}

const handleGuess = (event) => {
    const selectedBox = event.target;
    const selectedColorRGB = selectedBox.style.backgroundColor;

    if (selectedColorRGB === correctColorRGB) {
        hits++;
        hitsSpan.innerText = hits;
    } else {
        failures++;
        failuresSpan.innerText = failures;
    }

    if (hits === 3) {
        alert("¡Has ganado el juego!");
        playGame();
    } else if (failures === 3) {
        alert("Has perdido el juego");
        playGame();
    }
}

playButton.addEventListener("click", playGame);

for (let i = 0; i < colorBoxes.length; i++) {
    colorBoxes[i].addEventListener("click", handleGuess);
}

playGame();





/*
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
*/
