
document.addEventListener("DOMContentLoaded", function() {
  
    const produtos = [
        { nome: "Pablo Marçal 0 a 1 MILHÂO", preco: 99.99 },
        { nome: "Ao infinito e Além", preco: 49.99 }
    ];

    const produtosContainer = document.querySelector(".produtos");

    produtos.forEach(produto => {
        const card = document.createElement("div");
        card.className = "produto-card";
        card.innerHTML = `<h2>${produto.nome}</h2><p>Preço: R$ ${produto.preco.toFixed(2)}</p>`;
        produtosContainer.appendChild(card);
    });
});
