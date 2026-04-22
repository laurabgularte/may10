function atualizarContador() {
  const dataInicio = new Date("2025-05-10T00:00:00");
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
    1: "Mesmo longe, meu coração está sempre com você. Mal posso esperar pelo nosso próximo abraço e próximo beijo!",
    2: "Lembra de todas as vezes que rimos tanto que perdemos o fôlego... Eu amo o seu sorriso!",
    3: "Quando você se sentir perdida, lembre-se de que eu estou aqui para te ajudar e conversar sempre meu amor.",
    4: "Você é forte e corajosa. Sempre estarei ao seu lado.",
    5: "Cada momento que passamos juntas é um presente. Eu amo você.",
  };
  alert(mensagens[id]);
}
