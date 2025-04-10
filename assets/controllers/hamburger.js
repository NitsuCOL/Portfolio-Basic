const d = document;

const panelIsActive = d.querySelector(".list_nav_container");
const menu = d.querySelector('.hamburger');

export default function hamburgerMenu(btnHamburger, panel, menuLink) {
    menu.addEventListener("click", (e)=>{
        if (e.target.matches(btnHamburger) || e.target.matches(`${btnHamburger} *`)) {
            d.querySelector(panel).classList.toggle("is-active");
            d.querySelector(btnHamburger).classList.toggle("is-active");
        }
        if (e.target.matches(menuLink)) {
            d.querySelector(panel).classList.remove("is-active");
            d.querySelector(btnHamburger).classList.remove("is-active");
        }
    })
}

hamburgerMenu(".hamburger", ".panel", ".menu_link");