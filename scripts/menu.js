function scrollToAprentacao() {
    var section = document.querySelector('.app__section-banner-container');
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });
}
function scrollToProdutos() {
    var section = document.querySelector('.titulo-produtos');
    window.scrollTo({
        top: section.offsetTop - 50,
        behavior: 'smooth'
    });
}

function scrollToCarrinho() {
    var section = document.querySelector('.titulo-carrinho');
    window.scrollTo({
        top: section.offsetTop - 50,
        behavior: 'smooth'
    });
}