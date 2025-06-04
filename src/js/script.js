document.getElementById("menu-btn").addEventListener("click", () => {
  document.getElementById("menu").classList.toggle("active");
});

const imagens = [
  "imagens/sensor.jpg",
  "imagens/mapa.png",
  "imagens/alerta.jpg",
];
let index = 0;
setInterval(() => {
  const slide = document.getElementById("slide");
  if (slide) {
    slide.src = imagens[index];
    index = (index + 1) % imagens.length;
  }
}, 3000);

document.addEventListener("DOMContentLoaded", () => {
  const perguntas = [
    { pergunta: "Enchentes são causadas apenas por chuvas?", resposta: "Não" },
    { pergunta: "Sensores IoT podem prevenir enchentes?", resposta: "Sim" },
    { pergunta: "Alertas precoces salvam vidas?", resposta: "Sim" },
    { pergunta: "O Brasil tem monitoramento total?", resposta: "Não" },
    { pergunta: "Google Maps pode mostrar áreas de risco?", resposta: "Sim" },
    { pergunta: "Satélites ajudam no monitoramento?", resposta: "Sim" },
    { pergunta: "IA pode prever enchentes?", resposta: "Sim" },
    { pergunta: "Toda cidade tem plano de evacuação?", resposta: "Não" },
    { pergunta: "LoRa é uma tecnologia de alerta?", resposta: "Sim" },
    { pergunta: "Bairros ricos sofrem mais com enchentes?", resposta: "Não" },
  ];

  const quizContainer = document.getElementById("quiz-container");
  perguntas.forEach((q, i) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <p>${i + 1}. ${q.pergunta}</p>
      <label><input type="radio" name="q${i}" value="Sim"> Sim</label>
      <label><input type="radio" name="q${i}" value="Não"> Não</label>
    `;
    quizContainer.appendChild(div);
  });

  document.getElementById("submit-quiz").addEventListener("click", () => {
    let acertos = 0;
    perguntas.forEach((q, i) => {
      const resposta = document.querySelector(`input[name="q${i}"]:checked`);
      if (resposta && resposta.value === q.resposta) acertos++;
    });
    document.getElementById(
      "quiz-result"
    ).textContent = `Você acertou ${acertos} de 10 perguntas.`;
  });

  const botoesTema = document.querySelectorAll(".theme-btn");
  botoesTema.forEach((botao) => {
    botao.addEventListener("click", () => {
      document.body.style.backgroundColor = botao.dataset.theme;
    });
  });
});
