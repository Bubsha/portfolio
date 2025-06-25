const roles = [
  "Digital Marketing Specialist",
  "Content Creator",
  "YouTube Storyteller"
];
let i = 0, txt = '', isDeleting = false, speed = 100;
const typing = document.querySelector(".typing");

function typeWriter() {
  const role = roles[i % roles.length];
  if (isDeleting) {
    txt = role.substring(0, txt.length - 1);
  } else {
    txt = role.substring(0, txt.length + 1);
  }
  typing.innerHTML = txt;
  if (!isDeleting && txt === role) {
    isDeleting = true;
    speed = 2000;
  } else if (isDeleting && txt === '') {
    isDeleting = false;
    i++;
    speed = 500;
  } else {
    speed = isDeleting ? 50 : 100;
  }
  setTimeout(typeWriter, speed);
}

document.addEventListener("DOMContentLoaded", typeWriter);
