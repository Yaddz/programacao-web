let numA = 4;
let numB = 8;

const operacoes = ["Adição", "Subtração", "Multiplicação", "Divisão"]

function imprimirResultado(operacao, operando1, operando2, resultado, ) {
    console.log(`Resultado da ${operacao} entre ${numA} e ${numB}: ${resultado}`);
}

let resultado = numA + numB;
imprimirResultado(operacoes[0], numA, numB, resultado);

resultado = numA - numB;
imprimirResultado(operacoes[1], numA, numB, resultado);

resultado = numA * numB;
imprimirResultado(operacoes[2], numA, numB, resultado);

resultado = numA / numB;
imprimirResultado(operacoes[3], numA, numB, resultado);