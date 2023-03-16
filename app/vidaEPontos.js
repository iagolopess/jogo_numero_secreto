const vidas = document.getElementById("vidas");
const conteudoMain = document.getElementById("main-content");
const pontos = document.getElementById("pontos");
const elementoUltimaPontuacao = document.getElementById("ultima-pontuacao");
let numeroDeVidas = 7;
let pontuacao = 49;


pegaPontuacao();


function calculaVidaEPontos(numero){

    if(numero === numeroSecreto){
        if(pontuacao > parseInt(elementoUltimaPontuacao.textContent)){
            guardaPontuacao(pontuacao);
        }
    }else{
        numeroDeVidas -= 1;
        pontuacao -= 7;
    
        vidas.innerHTML = '<i class="fa-sharp fa-solid fa-heart"></i> '.repeat(numeroDeVidas);
        pontos.innerHTML = `${pontuacao}`;
    
        if(numeroDeVidas === 0){
            conteudoMain.innerHTML = `
            <h2>Você Errou !!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>
            
            <button id="jogar-novamente" class="btn-jogar">Jogar Novamente</button>
            `
            if(parseInt(elementoUltimaPontuacao.textContent) === 0){
                guardaPontuacao(0);
            }
        }
    
        if(pontuacao > parseInt(elementoUltimaPontuacao.textContent)){
            guardaPontuacao(pontuacao);
        }
    }

    
   
}


function guardaPontuacao(pontuacaoFinal){

    localStorage.setItem("melhorPontuacao", pontuacaoFinal);
}

function pegaPontuacao(){
    let melhorPontuacao = localStorage.getItem("melhorPontuacao");

    if(melhorPontuacao === '' || melhorPontuacao === null){
        elementoUltimaPontuacao.innerHTML = 0;
    } else{
        elementoUltimaPontuacao.innerHTML = melhorPontuacao;
    }
}
