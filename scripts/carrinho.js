const carrinho = [];

function adicionarAoCarrinho(produto) {
  const index = carrinho.findIndex((item) => item.id === produto.id);

  if (index !== -1) {
    carrinho[index].quantidade += 1;
  } else {
    carrinho.push({
      id: produto.id,
      titulo: produto.titulo,
      quantidade: 1,
      preco: produto.preco,
    });
  }

  exibirCarrinhoNaTela();
}

function removerDoCarrinho(produto) {
  const index = carrinho.findIndex((item) => item.id === produto.id);

  if (index !== -1) {
    carrinho[index].quantidade -= 1;
    if (carrinho[index].quantidade === 0) {
      carrinho.splice(index, 1);
    }
  }

  exibirCarrinhoNaTela();
}

function exibirCarrinhoNaTela() {
  const carrinhoContainer = document.querySelector(".app__card-carrinho");
  const somaSubTotal = document.querySelector(".app__section_total");

  if (carrinho.length === 0) {
    carrinhoContainer.innerHTML = `<h3 class="app__title-carrinho-vazio">Carrinho vazio</h3>`;
    somaSubTotal.innerHTML = "";
    return;
  }

  carrinhoContainer.innerHTML = "";
  let somaSubTotais = 0;

  carrinho.forEach((item) => {
    const subtotal = item.quantidade * item.preco;
    somaSubTotais += subtotal;

    carrinhoContainer.innerHTML += `
    <div class="app__carrinho-details">
      <h3 class="app__title-carrinho">${item.titulo}</h3>
      <h3 class="app__title-carrinho">
        <strong class="app__title-carrinho-strong">R$ ${item.preco.toFixed(
          2
        )}</strong>
      </h3>
      <h3 class="app__title-carrinho">Quantidade: 
        <strong class="app__title-carrinho-strong">${item.quantidade}</strong>
      </h3>
      <h3 class="app__title-carrinho">Sub-total: <br> 
        <strong class="app__title-carrinho-strong">R$ ${subtotal.toFixed(
          2
        )}</strong>
      </h3>
    </div>
    `;
  });

  somaSubTotal.innerHTML = `
  <div class="app_carrinho-details-total">
    <h3 class="app__title-carrinho">Total: <br> 
      <strong class="app__title-carrinho-strong">R$ ${somaSubTotais.toFixed(
        2
      )}</strong>
    </h3>
  </div>
  `;
}