// solicitar a opção do usuário
let contadorMaquina = 0
let contadorPessoa = 0
for (i = 0; i < 3; i++) {
  let usuario = parseInt(
    prompt('Escolha sua opção: Pedra(1), papel(2) ou tesoura(3)?'),
  )
  alert('Você escolheu ' + usuario)

  // definir a jogada da máquina

  //let maquina = Math.floor((Math.random() * 3) + 1);

  // parseInt() - retorna um int piso do valor de entrada
  let maquina = parseInt(Math.random() * 3 + 1)
  alert('Computador escolheu ' + maquina)
  switch (usuario) {
    case 1:
      if (maquina == 1) {
        alert('Empate')
      } else if (maquina == 2) {
        alert('Máquina venceu')
        contadorMaquina++
      } else if (maquina == 3) {
        alert('Você venceu')
        contadorPessoa++
      }
      break
    case 2:
      if (maquina == 1) {
        alert('Você venceu')
        contadorPessoa++
      } else if (maquina == 2) {
        alert('Empate')
      } else if (maquina == 3) {
        alert('Máquina venceu')
        contadorMaquina++
      }
      break
    case 3:
      if (maquina == 1) {
        alert('Máquina venceu')
        contadorMaquina++
      } else if (maquina == 2) {
        alert('Você venceu')
        contadorPessoa++
      } else if (maquina == 3) {
        alert('Empate')
      }
      break
    default:
      alert('Digite um número de 1 a 3')
  }
}
alert(
  'Você pontuou:' + contadorPessoa + ', A Máquina pontuou:' + contadorMaquina,
)

//criar variável para armazenar ganhador
//usar incremento para somar pontos
