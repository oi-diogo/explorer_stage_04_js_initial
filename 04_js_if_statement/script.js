alert("Vamos verificar se você foi aprovado neste bimestre com base na média de suas 3 notas");

const yourName = prompt("Qual o seu nome:");
const firstGrade = Number(prompt("Digite a sua primeira nota:"));
const secondGrade = Number(prompt("Digite a sua segunda nota:"));
const thirdGrade = Number(prompt("Digite a sua terceira nota:"));

const gradeAverage = (firstGrade + secondGrade + thirdGrade) / 3;

const isAproved = gradeAverage > 6;

if(isAproved === true){
    alert(`Parabéns, ${yourName}! Você foi aprovado com média: ${gradeAverage.toFixed(2)}`);
} else if(isAproved === false){
    if(gradeAverage < 3){
    alert(`${yourName}, você foi reprovado! A sua média: ${gradeAverage.toFixed(2)}`);
    }else{
        alert(`${yourName}, estude para a sua prova de recuperação! A sua média: ${gradeAverage.toFixed(2)}`);
    }
}