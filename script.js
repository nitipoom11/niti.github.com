/* =================================================
   SCROLL REVEAL
================================================= */
const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
        });
    },
    {
        threshold: 0.15
    }
);
revealElements.forEach((element) => {
    revealObserver.observe(element);
});
/* =================================================
   NAVBAR ACTIVE SECTION
================================================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");
window.addEventListener("scroll", () => {
    let current = "";
    sections.forEach((section) => {
        const sectionTop =
            section.offsetTop - 200;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.classList.add("active");
        }
    });
});
/* =================================================
   MOUSE PARALLAX
================================================= */
const moon = document.querySelector(".moon-area");
const nebula = document.querySelectorAll(".nebula");
document.addEventListener("mousemove", (event) => {
    const x =
        (event.clientX / window.innerWidth - 0.5);
    const y =
        (event.clientY / window.innerHeight - 0.5);
    if (moon) {
        moon.style.transform =
            `translate(${x * 12}px, ${y * 12}px)`;
    }
    nebula.forEach((item, index) => {
        const amount =
            (index + 1) * 8;
        item.style.marginLeft =
            `${x * amount}px`;
        item.style.marginTop =
            `${y * amount}px`;
    });
});
/* =================================================
   SMOOTH NAVIGATION
================================================= */
document.querySelectorAll('a[href^="#"]').forEach(
    (link) => {
        link.addEventListener("click", function (event) {
            const target =
                document.querySelector(
                    this.getAttribute("href")
                );
            if (target) {
                event.preventDefault();
                target.scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }
);
