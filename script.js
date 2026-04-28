/**
 * May 10 Project - Main JavaScript File
 * Handles counter updates, modal interactions, and accessibility features
 */

/**
 * Update the relationship counter display
 * Shows days, hours, minutes, and seconds elapsed
 * @function atualizarContador
 */
function atualizarContador() {
  try {
    const dataInicio = new Date("2025-05-10T00:00:00");
    const agora = new Date();

    const diff = agora - dataInicio;

    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutos = Math.floor((diff / 1000 / 60) % 60);
    const segundos = Math.floor((diff / 1000) % 60);

    const contadorElement = document.getElementById("contador");
    if (contadorElement) {
      // Create spans with proper formatting
      const spans = contadorElement.querySelectorAll("span");
      if (spans.length >= 4) {
        spans[0].textContent = `${dias} Dias`;
        spans[1].textContent = `${horas}h`;
        spans[2].textContent = `${minutos}m`;
        spans[3].textContent = `${segundos}s`;
      }
    }
  } catch (error) {
    console.error("Erro ao atualizar contador:", error);
  }
}

/**
 * Messages for each letter
 * @type {Object.<number, string>}
 */
const MENSAGENS_CARTAS = {
  1: "Mesmo longe, meu coração está sempre com você. Mal posso esperar pelo nosso próximo abraço e próximo beijo!",
  2: "Lembra de todas as vezes que rimos tanto que perdemos o fôlego... Eu amo o seu sorriso!",
  3: "Quando você se sentir perdida, lembre-se de que eu estou aqui para te ajudar e conversar sempre meu amor.",
  4: "Você é forte e corajosa. Sempre estarei ao seu lado.",
  5: "Cada momento que passamos juntas é um presente. Eu amo você.",
};

/**
 * DOM Elements for modal management
 */
const modal = document.getElementById("cartaModal");
const conteudoCarta = document.getElementById("conteudoCarta");
const fecharModal = document.querySelector(".fechar-modal");

/**
 * Open letter modal and display message
 * @function abrirCarta
 * @param {number} id - Letter ID
 */
function abrirCarta(id) {
  try {
    if (MENSAGENS_CARTAS[id]) {
      conteudoCarta.innerHTML = `<p>${MENSAGENS_CARTAS[id]}</p>`;

      // Update modal accessibility attributes
      if (modal) {
        modal.setAttribute("aria-hidden", "false");
        modal.style.display = "flex";

        // Focus on close button for accessibility
        fecharModal?.focus();

        // Update button state
        const button = document.querySelector(`[data-carta="${id}"]`);
        if (button) {
          button.setAttribute("aria-expanded", "true");
        }
      }
    }
  } catch (error) {
    console.error("Erro ao abrir carta:", error);
  }
}

/**
 * Close letter modal
 * @function fecharCartaModal
 */
function fecharCartaModal() {
  try {
    if (modal) {
      modal.setAttribute("aria-hidden", "true");
      modal.style.display = "none";

      // Reset button states
      document.querySelectorAll(".card-btn").forEach((btn) => {
        btn.setAttribute("aria-expanded", "false");
      });
    }
  } catch (error) {
    console.error("Erro ao fechar carta:", error);
  }
}

/**
 * Handle keyboard events in modal
 * @function handleKeyPress
 * @param {KeyboardEvent} event
 */
function handleKeyPress(event) {
  // Close modal on Escape key
  if (
    event.key === "Escape" &&
    modal &&
    modal.getAttribute("aria-hidden") === "false"
  ) {
    fecharCartaModal();
  }
}

/**
 * Initialize counter on page load
 */
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    atualizarContador();
  });
} else {
  atualizarContador();
}

// Update counter every second
const counterInterval = setInterval(atualizarContador, 1000);

/**
 * Setup letter button click handlers
 */
document.querySelectorAll(".card-btn").forEach((botao) => {
  botao.addEventListener("click", () => {
    const id = botao.getAttribute("data-carta");
    if (id) {
      abrirCarta(parseInt(id));
    }
  });

  // Keyboard support (Enter/Space)
  botao.addEventListener("keypress", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      botao.click();
    }
  });
});

/**
 * Setup modal close button
 */
if (fecharModal) {
  fecharModal.addEventListener("click", fecharCartaModal);

  // Keyboard support for close button
  fecharModal.addEventListener("keypress", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      fecharCartaModal();
    }
  });
}

/**
 * Close modal when clicking outside content
 */
if (modal) {
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      fecharCartaModal();
    }
  });
}

/**
 * Global keyboard event handler
 */
document.addEventListener("keydown", handleKeyPress);

/**
 * Cleanup on page unload
 */
window.addEventListener("beforeunload", () => {
  clearInterval(counterInterval);
});
