// const html = document.querySelector('html');
// const focoBt = document.querySelector('.app__card-button--foco');
// const curtoBt = document.querySelector('.app__card-button--curto');
// const longoBt = document.querySelector('.app__card-button--longo');
// const banner = document.querySelector('.app__image');
// const titulo = document.querySelector('.app__title');
// const botoes = document.querySelectorAll('.app__card-button');
// const startPauseBt = document.querySelector('#start-pause');
// const musicaFocoInput = document.querySelector('#alternar-musica');
// const iniciarOuPausarBt = document.querySelector('#start-pause span')
// const iniciarOuPausarIcone = document.querySelector('.app__card-primary-butto-icon')
// const tempoNaTela = document.querySelector('#timer')

// const musica = new Audio('./sons/luna-rise-part-one.mp3');
// const somPausar = new Audio('./sons/pause.mp3');
// const somPlay = new Audio('./sons/play.wav');
// const audioTempoFinalizado = new Audio('./sons/beep.mp3')

// musica.loop = true;

// let intervaloId = null;
// let tempoDecorridoEmSegundos = 1500;

// musicaFocoInput.addEventListener('change', () => {
//     if(musica.paused){
//         musica.play();
//     }else{
//         musica.pause();
//     }
// });

// //O addEventListener é uma técnica fundamental para interatividade em páginas da web, 
// //permitindo que você responda dinamicamente a eventos do usuário e do navegador.
// focoBt.addEventListener('click', () => {
//     tempoDecorridoEmSegundos = 1500;
//     alterarContexto('foco');
//     focoBt.classList.add('active');
// });

// curtoBt.addEventListener('click', () => {
//     tempoDecorridoEmSegundos = 300;
//     alterarContexto('descanso-curto');
//     curtoBt.classList.add('active');
// });

// longoBt.addEventListener('click', () => {
//     tempoDecorridoEmSegundos = 900;
//     alterarContexto('descanso-longo');
//     longoBt.classList.add('active');
// });

// function alterarContexto(contexto){
//     mostrarTempo();
//     botoes.forEach(function (contexto){
//         contexto.classList.remove('active');
//     });
//     html.setAttribute('data-contexto', contexto);
//     banner.setAttribute('src', `./imagens/${contexto}.png`);
//     switch(contexto){
//         case "foco":
//             //
//             titulo.innerHTML = `
//             Otimize sua produtividade,<br>
//                 <strong class="app__title-strong">mergulhe no que importa.</strong>
//             `
//             break;
//         case "descanso-curto":
//             titulo.innerHTML =`
//             Que tal dar uma respirada?<br>
//                 <strong class="app__title-strong">Faça uma pausa curta!</strong>
//             `
//             break;
//         case "descanso-longo":
//             titulo.innerHTML =`
//             Hora de voltar à superfície.<br>
//                 <strong class="app__title-strong">Faça uma pausa longa.</strong>
//             `
//             break;
//         default:
//             break;
//     }
// }


// const contagemRegressiva = () =>{
//     if(tempoDecorridoEmSegundos <= 0){
//         // audioTempoFinalizado.play();        
//         alert('Tempo finalizado!');
//         zerar();
//         return;
//     }
//     tempoDecorridoEmSegundos -= 1;
//     mostrarTempo();
// }

// startPauseBt.addEventListener('click', iniciarOuPausar);

// function iniciarOuPausar(){
//     if(intervaloId){
//         somPausar.play();
//         zerar();
//         return;
//     }
//     somPlay.play();
//     intervaloId = setInterval(contagemRegressiva, 1000);
//     iniciarOuPausarBt.textContent = "Pausar";
//     iniciarOuPausarIcone.setAttribute('src', './imagens/pause.png')
// }

// function zerar(){
//     clearInterval(intervaloId);
//     iniciarOuPausarBt.textContent = "Começar";
//     iniciarOuPausarIcone.setAttribute('src','./imagens/play_arrow.png')
//     intervaloId = null;
// }

// function mostrarTempo(){
//     const tempo = new Date(tempoDecorridoEmSegundos * 1000);
//     const tempoFormatado = tempo.toLocaleString('pt-BR', {minute: '2-digit', second: '2-digit'});
//     tempoNaTela.innerHTML = `${tempoFormatado}`
// }

// mostrarTempo()