const calc = require('./calculadora');
const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    res.send('Olá, mundo!');
});


app.get('/ola/:n', (req, res)=>{
    res.send(`Olá, ${req.params.n}!`);
});

const PORT = 8000
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
})



console.log(calc.somar(2,3));
console.log(calc.subtrair(2,3));
console.log(calc.multiplicar(2,3));
console.log(calc.dividir(2,3));