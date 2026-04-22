function atualizarContador() {
  const dataInicio = new Date("2025-04-22T00:00:00"); // ajustar pra data de início do namoro
  const agora = new Date();

  const diff = agora - dataInicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diff / 1000 / 60) % 60);
  const segundos = Math.floor((diff / 1000) % 60);

  document.getElementById("contador").innerHTML = `
        <span>${dias} Dias</span> | 
        <span>${horas}h</span> : 
        <span>${minutos}m</span> : 
        <span>${segundos}s</span>
    `;
}

setInterval(atualizarContador, 1000);

//sistema de Cartas
function abrirCarta(id) {
  const mensagens = {
    1: "Mesmo longe, meu coração está sempre com você. Mal posso esperar pelo nosso próximo abraço!",
    2: "Lembre-se daquela vez que rimos tanto que perdemos o fôlego... Eu amo o seu sorriso!",
  };
  alert(mensagens[id]);
}
