// Typing Effect
const text = "Digital Marketing Executive & Content Creator.";
let index = 0;
const typingElement = document.querySelector(".typing");

function type() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 60);
  }
}

window.onload = type;
