const cards = document.querySelectorAll('.app__card-products, .app__card-products-combo');

// Itera sobre cada card
cards.forEach(card => {
  // Para cada card, seleciona os elementos específicos dentro do card
  const diminuirButton = card.querySelector('.app__section-products__button--diminuir');
  const aumentarButton = card.querySelector('.app__section-products__button--aumentar');
  const box = card.querySelector('.box');

  // Adiciona evento de clique para o botão de diminuir
  diminuirButton.addEventListener('click', () => {
    let quantidade = parseInt(box.textContent);
    if (quantidade > 0) {
      quantidade--;
      box.textContent = quantidade;
    }
  });

  // Adiciona evento de clique para o botão de aumentar
  aumentarButton.addEventListener('click', () => {
    let quantidade = parseInt(box.textContent);
    quantidade++;
    box.textContent = quantidade;
  });
});