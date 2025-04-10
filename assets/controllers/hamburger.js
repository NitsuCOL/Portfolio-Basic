const d = document;

const panelIsActive = d.querySelector(".list_nav_container");
const menu = d.querySelector('.hamburger');

export default function hamburgerMenu(btnHamburger, panel, menuLink) {
    menu.addEventListener("click", (e)=>{
        console.log("Hola mundo");
        
    })
}

hamburgerMenu(".hamburger", ".panel", ".menu_link");