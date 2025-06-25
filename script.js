document.addEventListener("DOMContentLoaded", function () {
  const typingElement = document.querySelector(".typing");

  if (!typingElement) return;

  const roles = [
    "Digital Marketing Specialist",
    "Content Creator",
    "YouTube Storyteller"
  ];

  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
    const fullText = roles[roleIndex];

    if (isDeleting) {
      charIndex--;
    } else {
      charIndex++;
    }

    typingElement.textContent = fullText.substring(0, charIndex);

    let typingSpeed = 100;

    if (!isDeleting && charIndex === fullText.length) {
      typingSpeed = 1500;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
      typingSpeed = 500;
    }

    setTimeout(type, typingSpeed);
  }

  type();
});
