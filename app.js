let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio()
let tentativas = 1

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() *numeroLimite + 1);
    let quantidadeDeElementos = listaDeNumerosSorteados.length

    if(quantidadeDeElementos == numeroLimite){
        listaDeNumerosSorteados = []
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio()
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}
exibirTextoNaTela('h1', 'Jogo do número secreto')
exibirTextoNaTela('p', `Escolha um número de 1 e ${numeroLimite}`)

function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!')
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa'
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'Número secreto é menor do que o chute')
        }
        else{
            exibirTextoNaTela('p', 'Número secreto é maior do que o chute')
        }
        tentativas++;
        limparCampo();
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', `Escolha um número de 1 e ${numeroLimite}`);
    document.getElementById('reiniciar').setAttribute('disabled', true);
}