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

/*--------------------------------------------------------------------*/
            /*-------certification View----------*/

/*variables*/
const btnCierra = document.querySelector('#btn-cierra');
const btnAdelanta = document.querySelector('#btn-adelanta');
const btnRetrocede = document.querySelector('#btn-retrocede');
const imagenes = document.querySelectorAll('#galeria img');
const lightbox = document.querySelector('#principal-container');
const imagenActiva = document.querySelector('#img-activa');
let indiceImagen = 0;

/*abrir el lightbox*/

const abrelightbox = (event)=>{
    imagenActiva.src = event.target.src;
    lightbox.style.display = 'flex';
    indiceImagen = Array.from(imagenes).indexOf(event.target);
};

imagenes.forEach((imagen) => {
    imagen.addEventListener('click', abrelightbox);
});

/*cerrar el lightbox*/

btnCierra.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

/* Adelantar imagen */

const adelantarImagen =()=>{
    if (indiceImagen === imagenes.length -1){
        indiceImagen = -1;
    }
    imagenActiva.src = imagenes[indiceImagen + 1].src;
    indiceImagen++;
};

btnAdelanta.addEventListener('click', adelantarImagen);

/* Retroceder imagen*/

const retrocedeImagen=()=>{

    if(indiceImagen === 0){
       indiceImagen = imagenes.length;
    }
    
    imagenActiva.src = imagenes[indiceImagen -1].src;
    indiceImagen--;
};

btnRetrocede.addEventListener('click', retrocedeImagen);
/* Final de la vista certificacines */
/*---------------------------------------------------*/