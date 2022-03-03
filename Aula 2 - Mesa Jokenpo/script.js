//let escolhaJogador = prompt("Digite um número de 1 a 3)

/* function inicia(){
    var opcao=parseInt(prompt("Qual e a opcao  1 - Papel 2 - Pedra 3 - Tesoura"));
    var resposta=Math.floor((Math.random() * 3) + 1);
    var opcaoe = "";
    var verificador=true;

    if(resposta==1){
        opcaoe+="a resposta e papel";
    }
    else if(resposta==2){
        opcaoe+="a resposta e pedra";
    }
    else if(resposta==3){
        opcaoe+="a resposta e tesoura";
    }

    if(opcao===resposta){
        alert("a resposta e invalida"+opcaoe+".");
    }else if(opcao==1 && resposta==2){
        alert("a resposta e valida"+opcaoe+".");
        inicia();
    }else if(opcao==2 && resposta==1){
        alert("a resposta e invalida"+opcaoe+".");
    }else if(opcao==3 && resposta==1){
        alert("a resposta e valida"+opcaoe+".");
        inicia();
    }else if(opcao==3 && resposta==2){
        alert("a resposta e invalida"+opcaoe+".");
    }else if(opcao==2 && resposta==3){
        alert("a resposta e valida"+opcaoe+".");
        inicia();
    }else if(opcao==1 && resposta==3) */

let opcao = parseInt(
  window.prompt('Escolha uma opção: 1 - Papel\n2 - Pedra\n3 - Tesoura'),
)
if (opcao == 1 || opcao == 2 || opcao == 3) {
  var escolhaDoComputador = Math.floor(Math.random() * 3)
  alert('Você escolheu: ' + textoDaEscolha[opcao])
  alert('O computador escolheu: ' + textoDaEscolha[escolhaDoComputador])
  if (ehGanhador(opcao, escolhaDoComputador)) {
    pontuou()
    inicia()
    return
  }
  alert('Você perdeu! Sua pontuação atual é de: ' + pontos)
} else {
  alert('Você digitou uma opção invalida! \nVocê perdeu.')
}

function ehGanhador(opcao, escolhaDoComputador) {
  return quandoGanha[opcao] === escolhaDoComputador
}

function pontuou() {
  pontos++
}
