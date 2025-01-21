function esFinDeSemana() {
  const dia = new Date().getDate();
  if(dia === 0 || dia === 6)return true;
  else return false;
}
let valorSrc;
if (esFinDeSemana() === true) valorSrc = './../assets/img/img_exercise/CaritaFeliz.png';
else valorSrc = './../assets/img/img_exercise/CaritaTriste.png';

document.getElementById('carita').src = valorSrc;

//--------------------------------------------------------------->
//ejercicio cinco

/*alert('hola mundo desde el js de ejercicios');

const listaI = document.querySelectorAll('#numeros li')

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