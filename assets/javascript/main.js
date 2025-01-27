const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () =>  { 
    nav.classList.add("visible");
})

close.addEventListener("click", () => {
    nav.classList.remove("visible")
})

/*------------------------------> expand card <------------------*/

const toggles = document.querySelectorAll(".card_title_box");

toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active");
    })
})