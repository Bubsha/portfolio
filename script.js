document.addEventListener("DOMContentLoaded", function () {
  // Define links
  const links = {
    linkedin: "https://www.linkedin.com/in/bubsha-p-484955240/",
    youtube: "https://www.youtube.com/@Kanyakumarislangcartoons",
    instagram: "https://www.instagram.com/_b_u_b_s__/",
    contact: "https://wa.link/508d36",
    resume: "Bubsha P resume 33 (1).pdf"
  };

  // Apply links dynamically
  document.getElementById("linkedin").href = links.linkedin;
  document.getElementById("youtube").href = links.youtube;
  document.getElementById("instagram").href = links.instagram;
  document.getElementById("contact").href = links.contact;
  document.getElementById("resume").href = links.resume;

  // Optional: log clicks
  const allLinks = document.querySelectorAll(".footer a");
  allLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      console.log(`Navigating to: ${link.href}`);
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const hireMeBtn = document.getElementById("hireMeBtn");
  const whatsappURL = "https://wa.link/508d36"; // Your WhatsApp short link

  hireMeBtn.addEventListener("click", function () {
    window.open(whatsappURL, "_blank");
  });
});
