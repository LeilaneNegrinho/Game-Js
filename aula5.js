// Crie um jogo de adivinhacao
// O jogo devera gerar um numero aleatorio de 1 a 10 e salva-lo em uma variavel
// O jogo devera mostrar um prompt (caixa com um input para o usuario inserir um valor) e salvar o valor inserido pelo usuario
// A cada input do usuario, o jogo devera verificar se este acertou ou nao o valor inserido,  
// caso tenha acertado, devera mostrar um alerta pro usuario uma mensagem indicando que este acertou e o numero de tentativas
// efetuadas. Caso o usuario tenha errado, devera mostrar um alerta com a mensagem de erro e a quantidade de tentativas e logo em 
// seguida outro prompt para que o usuario insira outro palpite
// o jogo acaba se o usuario clicar no botao cancelar do prompt ou se o usuario acertar o numero gerado



function startGame() {
  alert("Jogo iniciado!");

}

let numeroAleatorio = Math.floor(Math.random() * 10) + 1;
console.log('numeroAleatorio', numeroAleatorio);

let tentativas = 0;

while (true) {
let adivinhe = prompt("Adivinhe o número entre 1 e 10:");

if (adivinhe === null) {
    alert("O jogo foi cancelado.");
    break;
}

adivinhe = Number(adivinhe);    

if (isNaN(adivinhe) || adivinhe < 1 || adivinhe > 10) {
    alert("Por favor insira um número válido entre 1 e 10.");
    continue;

}
tentativas ++
 
if (adivinhe === numeroAleatorio)  {
    alert(`Parabéns, você acertou! Número de tentativas: ${tentativas}`);
    break;
  } else {
    alert(`Errado, tente novamente, você já fez: ${tentativas}`);
  }

}

  