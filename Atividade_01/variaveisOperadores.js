const numA = 4;
const numB = 8;

function imprimirResultado(operando1, operando2, resultado, operacao) {
    console.log(`Resultado da ${operacao} entre ${numA} e ${numB}: ${resultado}`);
}

let resultado = numA + numB;
imprimirResultado(numA, numB, resultado, "Adição");

resultado = numA - numB;
imprimirResultado(numA, numB, resultado, "Subtração");

resultado = numA * numB;
imprimirResultado(numA, numB, resultado, "Multiplicação");

resultado = numA / numB;
imprimirResultado(numA, numB, resultado, "Divisão");