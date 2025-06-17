// Typing Animation
const text = "Digital Marketing Specialist & Content Creator.";
let index = 0;
function type() {
    document.getElementById("typing").textContent = text.slice(0, index++);
    if (index <= text.length) {
        setTimeout(type, 80);
    }
}
type();

// Hire Me Button Click Action
document.getElementById("hireBtn").addEventListener("click", () => {
    alert("📞 Call me at +91 9994473997");
});

