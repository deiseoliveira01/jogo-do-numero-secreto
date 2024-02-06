let listaDeNumerosSoteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto){
let campo = document.querySelector(tag);
campo.innerHTML = texto;
responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10.');
}

exibirMensagemInicial();


function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
    exibirTextoNaTela('h1','Acertou!');
    let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = `Você descobriu o numero secreto com ${tentativa} ${palavraTentativa}!`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p','O numero secreto é menor.');
            }else{
            exibirTextoNaTela('p', 'O numero secreto é maior.');
        }
        tentativa++;
        limparCampo();
    } 
        

}

function gerarNumeroAleatorio() {
   let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); 
   let quantidadeDeElementosDaLista = listaDeNumerosSoteados.length;

   if(quantidadeDeElementosDaLista == numeroLimite){
        listaDeNumerosSoteados = [];
   }

   if(listaDeNumerosSoteados.includes(numeroEscolhido)){
    return gerarNumeroAleatorio();
   }else{
    listaDeNumerosSoteados.push(numeroEscolhido);
    console.log(listaDeNumerosSoteados);
    return numeroEscolhido;
   }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
    
} 

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)   
}


//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Jogo do numero secreto';

//let paragrafo = document.querySelector('p');
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10.';

//length exibe a quantidade de elementos da lista.
//push inclui um elemento no final da lista.