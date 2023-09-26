document.addEventListener("DOMContentLoaded", () => {
  const elems = document.querySelectorAll(".sidenav");
  const instances = M.Sidenav.init(elems);
});

const navMenu = document.querySelectorAll(".menu");
const sidenavMenu = document.querySelectorAll(".sidenav-menu");

let activeIndex = 0;

for (let i = 0; i < navMenu.length; i++) {
  navMenu[i].addEventListener("click", () => {
    navMenu[activeIndex].classList.remove("active");
    sidenavMenu[activeIndex].classList.remove("active");

    activeIndex = i;

    navMenu[i].classList.add("active");
    sidenavMenu[i].classList.add("active");
  });

  sidenavMenu[i].addEventListener("click", () => {
    navMenu[activeIndex].classList.remove("active");
    sidenavMenu[activeIndex].classList.remove("active");

    activeIndex = i;

    sidenavMenu[i].classList.add("active");
    navMenu[i].classList.add("active");
  });
}
