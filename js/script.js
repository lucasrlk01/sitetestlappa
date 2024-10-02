function showDashboard() {
    document.getElementById('main-content').innerHTML = `
        <h1>Dashboard</h1>
        <p>Bem-vindo ao painel de controle.</p>
    `;
}

function showVendas() {
    document.getElementById('main-content').innerHTML = `
        <h1>Vendas</h1>
        <p>Informações sobre vendas.</p>
    `;
}

function showProdutos() {
    document.getElementById('main-content').innerHTML = `
        <h1>Produtos</h1>
        <div class="produtos">
            <div class="produto-card">
                <h3>Produto 1</h3>
                <p>Descrição do produto 1</p>
                <p class="preco">R$ 29,90</p>
                <a href="#" class="botao">Comprar</a>
            </div>
            <div class="produto-card">
                <h3>Produto 2</h3>
                <p>Descrição do produto 2</p>
                <p class="preco">R$ 49,90</p>
                <a href="#" class="botao">Comprar</a>
            </div>
        </div>
    `;
}

function showEquipe() {
    document.getElementById('main-content').innerHTML = `
        <h1>Equipe</h1>
        <p>Informações sobre a equipe.</p>
    `;
}

function showIntegracoes() {
    document.getElementById('main-content').innerHTML = `
        <h1>Integrações</h1>
        <p>Informações sobre integrações.</p>
    `;
}

function showCompras() {
    document.getElementById('main-content').innerHTML = `
        <h1>Compras</h1>
        <p>Informações sobre compras.</p>
    `;
}
