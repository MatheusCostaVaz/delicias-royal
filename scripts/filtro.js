const botaoCategoria = document.querySelectorAll(".superior__item");

botaoCategoria.forEach((botao) => {
  botao.addEventListener("click", () => {
    botaoCategoria.forEach((element) => {
      element.classList.remove("selected");
    });

    botao.classList.add("selected");

    filtrarPorCategoria(botao.getAttribute("name"));
  });
});

function filtrarPorCategoria(filtro) {
  const produtos = document.querySelectorAll(".app__card-products");
  for (let produto of produtos) {
    let categoria = produto
      .querySelector(".categoria")
      .textContent.toLowerCase();
    let valorFiltro = filtro.toLowerCase();

    if (!categoria.includes(valorFiltro) && valorFiltro != "tudo") {
      produto.style.display = "none";
    } else {
      produto.style.display = "flex";
    }

    if (filtro === "tudo") {
      produto.style.display = "flex";
    }
  }
}
