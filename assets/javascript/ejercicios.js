alert('hola mundo desde el js de ejercicios');

/*
Ejercicio 0013

en este ejercicio estamos agregando el addEventListener a un elemento html
capturamos el evento onclick y le pasamos la funcion que queremos accionar 
despues se dispara la funcion que agrega a un elemento html una leyenda con la fecha capturada en el input

function leeFormulario(){
  document.getElementById("output").innerHTML = `la fecha seleccionada es: ${document.getElementById("fecha").value}`;
}
document.getElementById("boton").addEventListener("click", leeFormulario);
*/

/*
Ejercicio 0012

en este ejer0cicio estamos calculando la fecha actual con la fecha a futuro que 
deseamos colocar , gracias a esto nuestra funcion calcula cuantos dias faltan para poder llegar a la fecha colocada
si ponemos una fecha anterior a la fecha actual mostrara un mensaje en pantalla para indicar que la fecha ya paso
*/
/*
let hoy = new Date();
function cuantosDias(){
  let fechaEvento = new Date(document.getElementById('fecha').value);
  console.log(fechaEvento);
  fechaEvento.setHours(0,0,0,0);
  document.getElementById('output').innerHTML = fechaEvento;

  const milSegEnUnDia = 1000 * 60 * 60 * 24; // los milisegundos en un dia
  hoy.setHours(0,0,0,0);
  const diferenciaHoras = Math.abs(fechaEvento.getTimezoneOffset() / 60) - Math.abs(hoy.getTimezoneOffset() / 60);
  hoy.setHours(hoy.getHours() - diferenciaHoras);

  if (fechaEvento > hoy) {
    document.getElementById('output').innerHTML = `Faltan ${(fechaEvento.getTime() - hoy.getTime()) / milSegEnUnDia} dias`;
  }else{
    document.getElementById('output').innerHTML = 'la fecha ya ha pasado'
  }
}

let anio = hoy.getFullYear();
let mes = hoy.getMonth()+1;
let dia = hoy.getDate();
let fechaActual = `${anio}-${mes}-${dia}`;

document.getElementById('fecha').value = fechaActual;
*/
/*----------------------------------------------------------------------------------------------------------*/
/*
Ejercicio 0011
  en esta funcion tenemos una constante que instancia una fecha
  y tenemos una funcion que pone el valor de el elemento con id fecha y guardamos 
  y ponemos en otro elemento output con un mensaje 
  para que se pinte el elemento input estamos guardando la fecha actual como fecha por defecto
*/

/*const hoy = new Date();

function leerFormulario() {
  document.getElementById('output').innerHTML = `la fecha seleccionada es: ${document.getElementById('fecha').value}`; 
}

const anio = hoy.getFullYear();
const mes = hoy.getMonth();
const dia = hoy.getDate();
const fechaActual = `${anio}-${mes}-${dia}`;
document.getElementById('fecha').value = fechaActual;*/


/*
//ejercicio 0010
//de esta manera leemos un evento javascript en html y disparamos la siguiente funcion la cual nos ayuda 
//para insertar en el elemento con id output la fecha ingresada en el input con id fecha
function leerFormulario() {
  document.getElementById('output').innerHTML = `la fecha seleccionada es: ${document.getElementById('fecha').value}`; 
}
  */
/*
//------------------------------------------------------------------------>
//ejercico 0009
// aca vemos el uso de una funcion anonima alojada en una variable suma
let suma = function (x,y){
  return x + y;
}

alert(suma(12, 4));
*/

//-------------------------------------------------------------------------->
/*
//ejercicio 0008
function cuantosDias(anio, mes, dia, nombreEvento){
  const hoy = new Date();
  const milsegEnUnDia = 1000 * 60 * 60 * 24; // milisegundos de un dia
  hoy.setHours(0,0,0,0);
  const fechaEvento = new Date(anio, mes - 1 , dia);
  const diferenciaHoras = Math.abs(fechaEvento.getTimezoneOffset() / 60) - Math.abs(hoy.getTimezoneOffset() / 60);
  hoy.setHours(hoy.getHours() - diferenciaHoras);

  if (fechaEvento > hoy) {
    return `Faltan ${(fechaEvento.getTime() - hoy.getTime()) / milsegEnUnDia} dias para ${nombreEvento}`;
  } else {
    return 'la fecha ya paso';
  }
}

document.getElementById('output').innerHTML = cuantosDias(2026, 12, 25, 'Navidad');
*/
//--------------------------------------------------------------->
/*
//ejercicio 0007
function queDia(nombre){
  const dia = new Date().getDay();
  const nombreDia =  ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  return `hola ${nombre} Feliz ${nombreDia[dia]}`;
}

document.getElementById('output').innerHTML = queDia('Alessandra');
*/
//--------------------------------------------------------------->
//ejercicio seis
/*const dia = new Date().getDay();

function esFinDeSemana() {
  return dia === 0 || dia === 6;
}

function queDia() {
  const nombreDia = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
  return nombreDia[dia];
}
//let valorSrc;
//if (esFinDeSemana() === true) valorSrc = './../assets/img/img_exercise/CaritaFeliz.png';
//else valorSrc = './../assets/img/img_exercise/CaritaTriste.png';
const valorSrc = esFinDeSemana() ? './../assets/img/img_exercise/CaritaFeliz.png' : './../assets/img/img_exercise/CaritaTriste.png';
const mensaje = esFinDeSemana() ?  "Diviertete" : "Venga, que ya falta poco";

document.getElementById('carita').src = valorSrc;
document.getElementById("output").innerHTML = mensaje;
document.getElementById("day").innerHTML = queDia();*/

//--------------------------------------------------------------->
//ejercicio cinco

/*const listaI = document.querySelectorAll('#numeros li')

const mensaje = `hay ${listaI.length} elementos en la lista ul "numeros"`;
document.getElementById('output').innerHTML = mensaje;

for (let i=0; i < listaI.length; i+=1) {
  listaI.item(i).value = i+1;
}*/
//--------------------------------------------------------------->
//ejercicio cuatro

/*const dia = new Date().getDay();
let mensaje;
if (dia === 0 || dia === 6)mensaje = "Buen fin de semana";
else mensaje = `Faltan ${6 - dia} dias para el fin de semana`;
//mensaje = `Faltan <strong>${6 - dia}</strong> dias para el fin de semana`
//const valorSrc = "./../assets/img/img_exercise/Carita" + dia + ".png";
const valorSrc = `./../assets/img/img_exercise/Carita${dia}.png`;
document.getElementById("carita").src = valorSrc;
document.getElementById("output").innerHTML = mensaje;*/

//----------------------------------------------------------------->
//ejercicio tres

/*const hora = new Date().getHour}s();
let mensaje;
let nombreEstilo;

if (hora < 13) {
  mensaje = 'buenos dias';
  nombreEstilo = 'maniana';
}else if (hora < 21){
  mensaje = 'buenas tardes';
  nombreEstilo = 'tarde';
}else if (hora < 23){
  mensaje = 'buenas noches';
  nombreEstilo = 'noche';
}else{
  mensaje = 'hola';
  nombreEstilo = 'madrugada'
}

document.getElementById('output').innerHTML = mensaje;
document.body.className = nombreEstilo;*/

//--------------------------------------------------------------------->
// ejercicio dos

/*const hora = new Date().getHours();
let mensaje;
if(hora < 13) mensaje = 'buenos dias';
else if (hora < 21) mensaje = 'buenas tardes';
else if (hora < 24) mensaje = 'buenas noches';
document.getElementById('output').innerHTML = mensaje;*/

//---------------------------------------------------------------------->
// ejercicio uno

/*const saludo = 'hola mundo';
document.getElementById('output').innerHTML = saludo;*/