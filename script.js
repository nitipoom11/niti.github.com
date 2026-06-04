/* Reset */
{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Body */
body {
    font-family: 'Segoe UI', Tahoma, sans-serif;
    background: #f5f7fa;
    color: #333;
    line-height: 1.6;
}

/* Header */
header {
    background: linear-gradient(135deg, #0077ff, #00c6ff);
    color: white;
    text-align: center;
    padding: 80px 20px;
}

header h1 {
    font-size: 3rem;
    margin-bottom: 10px;
}

header p {
    font-size: 1.2rem;
}

/* Sections */
section {
    max-width: 1000px;
    margin: 30px auto;
    padding: 30px;
    background: white;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.08);
}

section h2 {
    color: #0077ff;
    margin-bottom: 20px;
    border-bottom: 3px solid #0077ff;
    display: inline-block;
    padding-bottom: 5px;
}

/* Projects */
.project {
    background: #f8f9fc;
    padding: 20px;
    border-left: 5px solid #0077ff;
    border-radius: 10px;
    margin-bottom: 20px;
    transition: 0.3s;
}

.project:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.project h3 {
    color: #222;
    margin-bottom: 10px;
}

/* Skills */
#skills ul {
    list-style: none;
}

#skills li {
    background: #0077ff;
    color: white;
    margin: 10px 0;
    padding: 12px 15px;
    border-radius: 8px;
    transition: 0.3s;
}

#skills li:hover {
    background: #005fcc;
    transform: translateX(5px);
}

/* Footer */
footer {
    text-align: center;
    background: #222;
    color: white;
    padding: 25px;
    margin-top: 40px;
}

footer a {
    color: #00c6ff;
    text-decoration: none;
}

footer a:hover {
    text-decoration: underline;
}

/* Animation */
.fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
}

.fade-in.show {
    opacity: 1;
    transform: translateY(0);
}

/* Responsive */
@media (max-width: 768px) {
    header h1 {
        font-size: 2rem;
    }

    section {
        margin: 20px;
        padding: 20px;
    }
}
// แสดงปีปัจจุบันใน Footer
document.getElementById("year").textContent =
    new Date().getFullYear();

// เอฟเฟกต์ Fade In ตอนเลื่อนหน้า
const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.2
});

sections.forEach(section => {
    section.classList.add("fade-in");
    observer.observe(section);
});

// ข้อความต้อนรับ
console.log("Welcome to THANACHAI Portfolio");
