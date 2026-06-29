const sections = [...document.querySelectorAll("main section[id]")];
const links = [...document.querySelectorAll(".nav-link")];
const navs = [...document.querySelectorAll("nav")];

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

const observer = new IntersectionObserver(
  (entries) => {
    const visible = entries.find((entry) => entry.isIntersecting);
    if (!visible) return;
    links.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`);
    });
    navs.forEach((nav) => moveIndicator(nav, nav.querySelector(".nav-link.active")));
  },
  { rootMargin: "-35% 0px -55% 0px" },
);

sections.forEach((section) => observer.observe(section));
