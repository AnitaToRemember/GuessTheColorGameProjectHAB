"use strict";

// Función para generar un número aleatorio entre 1 y el rango máximo proporcionado
const randomNumber = (maxRange) => Math.floor(Math.random() * maxRange) + 1;

// Variables para almacenar los valores de los colores rojo, verde y azul
let redRandom, greenRandom, blueRandom;
let colorRGB;

// Obtener referencias a elementos del documento HTML por su ID
const playButton = document.getElementById("play");
const redColorSpan = document.getElementById("random_red");
const greenColorSpan = document.getElementById("random_green");
const blueColorSpan = document.getElementById("random_blue");
const hitsSpan = document.getElementById("hits");
const failuresSpan = document.getElementById("failures");

// Variables para llevar el conteo de aciertos y fallos
let hits = 0;
let failures = 0;

// Función para generar un color falso aleatorio
const randomFakeColour = () => {
  const red = randomNumber(255);
  const green = randomNumber(255);
  const blue = randomNumber(255);
  return `rgb(${red}, ${green}, ${blue})`;
};

// Función para asignar los colores a los bloques de manera aleatoria
const createBlockColor = () => {
  const trueBoxNumber = randomNumber(6);
  for (let i = 1; i <= 6; i++) {
    const box = document.getElementById(`colour${i}`);
    box.style.backgroundColor =
      trueBoxNumber === i ? colorRGB : randomFakeColour();
  }
};

// Función para reiniciar el juego y generar nuevos valores
const playAgain = () => {
  redRandom = randomNumber(255);
  greenRandom = randomNumber(255);
  blueRandom = randomNumber(255);
  colorRGB = `rgb(${redRandom}, ${greenRandom}, ${blueRandom})`;

  redColorSpan.innerText = redRandom;
  greenColorSpan.innerText = greenRandom;
  blueColorSpan.innerText = blueRandom;
  hitsSpan.innerText = hits;
  failuresSpan.innerText = failures;

  createBlockColor();
};

// Función para reiniciar el juego y restablecer los conteos
const resetGame = () => {
  hits = 0;
  failures = 0;
  playAgain();
};

// Función para comprobar si se ha alcanzado la condición de victoria o derrota
const checkWinner = () => {
  if (hits === 3) {
    alert("¡Ganaste!");
    resetGame();
  } else if (failures === 3) {
    alert("¡Perdiste!");
    resetGame();
  } else {
    playAgain();
  }
};

// Función que se ejecuta cuando se hace clic en uno de los bloques
const boxClicked = (boxId) => {
  const box = document.getElementById(boxId);
  if (box.style.backgroundColor === colorRGB) {
    hits++;
    hitsSpan.innerText = hits;
  } else {
    failures++;
    failuresSpan.innerText = failures;
  }
  checkWinner();
};

// Función para agregar un event listener a cada bloque
const addBoxClickListener = (boxId) => {
  const box = document.getElementById(boxId);
  box.addEventListener("click", () => boxClicked(boxId));
};

// Agregar listeners a las cajas
for (let i = 1; i <= 6; i++) {
  addBoxClickListener(`colour${i}`);
}

// Agregar un event listener al botón de jugar para reiniciar el juego
playButton.addEventListener("click", resetGame);

// Iniciar el juego
resetGame();
