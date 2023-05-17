alert("Vamos verificar quais são os resultados de soma, subtração, multiplicação, divisisão e resto entre dois números");

const firstNumber = Number(prompt("Digite o primeiro número:"));
const secondNumber = Number(prompt("Digite o segundo número:"));

const addResult = firstNumber + secondNumber;
const subtractResult = firstNumber - secondNumber;
const multiplyResult = firstNumber * secondNumber;
const divisorResult = firstNumber / secondNumber;
const moduleResult = firstNumber % secondNumber;

alert(`${firstNumber} + ${secondNumber} = ${addResult}`);
alert(`${firstNumber} - ${secondNumber} = ${subtractResult}`);
alert(`${firstNumber} * ${secondNumber} = ${multiplyResult}`);
alert(`${firstNumber} / ${secondNumber} = ${divisorResult}`);
alert(`${firstNumber} % ${secondNumber} = ${moduleResult}`);