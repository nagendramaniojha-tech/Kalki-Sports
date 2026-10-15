// IMPORTANT: Replace this with your WhatsApp number in international format, digits only.
// Example for India: 919876543210 (do not include +, spaces, or dashes).
const WHATSAPP_NUMBER = "917355586027";
const INSTAGRAM_URL = “https://www.instagram.com/https://www.instagram.com/kalkisportsofficial?dlrf=MWQ0YTNlb3Brd3l0cw==/”;

function openWhatsApp(product = "Kalki Sports products") {
  if (!/^\d{10,15}$/.test(WHATSAPP_NUMBER)) {
    alert("Website setup needed: add your WhatsApp number in script.js first.");
    return;
  }
  const message = `Hello Kalki Sports Kanpur! I want to enquire about: ${product}. Please share price, availability and delivery details.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
}

document.querySelectorAll(".order-button").forEach(button => {
  button.addEventListener("click", () => openWhatsApp(button.dataset.product));
});
document.getElementById("mainWhatsApp").addEventListener("click", event => {
  event.preventDefault();
  openWhatsApp();
});
document.querySelectorAll(".filter").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const filter = button.dataset.filter;
    document.querySelectorAll(".product-card").forEach(card => {
      card.hidden = filter !== "all" && card.dataset.category !== filter;
    });
  });
});
const toggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => nav.classList.remove("open")));
document.getElementById("year").textContent = new Date().getFullYear();
