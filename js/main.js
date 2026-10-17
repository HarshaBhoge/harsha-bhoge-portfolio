/* ==========================================================
   Portfolio scripts
   1. Project data (edit the P array to add your projects)
   2. Filter chips + search
   3. Contact form (opens the visitor's email app)
   ========================================================== */
/* ==========================================================
   Portfolio scripts
   1. Project data (edit the P array to add your projects)
   2. Filter chips + search
   3. Contact form (opens the visitor's email app)
   ========================================================== */

/* ---------- 1. PROJECTS ----------
   t    title
   c    category (becomes a filter chip automatically)
   d    short description
   g    card gradient "color1,color2" (shown if there is no image)
   k    tech tags
   img  (optional) screenshot path, e.g. "assets/images/project1.jpg"
   gh   (optional) GitHub link
   live (optional) live demo link
   Links/images left empty are simply not shown. */
const P = [
  {
    t: "AI-Powered Code Review Assistant",
    c: "AI / Cybersecurity",
    d: "An AI-powered web application that analyzes source code for selected security vulnerabilities and uses generative AI to explain findings, indicate severity, and suggest remediation. Built to explore the intersection of software development, AI, and cybersecurity.",
    g: "#a8566a,#e3a9b1",
    img: "assets/images/CodeGuardAI.jpeg",
    gh: "",
    live: "https://drive.google.com/file/d/1RXaYD3crydDMl_MWC89ROpMhcPJK0DRi/view?usp=drive_link",
    k: ["Gemini API", "Monaco Editor", "Security Analysis"]
  },
 {
  t: "Code & Coffee",
  c: "Web Development",
  d: "A Java-based café web application featuring user registration, login, menu browsing, and order-related functionality. Built with JSP, Servlets, JDBC, and MySQL, it demonstrates server-side development, database integration, and essential web application functionality.",
  g: "#8b6652,#e2bda0",
  img: "assets/images/Code-Coffee.png",
  gh: "https://github.com/HarshaBhoge/Code-and-Coffee",
  live: "",
  k: ["Java", "JSP / Servlets", "JDBC", "MySQL"]
},
{
  t: "HB MediCare",
  c: "Desktop Application",
  d: "A Java Swing-based hospital management system designed to organize patient information and essential hospital operations. It includes patient record management, patient discharge, and room status features, using MySQL for data storage and retrieval.",
  g: "#3f4a5a,#8fa3b8",
  img: "assets/images/HBMedicareLogin.png",
  gh: "https://github.com/HarshaBhoge/HB-MediCare",
  live: "",
  k: ["Java", "Java Swing", "MySQL"]
}

  //  To add a project: put a comma after the block above, then paste a new block here.
  , 
{
  t: "Simple Banking System",
  c: "Java Development",
  d: "A Java application that simulates basic banking operations, including account management, deposits, withdrawals, and balance inquiries. It demonstrates object-oriented programming, transaction logic, and fundamental financial operation handling.",
  g: "#397b70,#9bc9b7",
  img: "assets/images/Bank.png",
  gh: "https://github.com/HarshaBhoge/Simple_Banking_System-in-java",
  live: "",
  k: ["Java", "OOP", "Exception Handling"]
}


];

/* ---------- 2. FILTER + SEARCH ---------- */
const cats = ["All", ...new Set(P.map(p => p.c))];
let cur = "All";
const chips = document.getElementById("chips");
const grid = document.getElementById("grid");
const q = document.getElementById("q");

function cardHTML(p) {
  const links = [
    p.gh ? `<a class="link" href="${p.gh}" target="_blank" rel="noopener">GitHub →</a>` : "",
    p.live ? `<a class="link" href="${p.live}" target="_blank" rel="noopener">Live Demo →</a>` : ""
  ].join("");

  return `
    <article class="card">
      <div class="th" style="background:linear-gradient(135deg,${p.g})">
        ${p.img ? `<img src="${p.img}" alt="${p.t} screenshot">` : ""}
        <span class="bd">${p.c}</span>
      </div>
      <div class="cb">
        <h3>${p.t}</h3>
        <p>${p.d}</p>
        <div class="tg">${p.k.map(x => `<span>${x}</span>`).join("")}</div>
        ${links ? `<div class="links">${links}</div>` : ""}
      </div>
    </article>`;
}

function draw() {
  chips.innerHTML = cats
    .map(c => `<button class="chip ${c === cur ? "on" : ""}" data-c="${c}">${c}</button>`)
    .join("");

  const term = q.value.toLowerCase();
  const list = P.filter(p =>
    (cur === "All" || p.c === cur) &&
    (p.t + p.d + p.k.join(" ")).toLowerCase().includes(term)
  );

  grid.innerHTML = list.length ? list.map(cardHTML).join("") : '<p class="sub">No projects found.</p>';
}

chips.onclick = e => {
  if (e.target.dataset.c) { cur = e.target.dataset.c; draw(); }
};
q.oninput = draw;
draw();

/* ---------- 3. CONTACT FORM (opens Gmail compose with the message filled in) ---------- */
const CONTACT_EMAIL = "harshabhoge04@gmail.com";

const form = document.getElementById("f");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();

    const name = document.getElementById("n").value.trim();
    const email = document.getElementById("e").value.trim();
    const subject = document.getElementById("s").value.trim();
    const message = document.getElementById("m").value.trim();
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;

    const gmail =
      "https://mail.google.com/mail/?view=cm&fs=1" +
      `&to=${encodeURIComponent(CONTACT_EMAIL)}` +
      `&su=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    const win = window.open(gmail, "_blank", "noopener");
    if (!win) {
      // popup blocked: fall back to the normal email app
      location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    }
    form.reset();
  });
}
