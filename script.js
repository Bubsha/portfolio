const typingElement = document.querySelector(".typing");
const texts = ["Digital Marketer", "Content Creator", "Zoho Expert", "YouTube Storyteller"];
let idx = 0;
let charIdx = 0;
let currentText = '';
let isDeleting = false;

function type() {
  if (idx >= texts.length) idx = 0;
  currentText = texts[idx];

  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIdx--);
    if (charIdx < 0) {
      isDeleting = false;
      idx++;
    }
  } else {
    typingElement.textContent = currentText.substring(0, charIdx++);
    if (charIdx > currentText.length) {
      isDeleting = true;
      setTimeout(type, 800);
      return;
    }
  }
  setTimeout(type, isDeleting ? 60 : 120);
}

document.addEventListener("DOMContentLoaded", type);
