alert("Este é o jogo de adivinhação!");

let guessNumber = Number(prompt("Adivinhe um número inteiro de 0 a 10"));

const multiplier = 10;
const randomNumber = Math.random() * multiplier;
const generatedNumber = Math.round(randomNumber);

let isCorrect = (guessNumber == generatedNumber);
let attempts = 1;

while(isCorrect != true){
    guessNumber = Number(prompt("Que pena, você errou! Tente novamente"));

    isCorrect = (guessNumber === generatedNumber);
    attempts++;
}

alert("Parabéns! Você adivinhou o número em " + attempts + " tentativas.");