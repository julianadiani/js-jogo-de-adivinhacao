let computerNumber;
let userNumbers = [];
let result = document.getElementById('textOutput');
let guess = document.getElementById('guesses');
let campoInput = document.getElementById('inputBox');
let tentativas = 0;
let tentativasCampo = document.getElementById('attempts');
let maxTentativas = 10;

//recarrega o jogo
function newGame() {
    window.location.reload();
}

//faz a conversão do numero aleatório de 0 a 100
function init() {
    computerNumber = Math.floor(Math.random() * 100 + 1);
    //console.log(computerNumber);
}

//insere o número do campo de input no array e escreve dentro do span de chutes
function compareNumbers() {
    const userNumber = Number(campoInput.value); //armazena o número inserido

    // Valida o número
    if (!validarInput(userNumber)) { 
        return;
    }

    // Insere o número no array de chutes, apenas se for válido
    userNumbers.push(' ' + userNumber);
    guess.innerHTML = userNumbers;

    //seta a quantidade de tentativas máxima para 10
    if (tentativas < maxTentativas) {
        //validação com as dicas do alcance do número
        if (userNumber > computerNumber) {
                result.innerHTML = 'Seu número é muito alto'; //escreve o resultado na tela
                result.style.color = 'red'; //muda a cor
                campoInput.value = ''; //zera o campo
        } else if (userNumber < computerNumber) {
                result.innerHTML = 'Seu número é muito baixo';
                result.style.color = 'red';
                campoInput.value = '';
        } else {
                result.innerHTML = 'Parabéns! Você acertou!';
                result.style.color = 'green';
                campoInput.setAttribute('Readonly', 'Readonly') //desativa o campo
        }

        tentativas++;  // Incrementa o contador de tentativas
        tentativasCampo.innerHTML = tentativas;  // Atualiza o contador de tentativas
    } else {
        //se der o máximo de 10 tentativas dá essa mensagem e imprime na tela o número aleatório
        result.innerHTML = "Você perdeu! O número do contador era " + computerNumber;
        campoInput.setAttribute('Readonly', 'Readonly')
    }
}

// Função para validar o número do usuário
function validarInput(value) {
    if (value === '') {
        result.innerHTML = 'Por favor, insira um número!';
        result.style.color = 'yellow';
        return false;
    }
    if (isNaN(value) || value < 1 || value > 100) {
        result.innerHTML = 'Por favor, insira um número válido entre 1 e 100!';
        result.style.color = 'yellow';
        return false;
    }
    return true;
}

// Registra o evento 'change' no campo de entrada
campoInput.addEventListener('change', compareNumbers);

// Inicializa o jogo
init();

//Reinicia o jogo ao clicar no botão chamando a função newGame
document.getElementById('newGameButton').addEventListener('click', newGame);

