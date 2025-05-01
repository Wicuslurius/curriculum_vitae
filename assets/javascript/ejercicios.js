alert('hola mundo desde el js de ejercicios');
/* --------------------------------------------------------------------------- */
/*Ejercicio 22 */
/*
En este ejercicio queremos invertir lo seleccionado por el patron
el patron nos dice de la cadena de caracteres si caracteres especialos 
despues de seleccionarlos inviertalos y muestreme el resultado para hacer el remplazo utilizamos 
el metodo replace al cual le pasamos parametros

el resultado mostrado es = Nombre: aranguren , Miguel 1994
*/
/*
let patron = /(\w+)\s(\w+)/;
let texto = "Nombre: Miguel aranguren 1994";
let nuevoTexto = texto.replace(patron, "$2 , $1")
document.getElementById("output").innerHTML = nuevoTexto;
*/
/* --------------------------------------------------------------------------- */
/*Ejercicio 21 */
/*
En este ejercicio tenemos un patron el cual = 
debe identificar un numero mayor o igual a 1 de caracteres no especiales(\w+)
seguidos de un espacio(\s) y despues de otros caracteres no especiales(\w+)

el resultado del patron es array [ "Miguel aranguren" , "Miguel" , "aranguren" ]
*/

/*let patron = /(\w+)\s(\w+)/;
let texto = "Nombre: Miguel aranguren 1994";
let resultado = texto.match(patron);
document.getElementById("output").innerHTML = resultado;
*/
/* --------------------------------------------------------------------------- */
/*Ejercicio 20 */
/*
En este ejercicio estamos disparando una funcion desde un boton 
esta funcion va a tomar el valor del elemento con id="texto"
depues indicamos el patron a buscar que nos dice = toma todos los numeros de la cadena de texto 
despues buscamos las coincidencias y como match nos regresa un array con las coincidencias lo guardamos en la variable numeros
luego usamos el metodo join para unir todos los valores del array el cual no tiene espacios ni caracteres especiales
por ultimo enviamos el valor al elemento con id = output
*/
/*function envia(){
  let codigoMatricula = document.getElementById("texto").value ;
  let numerosPatron = /\d+/g;
  let numeros = codigoMatricula.match(numerosPatron);
  let matriculaCorrecta = numeros.join("");
  document.getElementById("output").innerHTML = matriculaCorrecta;
}*/
/* --------------------------------------------------------------------------- */
/*Ejercicio 19 */
/*
En este ejercicio queremos extraer el numero dentro de la cadena de texto
El metodo match nos regresa un array , este ejercicio se parece al anterior solo 
que ahora agregamos un mensaje al extraer la cadena o si no extrae nada nos regresa un nuevo mensaje
y modificamos el patron para extraer mas de un numero agregando la letra ( g ) y el array toma los dos valores devueltos
*/
/*
function extraerCP(){
  let direccion = document.getElementById("texto").value ;
  let cpPatron = /\d{5}/g;
  let cp = direccion.match(cpPatron);

  if(!cp){
    document.getElementById("output").innerHTML = "El texto insertado no contiene un CP";
  }else{
    document.getElementById("output").innerHTML = `El CP es: ${cp}`;
  }
}*/

/* --------------------------------------------------------------------------- */
/*Ejercicio 18 */
/*
En este ejercicio queremos extraer el numero dentro de la cadena de texto
El metodo match nos regresa un array
*/
/*
let direccion = "Plaza del ayuntamiento , 08029 Barcelona";
let cpPatron = /\d{5}/;
let cp = direccion.match(cpPatron);
console.log(cp);
document.getElementById("output").innerHTML = `El CP es:  ${cp}`
*/
/* --------------------------------------------------------------------------- */
/*Ejercicio 0017 */
/*
  en este ejercicio hacemos una funcion que se dispara cada vez que damos click en un boton en el front end
  esta funcion nos ayuda a averiguar si la cadena de texto ingresada en el elemento input contiene numeros
  el regex dice:
  /..../ dentro de la exprecion
  \d     analice si tiene numeros
  +      mas de un numero

  y con una condicion ternaria avicemos en un elemento p 
*/
/*
function contieneNumeros(){
  let texto = document.getElementById("texto").value;
  let numeroPatron = /\d+/;
  let contieneNumeros = numeroPatron.test(texto);
  contieneNumeros ? document.getElementById("output").innerHTML = "El texto insertado contiene numeros" : 
    document.getElementById("output").innerHTML = "El texto insertado NO contiene numeros";
}

*/
/* --------------------------------------------------------------------------- */
/*Ejercicio 0016 */
/*
  En este ejercicio guardamos en la variable texto un dato string
  despues creamos un patron regex con el cual buscaremos una coincidencia en el texto en este caso nuestro regex
  indica la busqueda de una letra seguida de un numero o1 a4 , el resultado guardado en la ultima variable es un valor boleano

  /...../g = los slashes (/) delimitan la expresión regular, y la g al final significa "global", es decir, buscar 
    todas las coincidencias en el texto, no solo la primera.
  [aeiou]: esto es una clase de caracteres, que coincide con una sola vocal minúscula: a, e, i, o, o u.
  \d: representa un solo dígito numérico (0 al 9).

*/
/*
let texto = "ape5"
let patron = /[aeiou]\d/g;
let correspondeAPatron = patron.test(texto);

console.log(correspondeAPatron);
/*
/* --------------------------------------------------------------------------- */
/*Ejercicio 0015 */
/*
  en este ejercicio repetimos el cambiar el color de fondo y de la letra de un elemento tomado por su id
  pero lo hicimos creando una funcion que se reutiliza en 2 casos , al darle a un cuadro negro y uno blanco
  desde estos elementos agregamos un escuchador click y llamamos una funcion anonima que dispara nuestra funcion
  configuraFondo, esta funcion recibe 2 parametros y hace que nuestro codigo sea reutilizable despues hacemos lo mismo
  para  agregar la propiedad cursor en nuestros elementos , pero esta vez utilizando nuestro escuchador , el mouse encima
  de la caja y fuera de la caja agrega el valor a nuestro elemento
*/

/* 
function configuraFondo(colorFondo, colorTexto){
  document.getElementById("texto").style.backgroundColor = colorFondo;
  document.getElementById("texto").style.color = colorTexto;
}

document.getElementById("negro").addEventListener("click", function() {
  configuraFondo("black", "white");
});

document.getElementById("blanco").addEventListener("click", function() {
  configuraFondo("white", "black");
})

function configuraRaton(puntero){
  document.body.style.cursor = puntero;
}

document.getElementById("negro").addEventListener("mouseover", function() {
  configuraRaton("pointer");
});

document.getElementById("blanco").addEventListener("mouseover", function() {
  configuraRaton("pointer");
});

document.getElementById("negro").addEventListener("mouseout", function() {
  configuraRaton("auto");
});

document.getElementById("blanco").addEventListener("mouseout", function() {
  configuraRaton("auto");
});
*/

/* --------------------------------------------------------------------------- */
/*Ejercicio 0014 */
/* 
  En este ejercicio estamos agregando un escuchador de evento click con una funcion anonima que 
  al momento de se ejecutado el click en el elemento esperado se modificaran sus propiedades css
  como el color de fondo y el color de la letra
*/
/*
document.getElementById("negro").addEventListener("click", function() {
  document.getElementById("texto").style.backgroundColor = "black";
  document.getElementById("texto").style.color = "white";
});

document.getElementById("blanco").addEventListener("click", function() {
  document.getElementById("texto").style.backgroundColor = "white";/*
  document.getElementById("texto").style.color = "black";
})
*/
/* --------------------------------------------------------------------------- */
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
/* --------------------------------------------------------------------------- */
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