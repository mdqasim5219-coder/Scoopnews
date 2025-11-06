// ===============================
// 📱 SCOOP NEWS — MAIN SCRIPT
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  // ====== 1️⃣ MOBILE MENU TOGGLE ======
  const menuBtn = document.getElementById("menuBtn");
  const navMenu = document.getElementById("navMenu");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      menuBtn.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  }

  // ====== 2️⃣ YEAR AUTO-UPDATE ======
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ====== 3️⃣ LANGUAGE SWITCH SYSTEM ======
  const langEn = document.getElementById("langEn");
  const langUr = document.getElementById("langUr");
  const translatableEls = document.querySelectorAll("[data-lang-en]");

  function setLang(lang) {
    translatableEls.forEach(el => {
      const text = el.getAttribute(`data-lang-${lang}`);
      if (text) el.innerText = text;
    });

    // Toggle button states
    if (langEn) langEn.classList.toggle("active", lang === "en");
    if (langUr) langUr.classList.toggle("active", lang === "ur");

    // Set document direction (RTL for Urdu)
    document.documentElement.dir = (lang === "ur") ? "rtl" : "ltr";
  }

  if (langEn) langEn.addEventListener("click", () => setLang("en"));
  if (langUr) langUr.addEventListener("click", () => setLang("ur"));

  // Default language
  setLang("en");

  // ====== 4️⃣ NEWS TICKER ANIMATION ======
  const tickerContainer = document.getElementById("tickerInner") || document.querySelector(".ticker-inner");
  if (tickerContainer) {
    let pos = 0;
    let lastTime = 0;

    function animateTicker(timestamp) {
      if (!lastTime) lastTime = timestamp;
      const delta = timestamp - lastTime;
      lastTime = timestamp;

      // Speed control (adjust 0.05 for slower/faster)
      pos += delta * 0.05;
      if (pos >= tickerContainer.scrollWidth / 2) pos = 0;

      tickerContainer.style.transform = `translateX(-${pos}px)`;
      requestAnimationFrame(animateTicker);
    }

    requestAnimationFrame(animateTicker);
  }

  // ====== 5️⃣ SMOOTH SCROLL TO TOP (OPTIONAL FEATURE) ======
  const scrollBtn = document.createElement("button");
  scrollBtn.innerHTML = "⬆";
  scrollBtn.className = "scroll-top-btn";
  document.body.appendChild(scrollBtn);

  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    scrollBtn.style.display = window.scrollY > 400 ? "block" : "none";
  });
});








