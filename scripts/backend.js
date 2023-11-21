const containerProdutos = document.querySelector(
  ".app__section-products-content"
);

function exibirNaTela() {
  produtos.forEach((produto,index) => {
    containerProdutos.innerHTML += `
      <div class="app__card-products" data-index="${index}">
              <img
                class="app__image-products"
                src="${produto.imagem}"
                alt="${produto.titulo}"
              />
              <div class="app__products-details">
                <h3 class="app__title-products">${produto.titulo}</h3>
                <h3 class="app__title-products-descricao">
                  ${produto.descricao}
                </h3>
                <h3 class="app__title-products">
                  <strong class="app__title-products-strong">R$ ${produto.preco.toFixed(
                    2
                  )}</strong>
                </h3>
                <button
                  class="app__section-products__button app__section-products__button--diminuir"
                >
                  <i class="fa-solid fa-minus fa-beat"></i>
                </button>
                <span class="box">${produto.quantidade}</span>
                <button
                  class="app__section-products__button app__section-products__button--aumentar"
                >
                  <i class="fa-solid fa-plus fa-beat"></i>
                </button>
                <p class="categoria" hidden>${produto.categoria}</p>
              </div>
      </div>
      `;
  });
}

exibirNaTela();

exibirCarrinhoNaTela();
