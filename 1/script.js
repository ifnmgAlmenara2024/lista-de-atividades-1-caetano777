
let peso = parseFloat(prompt("Digite o peso em kg:"));
let altura = parseFloat(prompt("Digite a altura em metros:"));

let imc = peso / (altura * altura);

imc = imc.toFixed(2);

let mensagem = `Seu IMC é ${imc}\n`;
if (imc < 18.5) {
    mensagem += "Você está abaixo do peso.";
} else if (imc >= 18.5 && imc < 25) {
    mensagem += "Seu peso está normal (saudável).";
} else if (imc >= 25 && imc < 30) {
    mensagem += "Você está com sobrepeso.";
} else {
    mensagem += "Você está obeso.";
}


alert(mensagem);

