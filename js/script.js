// botões
const iniciar = document.querySelector("[data-iniciar]");
const pausar = document.querySelector("[data-pausar]");
const parar = document.querySelector("[data-parar]");

iniciar.addEventListener("click", iniciarTempo);
pausar.addEventListener("click", pausarTempo);
parar.addEventListener("click", pararTempo);

// espaços para os números
const hora = document.querySelector("[data-hora]");
const minuto = document.querySelector("[data-minuto]");
const segundo = document.querySelector("[data-segundo]");

//iniciando os contadores
let segundos = 0;
let minutos = 0;
let horas = 0;

// iniciando a variável que vai guardar o setInterval()
let timer;

function iniciarTempo() {
  timer = setInterval(() => {
    segundo.innerText = segundos++;

    // verifica se segundos atingiu o valor de 60
    //e acrescenta 1 ao minuto
    if (segundos === 60) {
      segundos = 0;
      segundo.innerText = segundos;
      minuto.innerText = ++minutos;
    } else if (minutos === 60) {
      //verifica se minutos atingiu o valor de 60
      // e acrescenta 1 a horas
      minutos = 0;
      minuto.innerText = minutos;
      hora.innerText = ++horas;
    }
  }, 1000);

  iniciar.setAttribute('disabled', ''); // desabilita o botão iniciar
}

function pausarTempo() {
  clearInterval(timer); // para o setInterval()
  iniciar.removeAttribute('disabled', ''); // habilita botão iniciar

}

function pararTempo() {
  clearInterval(timer); // para o setInterval()
  iniciar.removeAttribute('disabled', ''); // habilita botão iniciar
  horas = 0;
  minutos = 0;
  segundos = 0;

  segundo.innerText = segundos;
  minuto.innerText = minutos;
  hora.innerText = horas;
}
