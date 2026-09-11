const links = [...document.querySelectorAll(".nav-link")];
const navs = [...document.querySelectorAll("nav")];

if ("serviceWorker" in navigator && window.location.protocol !== "file:") {
  window.addEventListener("load", () => navigator.serviceWorker.register("/service-worker.js"));
}

const headerSocials = document.querySelector(".site-header .social-links");
const siteFooter = document.querySelector("footer");
if (headerSocials && siteFooter && !siteFooter.querySelector(".footer-social-links")) {
  const footerSocials = headerSocials.cloneNode(true);
  footerSocials.classList.add("footer-social-links");
  footerSocials.setAttribute("aria-label", "Social profiles");
  siteFooter.appendChild(footerSocials);
}

function moveIndicator(nav, link) {
  const indicator = nav.querySelector(".nav-indicator");
  if (!indicator || !link) return;
  const navBox = nav.getBoundingClientRect();
  const linkBox = link.getBoundingClientRect();
  const center = linkBox.left - navBox.left + linkBox.width / 2 - indicator.offsetWidth / 2;
  nav.style.setProperty("--indicator-x", `${center}px`);
}

navs.forEach((nav) => {
  const navLinks = [...nav.querySelectorAll(".nav-link")];
  const activeLink = () => nav.querySelector(".nav-link.active") || navLinks[0];

  moveIndicator(nav, activeLink());

  navLinks.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      nav.classList.add("is-moving");
      moveIndicator(nav, link);
    });
  });

  nav.addEventListener("mouseleave", () => {
    nav.classList.remove("is-moving");
    moveIndicator(nav, activeLink());
  });

  window.addEventListener("resize", () => moveIndicator(nav, activeLink()));
});

const sectionLinks = links.filter((link) => link.getAttribute("href")?.startsWith("#"));
if (sectionLinks.length) {
  const sectionIds = new Set(sectionLinks.map((link) => link.getAttribute("href").slice(1)));
  const sections = [...document.querySelectorAll("main section[id]")].filter((section) => sectionIds.has(section.id));
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.find((entry) => entry.isIntersecting);
      if (!visible) return;
      sectionLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
      });
      navs.forEach((nav) => moveIndicator(nav, nav.querySelector(".nav-link.active")));
    },
    { rootMargin: "-35% 0px -55% 0px" },
  );
  sections.forEach((section) => observer.observe(section));
}
