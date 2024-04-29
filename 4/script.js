
let valor = parseFloat(prompt("Digite o valor a ser convertido:"));
let moedaOrigem = prompt("Digite a moeda de origem (USD, EUR, GBP, BRL):");
let moedaDestino = prompt("Digite a moeda de destino (USD, EUR, GBP, BRL):");

const taxaUSD = 5.50;
const taxaEUR = 6.50;
const taxaGBP = 7.50;

let valorConvertido;

switch (moedaOrigem) {
    case "BRL":
        if (moedaDestino === "USD") {
            valorConvertido = valor / taxaUSD;
        } else if (moedaDestino === "EUR") {
            valorConvertido = valor / taxaEUR;
        } else if (moedaDestino === "GBP") {
            valorConvertido = valor / taxaGBP;
        } else {
            valorConvertido = valor;
        }
        break;
    case "USD":
        if (moedaDestino === "BRL") {
            valorConvertido = valor * taxaUSD;
        } else if (moedaDestino === "EUR") {
            valorConvertido = (valor * taxaUSD) / taxaEUR;
        } else if (moedaDestino === "GBP") {
            valorConvertido = (valor * taxaUSD) / taxaGBP;
        } else {
            valorConvertido = valor;
        }
        break;
    case "EUR":
        if (moedaDestino === "BRL") {
            valorConvertido = valor * taxaEUR;
        } else if (moedaDestino === "USD") {
            valorConvertido = (valor * taxaEUR) / taxaUSD;
        } else if (moedaDestino === "GBP") {
            valorConvertido = (valor * taxaEUR) / taxaGBP;
        } else {
            valorConvertido = valor; 
        }
        break;
    case "GBP":
        if (moedaDestino === "BRL") {
            valorConvertido = valor * taxaGBP;
        } else if (moedaDestino === "USD") {
            valorConvertido = (valor * taxaGBP) / taxaUSD;
        } else if (moedaDestino === "EUR") {
            valorConvertido = (valor * taxaGBP) / taxaEUR;
        } else {
            valorConvertido = valor; 
        }
        break;
    default:
        valorConvertido = valor; 
        break;
}

console.log(`Valor convertido de ${valor} ${moedaOrigem} para ${moedaDestino}: ${valorConvertido.toFixed(2)}`);


