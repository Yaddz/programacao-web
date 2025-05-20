const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res)=>{
    res.render('index.html');
});

app.post('/agendar_consulta', (req, res)=>{
    let form_invalido = false;
    let campos_invalidos = [];

    let dados_consulta = req.body;

    if(dados_consulta.nome.length == 0){
        form_invalido = true;
        campos_invalidos.push("Nome");
    }
    if(dados_consulta.sobrenome.length == 0){
        form_invalido = true;
        campos_invalidos.push("Sobrenome");
    }
    if(dados_consulta.cpf.length == 0){
        form_invalido = true;
        campos_invalidos.push("CPF");
    }

    res.render('index.html', {form_invalido, campos_invalidos, dados_consulta});
});

const PORT = 8080;
app.listen(PORT, ()=>{
    console.log('app rodando na porta ' + PORT);
});