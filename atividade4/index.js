const estoque = require('./estoque');
const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    let html =  '<h1>app_estoque</h1>';
    html     += '<h3>Rotas disponíveis:</h3>'
    html     += '<p>/adicionar/:id/:nome/:qtd</p>'
    html     += '<p>/listar</p>'
    html     += '<p>/remover/:id</p>'
    html     += '<p>/editar/:id/:qtd</p>'
    res.send(html);
});

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const id = req.params.id;
    const nome = req.params.nome;
    const qtd = req.params.qtd;
    
    const resultado = estoque.adicionar(id, nome, qtd);
    res.send(resultado.mensagem);
});

app.get('/listar', (req, res) => {
    const produtos = estoque.listar();
    
    if (produtos.length === 0) {
        return res.send('O estoque está vazio.');
    }
    
    let html = '<h2>Lista de Produtos</h2>';
    html += '<table border="1">';
    html += '<tr><th>ID</th><th>Nome</th><th>Quantidade</th><th>Ações</th></tr>';
    
    produtos.forEach(produto => {
        html += `<tr>
            <td>${produto.id}</td>
            <td>${produto.nome}</td>
            <td>${produto.qtd}</td>
            <td>
                <a href="/remover/${produto.id}">Remover</a> | 
                <a href="/editar/${produto.id}/${produto.qtd}">Editar</a>
            </td>
        </tr>`;
    });
    
    html += '</table>';
    res.send(html);
});

app.get('/remover/:id', (req, res) => {
    const id = req.params.id;
    const resultado = estoque.remover(id);
    res.send(resultado.mensagem);
});

app.get('/editar/:id/:qtd', (req, res) => {
    const id = req.params.id;
    const novaQtd = req.params.qtd;
    const resultado = estoque.editar(id, novaQtd);
    res.send(resultado.mensagem);
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log('Aplicativo de estoque rodando na porta ' + PORT);
});