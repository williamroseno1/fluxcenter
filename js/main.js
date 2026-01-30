/* =========================
   Inicialização de Ícones
   ========================= */
document.addEventListener("DOMContentLoaded", () => {
    if (window.lucide) {
        lucide.createIcons();
    }
});

/* =========================
   Menu Mobile
   ========================= */
function toggleMenu() {
    const menu = document.getElementById("mobile-menu");
    const icon = document.getElementById("menu-icon");

    if (!menu) return;

    menu.classList.toggle("hidden");

    if (icon) {
        icon.setAttribute(
            "data-lucide",
            menu.classList.contains("hidden") ? "menu" : "x"
        );
        lucide.createIcons();
    }
}

/* =========================
   Efeito de Scroll na Navbar
   ========================= */
window.addEventListener("scroll", () => {
    const nav = document.getElementById("navbar");
    const logo = nav?.querySelector("img");

    if (!nav) return;

    if (window.scrollY > 50) {
        nav.classList.add("shadow-lg", "py-2", "scrolled");
        nav.classList.remove("py-4");

        if (logo) {
            logo.classList.add("h-8");
            logo.classList.remove("h-10", "md:h-12");
        }
    } else {
        nav.classList.remove("shadow-lg", "py-2", "scrolled");
        nav.classList.add("py-4");

        if (logo) {
            logo.classList.remove("h-8");
            logo.classList.add("h-10", "md:h-12");
        }
    }
});

/* =========================
   Fechar menu ao clicar em link (Mobile)
   ========================= */
document.querySelectorAll("#mobile-menu a").forEach(link => {
    link.addEventListener("click", () => {
        const menu = document.getElementById("mobile-menu");
        if (menu && !menu.classList.contains("hidden")) {
            toggleMenu();
        }
    });
});
