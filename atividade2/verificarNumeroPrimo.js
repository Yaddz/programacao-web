function verificarNumeroPrimo(n){
    if(n < 2){
        return false;
    }

    if(n % 2 == 0 && n != 2){
        return false;
    }

    for(let i = 3; i < n; i += 2){
        if(n % i == 0){
            return false;
        }
    }

    return true;
}

console.log(`0 = ${verificarNumeroPrimo(0)}`); //false
console.log(`1 = ${verificarNumeroPrimo(1)}`); //false
console.log(`2 = ${verificarNumeroPrimo(2)}`); //true
console.log(`3 = ${verificarNumeroPrimo(3)}`); //true
console.log(`7 = ${verificarNumeroPrimo(7)}`); //true
console.log(`83 = ${verificarNumeroPrimo(83)}`); //true
console.log(`100 = ${verificarNumeroPrimo(100)}`); //false
console.log(`991 = ${verificarNumeroPrimo(991)}`); //true
console.log(`104729 = ${verificarNumeroPrimo(104729)}`); //true
console.log(`14348907 = ${verificarNumeroPrimo(14348907)}`); //false