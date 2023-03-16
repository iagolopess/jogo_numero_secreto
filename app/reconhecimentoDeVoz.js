const elementoChute = document.getElementById("chute");
const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.lang = 'pt-br';
recognition.start();

recognition.addEventListener('result', onSpeak);

vidas.innerHTML = '<i class="fa-sharp fa-solid fa-heart"></i> '.repeat(numeroDeVidas);

function onSpeak(element){
    chute = fixNumeroVoz(element.results[0][0].transcript);
    exibeChuteNaTela(chute);
    
    verificaSeChutePossuiValorValido(chute);

}

function exibeChuteNaTela(chute){
    elementoChute.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `
}

recognition.addEventListener('end', () => {recognition.start()});

