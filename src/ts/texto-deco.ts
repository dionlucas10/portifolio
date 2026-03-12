document.addEventListener("DOMContentLoaded", () => {

  const text = "I Am A Computer Engineer Student.";
  const speed = 100;
  const delay = 1500;

  let i = 0;
  const typingElement = document.getElementById("typing");

  function typeEffect() {
    if (!typingElement) return;

    if (i < text.length) {
      typingElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeEffect, speed);
    } else {
      setTimeout(() => {
        typingElement.innerHTML = "";
        i = 0;
        typeEffect();
      }, delay);
    }
  }

  typeEffect();

});