
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Membuka dan menutup menu navigasi
menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Menutup menu setelah salah satu navigasi diklik
document.querySelectorAll(".nav-links a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
