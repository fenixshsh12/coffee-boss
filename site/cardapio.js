let carrinho = [];
let total = 0;

function adicionarAoCarrinho(item, preco) {
    const button = event.target;
    const quantidadeInput = button.previousElementSibling;
    const quantidade = parseInt(quantidadeInput.value);

    if (quantidade > 0) {
        const itemExistente = carrinho.find(c => c.item === item);
        if (itemExistente) {
            total -= itemExistente.totalItem; // Remove o valor antigo do total
            itemExistente.quantidade += quantidade;
            itemExistente.totalItem = itemExistente.quantidade * preco;
        } else {
            carrinho.push({ item, quantidade, totalItem: preco * quantidade });
        }
        total += quantidade * preco; // Atualiza o total geral
        atualizarCarrinho();
    } else {
        alert('Por favor, escolha uma quantidade válida.');
    }
}

function atualizarCarrinho() {
    const itensCarrinho = document.getElementById('itens-carrinho');
    itensCarrinho.innerHTML = '';

    carrinho.forEach(({ item, quantidade, totalItem }) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = `${item} x${quantidade} - R$ ${totalItem.toFixed(2)}`;
        itensCarrinho.appendChild(itemLista);
    });

    document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
}

function irParaPagamento() {
    alert('Função para ir para o pagamento ainda não implementada.');
}

function cancelarCompra() {
    carrinho = [];
    total = 0;
    atualizarCarrinho();
}

function voltarParaPaginaPrincipal() {
    // Redireciona para a página principal; ajuste o URL conforme necessário
    window.location.href = 'index.html';
}