let button = document.getElementById("nav__button");
let nav = document.getElementById('nav__list');

button.addEventListener('click', showNav);

function showNav() {
    if (nav.classList.contains("show")){
        nav.classList.remove("show");
    }
    else {
        nav.classList.add("show");
    }
}
