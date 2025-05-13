//alert('hola mundo desde el js de ejercicios');

/* --------------------------------------------------------------------------- */
/*Ejercicio 36 */
/*
  por ultimo tenemos lacreacion de un objeto con un nuevo campo cubierta 
  y una funcion muestraCubierta, guardamos en la variable cubierta1 una etiqueta img inicializada
  luego le agregamos a su atributo src el valor correspondiente a la ruta de la imagen
  inicializamos nuestro objeto autor
  inicializamos nuestro objeto libro y le agregamos el objeto autor , la variable cubierta1
  por ultimo a nuestro objeto libro1 le llamamos el metodo muestraCubierta() despues de inincializado
  y este metodo nos pinta en el body el valor que venga en cubierta del objeto 
*/
/*No tiene html

*/
/*
function Libro(titulo, autor, anio, editor, cubierta){
  this.titulo = titulo;
  this.autor = autor;
  this.anio = anio;
  this.editor = editor;
  this.cubierta = cubierta;
  this.muestraCubierta = function(){
    document.body.appendChild(this.cubierta);
  }
};

function Autor(nombre, apellido){
  this.nombre = nombre;
  this.apellido = apellido;
};

let cubierta1 = new Image();
cubierta1.src = "./../assets/img/img_exercise/Cover_AnalisisDatosExcel.jpg";
let autor1 = new Autor("alessandra", "salvaggio");
let libro1 = new Libro("analisis de datos con excel", autor1, "2025", "LSWR", cubierta1);
libro1.muestraCubierta();
*/
/* --------------------------------------------------------------------------- */
/*Ejercicio 35 */
/*
No tiene html
  en este ejercicio creamos el objeto libro y el objeto Autor 
  con el cual nos podemos ayudar para tener un objeto dentro de un objeto y 
  poder tener toda la informacion
  al final podemos ver la ruta para hacer la consulta del nombre del objeto autor
*/
/*
function Libro(titulo, autor, anio, editor){
  this.titulo = titulo;
  this.autor = autor;
  this.anio = anio;
  this.editor = editor;
};

function Autor(nombre, apellido){
  this.nombre = nombre;
  this.apellido = apellido;
};
let autor1 = new Autor("alessandra", "salvaggio");
let libro1 = new Libro("analisis de datos con excel", autor1, "2025", "LSWR");
let libro2 = new Libro("Ruby on Rails", "Miguel", "2025", "LSWR");

console.log(libro1);
console.log(libro1.autor.nombre)
console.log(libro2);
*/
/* --------------------------------------------------------------------------- */
/*Ejercicio 34 */
/*
  No tiene html
  en este ejercicio tenemos la creacion de un objeto despues instanciamos este objeto
  le pasamos parametros y podemos verlo en pantalla 
  como podemos ver se instancia el objeto en una variable libro1 y cuando lo vemos
  en la consola cada valor tiene su llave con el nombre que colocamos despues de la 
  palabra reservada this
*/
/*
function Libro(titulo, autor, anio, editor){
  this.title = titulo;
  this.author = autor;
  this.year = anio;
  this.editor_man = editor;
};


let libro1 = new Libro("analisis de datos con excel", "alessandra", "2025", "LSWR");
let libro2 = new Libro("Ruby on Rails", "Miguel", "2025", "LSWR");

console.log(libro1);
console.log(libro2);
*/
/* --------------------------------------------------------------------------- */
/*Ejercicio 33 */
/*
  en este ejercicio podemos ver la aplicacion de una funcion para contar palabras en un texto
  en la constante palabras guardamos un texto que viene de nuestro text area 
    este texto lo tratamos con nuestro metodo split el cual divide el texto en un array de palabras
    usa una expresion regular para separar por espacios \s y signos de puntuacion como .,;:!?
    el + indica que se dividira por una o mas ocurrencias censecutivas de eses caracteres
    despues vemos el metodo filter el cual utiliza una nueva funcion con el array y elimina los elementos vacios del array
    el return !!palabra nos regresara un valor boleano 
        Por ejemplo:

        !!"hola" → true

        !!"" → false

        Entonces, filter solo mantiene los elementos que no son cadenas vacías ("").

    tenemos una constante recuento que es un hash;
    luego tenemos un bucle for en el cual vamos a iterar la cantidad de veces que nos de el conteo del array 
    luego en la constante palabra guarda la palabra en la pocicion de palabras[i] , y utiliza el condicional 
    para contar cuantas veces aparece la palabra y agregar un valor a la llave puesta 
    luego de recorrer el array con su comprovacion va a pintar la informacion en el output con un nuevo bucle 
    
*/
/*

function cuentaFrecuenciaPalabras(){
  const palabras = document.getElementById("texto").value.split(/[\s.,;:!?]+/).filter(function(palabra){return !!palabra;});

  const recuento = {};
  recuento["TOTAL"] = palabras.length;
  for(let i = 0; i < palabras.length; i += 1){
    const palabra = palabras[i];
    if (recuento[palabra]){
      recuento[palabra] += 1;
    }else{
      recuento[palabra] = 1;
    }
  }

  let clave = "";
  let textoAMostrar = "";
  for (clave in recuento) {
    textoAMostrar += (`${clave}: ${recuento[clave]}<br/>`);
  }

  document.getElementById('output').innerHTML = textoAMostrar;
}
*/
/* --------------------------------------------------------------------------- */
/*Ejercicio 32 */
/*
  en este ejercicio vemos el uso de el BOM el browser object model o como podemos verla 
  el window con el cual estamos estrayendo el idioma del navegador para presentar nuestra pagina
  y poder pintar en los output el mensaje correspondiente
*/
/*
let idiomas = {
  "es-Es": 'espaniol',
  "en-US": 'ingles americano',
  "en-UK": 'ingles britanico'
};
let idiomaNavegador = window.navigator.language;
let idioma = idiomas[idiomaNavegador] || 'desconocida';
document.getElementById('output').innerHTML = idiomaNavegador;
document.getElementById('output2').innerHTML = idioma;
*/
/* --------------------------------------------------------------------------- */
/*Ejercicio 31 */
/*
  Array asociativos
  en este ejemplo podemos ver una serie de llave valor el cual vamos a poder acceder 
  con un par de corchetes cuadrados colocando como valor la llave correspondiente
*/
/*
let idiomas = {
  "es-Es": 'espaniol',
  "en-US": 'ingles americano',
  "en-UK": 'ingles britanico'
};

let idioma = idiomas["en-US"];
document.getElementById("output2").innerHTML = `El idioma elegido es: ${idioma}`;
*/
/* --------------------------------------------------------------------------- */
/*Ejercicio 30 */
/*
  En este ejercicio estamos en un objeto el cual contiene una propiedad anioRef
  y tiene 3 metodos dentro los cuales calcularan si el anio es bisiesto y nos regresa un valor true o false
  tambien calcula cuando cae el dia de semana santa y pro ultimo nos dice en que dia de la semana cae navidad
  el valor de la fecha que sacamos al principio y poderla utilizar en nuestras funciones usamos la palabra this
  La palabra reservada this en JavaScript hace referencia al objeto desde el cual 
    se está ejecutando el código en ese momento. Su valor cambia dependiendo de dónde y cómo se usa.
*/
/*
let anio = {
  anioRef: (new Date).getFullYear(),
  bisiesto(){
    let anio = this.anioRef;
    if((anio % 400 == 0) || (anio % 4 == 0) && anio % 100 !=0){
      return true;
    }else{
      return false;
    }
  },
  semanaSanta(){
    let a;
    let b;
    let c;
    let anio = this.anioRef;
    let d;
    let e;
    let M;
    let N;
    let dia;
    let mes;

    if(anio < 2099){
      M = 24;
      N = 5;
    }else if(anio < 2199){
      M = 24;
      N = 6;
    }else if(anio < 2299){
      M = 25;
      N = 0;
    }else if(anio < 2399){
      M = 26;
      N = 1;
    }else if(anio < 2499){
      M = 25;
      N = 1;
    }
    a = anio % 19;
    b = anio % 4;
    c = anio % 7;
    d = ((19 * a) + M) % 30;
    e = ((2 * b) + (4 * c) + (6 * d) + N) % 7;

    if (d + e < 10){
      dia = d + e + 22;
      mes = 3;
    }else{
      dia = d + e - 9;
      mes = 4;
    }

    if(dia == 26 && mes == 4){
      dia = 19;
      mes = 4 ;
    }

    if(dia == 25 && mes == 4 && d == 28 && e == 6 && a > 10){
      dia = 18;
      mes = 4;
    }

    return new Date(anio, mes - 1, dia);
  },
  diaNavidad(){
    const nombreDia = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    let navidad = new Date(this.anioRef, 11, 25);
    return nombreDia[navidad.getDay()];
  }
}

document.getElementById('output').innerHTML = anio.semanaSanta();
document.getElementById('output2').innerHTML = anio.bisiesto();
document.getElementById('output3').innerHTML = anio.diaNavidad();
*/
/* --------------------------------------------------------------------------- */
/*Ejercicio 29 */
/*
  en este ejercicio podemos notar que tenemos una variable llamada objeto 
  la cual es un objeto literal dentro de este objeto vemos que tiene 2 propiedades (numero y color)
  y tenemos una funcion anonima dentro de la propiedad descripcion la cual nos regresa un texto 

  luego buscamos un elemento por su id , le insertamos en el html el contenido del objeto, 
    la instruccion JSON.stringify(objeto) convierte el objeto a texto pero no incluye funciones
    asi que la propiedad descripcion no se muestra

  en la otra line a buscamos un elemento por su id 2 , y le insertamos el resultado de nuestra
  funcion el cual es un texto 
*/
/*
let objeto = {
  numero: 123,
  color: "rojo",
  descripcion: function () {
    return 'soy un objeto rojo con el numero 123';
  }
};

document.getElementById('output').innerHTML = JSON.stringify(objeto);
document.getElementById('output2').innerHTML = objeto.descripcion();
*/
/* --------------------------------------------------------------------------- */
/*Ejercicio 28 */
/*
  en este ejercicio nuevamente tenemos un flag sticky en el patron o regex escrito con la y 
  la cual va a manejar un indice cuando encuentre una coincidencia y va a guardar la pocicion con last index
  luego va a ejecutarse mi bucle for para seguir buscando en la cadena
  cada vez que encuentre una coincidencia va a guardarse la ultima posicion con last index y seguira buscando
  
  una cifra(\d)
  un punto(\.)
  un espacio(\s)
  uno o mas caracteres alfabeticos([a-zA-Z]+)
  un espacio o el final de la cadeda(\s|$)
*/
/*
let texto = "1. manzana 2. pera 3. banana 4. naranja";
let patron = /\d\.\s[a-zA-Z]+(\s|$)/y;
let prueba = texto.match(patron);

for(let i = 0; i < 4 ; i++) {
  console.log(`prueba: ${prueba}`);
  console.log(`lastIndex: ${patron.lastIndex}`);
  prueba = texto.match(patron);
}
*/

/* --------------------------------------------------------------------------- */
/*Ejercicio 27 */
/*
  en este ejercicio vemos una cadena de texto con letras y numeros 
  despues tenemos un regex el cual nos va a buscar la coincidencia de un numero 
  con la flag sticky el cual se coloca como y al final del regex , luego le indicamos 
  al patron con el metodo lastIndex donde se encuentra esa coincidencia en nuestra cadena de caracteres
  luego activamos el regex con el metodo match y cuando encuentra la primera coincidencia 
  nos muestra en pantalla el resultado buscado en consola y tambien mostramos el siguiente indice de donde
  se encuentra la coincidencia
*/
/*

let cadena = "escribo 3 numeros 123";
let patron = /\d+/y;
patron.lastIndex = 8;
let prueba = cadena.match(patron);
console.log(`prueba: ${prueba}`);
console.log(`lastIndex: ${patron.lastIndex}`);

*/
/* --------------------------------------------------------------------------- */
/*Ejercicio 26 */
/*
  Tenemos una funcion para tomar las palabras de una cadena de texto 
  toma el texto de nuestro elemento html
  despues genera un array con las palabras cumpliendo un patron el cual le dice que si 
    encuentra caracteres especiales separe ahi las palabras
  creamos una variable textoAEscribir

  despues un condicional que comprueba si el array existe si no arroje un mensaje
  en el if vemos un bucle forEach que es el mismo for con el cual vamos a 
  pintar cada palabra en la pantalla , la varable textoAEscribir es un espacio en blanco,
    el indice nos dice que puesto ocupa el elemento en la lista mas uno y el elemento como tal es el valor de esa pocicion
  por ultimo insertamos una leyenda en el output indicando cuantas palabras existen en el array
*/
/*
function encuentraPalabras(){
  let texto = document.getElementById("texto").value ;
  let palabras = texto.split(/[\s\.,;:!?]+/);
  console.log(palabras);

  let textoAEscribir = "";
  if (palabras) {
    palabras.forEach(function(elemento, indice) {
      textoAEscribir = `${textoAEscribir} ${indice+1}: ${elemento.trim()}<br>`;
      console.log(textoAEscribir);
    })
    document.getElementById("output").innerHTML = `El texto insertado contiene ${palabras.length} palabras: <br> ${textoAEscribir}`;
  }else{
    document.getElementById("output").innerHTML = "El texto insertado no contiene ninguna palabra";
  }
}
*/
/* --------------------------------------------------------------------------- */
/*Ejercicio 25 */
/*
  en este ejercicio tenemos un patron regex el cual nos va a comprobar que si se encuentran 
  \s* = espacios en blanco
  [a-zA-Z]+ = luego mas de una letra seguida se a minuscula y mayuscula
  \s* = otro espacio en blanco

  con el metodo mach saca el patron que coincide en ur array
  lo contamos y lo imprimimos 
*/

//function encuentraPalabras() {
//  let texto = document.getElementById("texto").value ;
//  let patron = /\s*[a-zA-Z]+\s*/g ;
//  let palabras = texto.match(patron);
//  console.log(palabras);

//  let textoAEscribir = "";

//  if (palabras){
//    palabras.forEach(function(elemento, indice) {
//      textoAEscribir = `${textoAEscribir} ${indice+1}: ${elemento.trim()}<br> `;
//      console.log(textoAEscribir);
//    })
//    document.getElementById("output").innerHTML = `El texto insertado contiene ${palabras.length} palabras: <br> ${textoAEscribir}`
//  }else{
//    document.getElementById("output").innerHTML = "El texto insertado no contiene ninguna palabra";
//  }
//}


/* --------------------------------------------------------------------------- */
/*Ejercicio 24 */
/*
  en este ejercicio asignamos un mensaje a un elemento en html , este mensaje tiene
  caracteres especiales ,con la primera funcion queremos remplazar los caracteres especiales con comillas osea nada
  gracias a un patron regex y nuestro metodo replace, y tenemos un segundo metodo ,que borra los textos
  de las dos cajas
*/
/*
let texto = "pero, porque? $ veo todas estas letras%% raras+?";
document.getElementById("texto1").value = texto;
function eliminaCaracteresEspeciales(){
  texto = document.getElementById("texto1").value;
  let patron = /[!@#$%^?+]/g;
  let textoSinEspacios = texto.replace(patron, "");
  document.getElementById("texto2").value = textoSinEspacios;
}
function borrarTodo() {
  document.getElementById("texto2").value = "";
  document.getElementById("texto1").value = "";
}
*/
/* --------------------------------------------------------------------------- */
/*Ejercicio 23 */
/*
  Este codigo js nos indica la inicializaion de una variable texto 
  despues asignamos el valor de esa variable a un elemento html en su atributo value

  Tenemos 2 funciones que se disparan al momento de dar click en su respectivo boton
  la funcion eliminaEspacios
    guarda en una variable texto el valor de nuestro elemento html con id texto1
    luego declaramos un patron /\s+/g; 
            /.../ → Delimita la expresión regular.
            \s → Significa "cualquier espacio en blanco", incluyendo:
            Espacio
            Tabulación (\t)
            Nueva línea (\n)
            + → Significa "uno o más" del carácter anterior. O sea, uno o más espacios en blanco seguidos.
            g → Es una bandera que significa "global", lo que hace que busque todas las coincidencias en el texto, no solo la primera.
            
            /\s{2,}/g explicada de forma simple:
            \s → representa un espacio en blanco (espacio, tabulación, salto de línea, etc.).
            {2,} → significa dos o más repeticiones del carácter anterior (en este caso, espacios en blanco).
            g → bandera global, busca todas las coincidencias en el texto, no solo la primera.

            /^\s+|\s+$/ explicada de forma simple:
            ^ → indica el inicio de la cadena.
            \s+ → significa uno o más espacios en blanco.
            | → es el operador "o", separa dos condiciones.
            \s+$ → significa uno o más espacios en blanco al final de la cadena ($ indica el final). 
    
    por ultimo tenemos una funcion la cual le agrega a los 2 elementos con id texto1 y texto2 en su atributo
    value el valor de una cadena vacia
*/
/*
let texto = "Lorem ec h soh saoh sa hs has hoa hno hneuhen hao honn hsoauh sho asnoh nohno hsn os hoas h";
document.getElementById("texto1").value = texto ;

function eliminaEspacios() {
  texto = document.getElementById("texto1").value;
  //1//let patron = /\s{2,}/g;
  //2//let patron = /^\s+|\s+$/;
  let patron = /\s+/g;
  let textoSinEspacios = texto.replace(patron, "");
  document.getElementById("texto2").value = textoSinEspacios;
}
function borraTodo(){
  document.getElementById("texto2").value = "";
  document.getElementById("texto1").value = "";
}
  */
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