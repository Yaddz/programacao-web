
let estoque = [];

function adicionar(id, nome, qtd) {
    const produtoExistente = estoque.find(produto => produto.id === id);
    if (produtoExistente) {
        return { sucesso: false, mensagem: `Erro: Produto com ID ${id} já existe no estoque.` };
    }
    
    const novoProduto = { id, nome, qtd: Number(qtd) };
    estoque.push(novoProduto);
    return { 
        sucesso: true, 
        mensagem: `Produto adicionado: ID ${id}, Nome: ${nome}, Quantidade: ${qtd}`,
        produto: novoProduto
    };
}

function listar() {
    return [...estoque];
}

function remover(id) {
    const indexProduto = estoque.findIndex(produto => produto.id === id);
    
    if (indexProduto === -1) {
        return { sucesso: false, mensagem: `Erro: Produto com ID ${id} não encontrado no estoque.` };
    }
    
    const produtoRemovido = estoque[indexProduto];
    estoque.splice(indexProduto, 1);
    
    return { 
        sucesso: true, 
        mensagem: `Produto removido: ID ${produtoRemovido.id}, Nome: ${produtoRemovido.nome}`,
        produto: produtoRemovido
    };
}

function editar(id, novaQtd) {
    const produto = estoque.find(produto => produto.id === id);
    
    if (!produto) {
        return { sucesso: false, mensagem: `Erro: Produto com ID ${id} não encontrado no estoque.` };
    }
    
    const qtdAnterior = produto.qtd;
    produto.qtd = Number(novaQtd);
    
    return { 
        sucesso: true, 
        mensagem: `Quantidade do produto "${produto.nome}" (ID: ${id}) atualizada: ${qtdAnterior} → ${novaQtd}`,
        produto: produto
    };
}

module.exports = {
    adicionar,
    listar,
    remover,
    editar
};