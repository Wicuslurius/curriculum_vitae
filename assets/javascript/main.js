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

const toggles = document.querySelectorAll(".exp-toggle");

toggles.forEach((toggle) => {
    toggle.addEventListener("click", () => {
        toggle.parentNode.classList.toggle("active");
    })
})

/*----------------------------------------------*/

document.getElementById("show_certificate").addEventListener("click", function() {
//--------------------------------------------------------------------
    let certificate = document.getElementById("certificate");
    // Guardar valores originales
    let certificate_originalWidth = certificate.style.width;
    let certificate_originalHeight = certificate.style.height;
    // Modificar los atributos CSS
    certificate.style.width = "700px";
    certificate.style.height = "400px";
//---------------------------------------------------------------------
    let box_card_cert = document.getElementById("box-card-cert");
    // Guardar valores originales
    let boxCardCert_originalFlexDirection = box_card_cert.style.flexDirection;
    // Modificar los atributos CSS
    box_card_cert.style.flexDirection= "column";
//---------------------------------------------------------------------
    let card_text = document.getElementById('card-text');
    let cardText_originalMarginBottom = card_text.style.marginBottom;

    card_text.style.marginBottom= '20px';

//---------------------------------------------------------------------
    let card_img  = document.getElementById("card-img");

    let cardImg_originalWidth = card_img.style.width;
    let cardImg_originalMargin = card_img.style.margin;

    card_img.style.width = '40%';
    card_img.style.margin = '0 auto';
//---------------------------------------------------------------------
    let icon_eye = document.getElementById('show_certificate');

    let iconEye_originalDisplay = icon_eye.style.display;

    icon_eye.style.display = 'none';
//---------------------------------------------------------------------
    // Crear el nuevo icono
    let restoreIcon = document.createElement("i");
    restoreIcon.className = "fa-solid fa-x";
    restoreIcon.style.cursor = "pointer";
    restoreIcon.style.marginLeft = "20px";
    restoreIcon.style.fontSize = '30px';
    restoreIcon.style.color = 'white'
    // Agregar el nuevo icono al DOM
    this.insertAdjacentElement("afterend", restoreIcon);

    // Evento para restaurar los valores originales y eliminar el icono de restauración
    restoreIcon.addEventListener("click", function() {
        certificate.style.width = certificate_originalWidth;
        certificate.style.height = certificate_originalHeight;

        box_card_cert.style.flexDirection = boxCardCert_originalFlexDirection;
        card_text.style.marginBottom = cardText_originalMarginBottom;
        card_img.style.width = cardImg_originalWidth;
        card_img.style.margin = cardImg_originalMargin;
        icon_eye.style.display = iconEye_originalDisplay;
        restoreIcon.remove();
    });
});