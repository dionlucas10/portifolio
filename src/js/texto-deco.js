
const text = "I Am A Computer Engineer Student.";
const speed = 100;     // velocidade de digitação
const delay = 1500;   // tempo parado depois de completar (ms)

let i = 0;
const typingElement = document.getElementById("typing");

function typeEffect() {
  if (i < text.length) {
    typingElement.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, speed);
  } else {
    setTimeout(() => {
      typingElement.innerHTML = ""; // limpa o texto
      i = 0;
      typeEffect(); // recomeça
    }, delay);
  }
}

typeEffect();
