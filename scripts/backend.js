const containerProdutos = document.querySelector('.app__section-products-content')


const apic = fetch('http://localhost:3000/combo')
.then(res => res.json())
.then((combo) =>
    combo.forEach((inf) => {
        containerProdutos.innerHTML +=`
        <div class="app__card-products-combo">
                    <img  class="app__image-products" src="${inf.imagem}" alt="${inf.titulo}">
                    <div class="app__products-details">
                        <h3 class="app__title-products">
                            ${inf.titulo} <br>
                            <a class="app__descricao-combo">${inf.descricao}</a>
                            <br>
                            <strong class="app__title-products-strong">R$ ${inf.preco.toFixed(2)}</strong>
                        </h3>
                        <button class="app__section-products__button app__section-products__button--diminuir">
                            <i class="fa-solid fa-minus fa-beat"></i>
                        </button>
                        <span class="box">0</span>
                        <button class="app__section-products__button app__section-products__button--aumentar">
                            <i class="fa-solid fa-plus fa-beat"></i>
                        </button>
                    </div>                    
        </div>
        `
    })
)
.catch((error) => {
    containerVideos.innerHTML = `<p>Houve um erro ao carregar os produtos: ${error}</p>`
});

const apip = fetch('http://localhost:3000/produtos')
.then(res => res.json())
.then((produtos) =>
    produtos.forEach((inf) => {
        containerProdutos.innerHTML +=`
        <div class="app__card-products-combo">
                    <img  class="app__image-products" src="${inf.imagem}" alt="${inf.titulo}">
                    <div class="app__products-details">
                        <h3 class="app__title-products">
                            ${inf.titulo} <br>
                            <strong class="app__title-products-strong">R$ ${inf.preco.toFixed(2)}</strong>
                        </h3>
                        <button class="app__section-products__button app__section-products__button--diminuir">
                            <i class="fa-solid fa-minus fa-beat"></i>
                        </button>
                        <span class="box">0</span>
                        <button class="app__section-products__button app__section-products__button--aumentar">
                            <i class="fa-solid fa-plus fa-beat"></i>
                        </button>
                    </div>                    
        </div>
        `
    })
)
.catch((error) => {
    containerVideos.innerHTML = `<p>Houve um erro ao carregar os produtos: ${error}</p>`
});