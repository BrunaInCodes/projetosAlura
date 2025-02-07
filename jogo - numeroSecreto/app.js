//listas = colchetes[...]
//.length : visualizar os elementos na lista
//.length -1 : pega o ultiumo elemento da lista


let listaNumerosSorteados = [];
numeroLimite = 10; 
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}

function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}
exibirMensagemInicial();

function verificarChute() {// linha 27 do html, sempre usar o mesmo nome
    let chute = document.querySelector('input').value;
    
    if (chute ==  numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavratentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas =  `Você descobriu o número secreto com ${tentativas} ${palavratentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled'); // ta no html

    } else { 
       if(chute > numeroSecreto) {
          exibirTextoNaTela('p', 'O número secreto é menor');
    } else { 
        exibirTextoNaTela('p', 'O número secreto é maior');

        }
        //tentativas = tentativas + 1;
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);//gera um número aleatório INTEIRO
    let quantidadeDeElementosnaLista = listaNumerosSorteados.length;
    
    if(quantidadeDeElementosnaLista == numeroLimite) {
        listaNumerosSorteados = [];
    }
    
    if (listaNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio(); // recursao, a função vai chamar ela novamente
    } else {
        listaNumerosSorteados.push(numeroEscolhido); // adiciona alguma coisa na lisa: push
        console.log(listaNumerosSorteados); // checa o comportamento do código
        return numeroEscolhido;


    }

}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ''; //string vazia
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}
















