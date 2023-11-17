const cards = document.querySelectorAll(".app__card-products");
let quantidade = 0;

cards.forEach((card) => {
  const diminuirButton = card.querySelector(
    ".app__section-products__button--diminuir"
  );
  const aumentarButton = card.querySelector(
    ".app__section-products__button--aumentar"
  );
  const box = card.querySelector(".box");

  diminuirButton.addEventListener("click", () => {
    const produtoIndex = parseInt(card.getAttribute("data-index"));
    if (!isNaN(produtoIndex)) {
      const produto = produtos[produtoIndex];
      if (produto.quantidade > 0) {
        produto.quantidade--;
        box.textContent = produto.quantidade;
        atualizarCarrinho();
      }
    }
  });

  aumentarButton.addEventListener("click", () => {
    const produtoIndex = parseInt(card.getAttribute("data-index"));
    if (!isNaN(produtoIndex)) {
      const produto = produtos[produtoIndex];
      produto.quantidade++;
      box.textContent = produto.quantidade;
      atualizarCarrinho();
    }
  });
});

function atualizarCarrinho() {
  carrinho.length = 0;

  produtos.forEach((produto) => {
    if (produto.quantidade > 0) {
      carrinho.push({
        id: produto.id,
        titulo: produto.titulo,
        quantidade: produto.quantidade,
        preco: produto.preco,
      });
    }
  });

  exibirCarrinhoNaTela();
}
