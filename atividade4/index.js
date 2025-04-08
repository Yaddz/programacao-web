const express = require('express');
const app = express();

// Array para armazenar os produtos
let estoque = [];

// Rota principal
app.get('/', (req, res) => {
    let html = '<h1>Controle de Estoque</h1>';
    html += '<h3>Rotas disponíveis</h3>';
    html += '<p>/adicionar/:id/:nome/:qtd (<a href="/adicionar/1/Caneta/50">adicionar/1/Caneta/50</a>)</p>';
    html += '<p>/listar (<a href="/listar">listar</a>)</p>';
    html += '<p>/remover/:id (<a href="/remover/1">remover/1</a>)</p>';
    html += '<p>/editar/:id/:qtd (<a href="/editar/1/100">editar/1/100</a>)</p>';
    res.send(html);
});

// Rota para adicionar produto
app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const id = req.params.id;
    const nome = req.params.nome;
    const qtd = Number(req.params.qtd);
    
    // Verificar se o produto já existe
    const produtoExistente = estoque.find(produto => produto.id === id);
    if (produtoExistente) {
        return res.send(`Erro: Produto com ID ${id} já existe no estoque.`);
    }
    
    // Adicionar novo produto
    const novoProduto = { id, nome, qtd };
    estoque.push(novoProduto);
    res.send(`Produto adicionado: ID ${id}, Nome: ${nome}, Quantidade: ${qtd}`);
});

// Rota para listar produtos
app.get('/listar', (req, res) => {
    if (estoque.length === 0) {
        return res.send('O estoque está vazio.');
    }
    
    let html = '<h2>Lista de Produtos</h2>';
    html += '<table border="1">';
    html += '<tr><th>ID</th><th>Nome</th><th>Quantidade</th><th>Ações</th></tr>';
    
    estoque.forEach(produto => {
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

// Rota para remover produto
app.get('/remover/:id', (req, res) => {
    const id = req.params.id;
    const indexProduto = estoque.findIndex(produto => produto.id === id);
    
    if (indexProduto === -1) {
        return res.send(`Erro: Produto com ID ${id} não encontrado no estoque.`);
    }
    
    const produtoRemovido = estoque[indexProduto];
    estoque.splice(indexProduto, 1);
    
    res.send(`Produto removido: ID ${produtoRemovido.id}, Nome: ${produtoRemovido.nome}`);
});

// Rota para editar quantidade de produto
app.get('/editar/:id/:qtd', (req, res) => {
    const id = req.params.id;
    const novaQtd = Number(req.params.qtd);
    const produto = estoque.find(produto => produto.id === id);
    
    if (!produto) {
        return res.send(`Erro: Produto com ID ${id} não encontrado no estoque.`);
    }
    
    const qtdAnterior = produto.qtd;
    produto.qtd = novaQtd;
    
    res.send(`Quantidade do produto "${produto.nome}" (ID: ${id}) atualizada: ${qtdAnterior} → ${novaQtd}`);
});

// Iniciar o servidor
const PORT = 8080;
app.listen(PORT, () => {
    console.log('Aplicativo de estoque rodando na porta ' + PORT);
});