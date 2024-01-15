
/*
Las funciones se pueden pasar como argumentos o retornar
dentro de otras funciones. Para declarar una función:
*/
function funcion() {
    console.log("Uno");
};
/*
Una función es un bloque de lineas de codigo que ejecutan 
al unisono
*/
funcion();//Esto es una invocación de funcion.
/*
Una función es un bloque de código, autocontenido, que se puede 
definir una vez y ejecutar en cualquier momento. Opcionalmente,
una función puede aceptar parámetros y devolver un valor.

Las funciones en JavaScript son OBJETOS (un tipo especial).

Se dice que las funciones son ciudadanos de primera clase porque
pueden asignarse a un valor, y pueden pasarse como argumentos y
usarse como un valor de retorno.
*/
function funcion2() {
    return "Dos";
}

console.log(funcion2());
/*
Cuando una funcion dentro de su cuerpo encuentra return, en ese momento
ignora todas las lineas de código inferiores y devuelve el valor
de ese return
*/
function saludar(nombre = "desconocido", edad = 0) {
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`);
}
saludar("Luciano", 36);
saludar();
/*
Una funcion puede invocarse en cualquier parte del código,
incluso antes de que la función sea declarada. Al igual que 
las variables var, al declarar una función, JS lo eleva automáticamente.
También se pueden asignar dinámicamente funciones a una variable.
En las funciones expresadas no es necesario poner el nombre
de la función ya que su nombre es el dado a la propia variable. Estas
funciones sin nombres se conocen como funciones anónimas.
*/
const funcionExpresada = function () {
    console.log("Esto es una función expresada, es decir, una función que se ha asignado como valor a una variable, si invocamos esta función antes de su definición, JS nos dirá que no está inicializada, es decir, que te peines con peine de plata.");
}

funcionExpresada();

//ARROW FUNCTIONS:

//Se define así:

const saludar2 = (nombre) => console.log(`Hola ${nombre}`);

saludar2('Luciano');
/*
Cuabndo una función flecha recibe UN parámetro, no es necesario
poner los paréntesis.
*/

const saludar3 = nombre => console.log(`Hola ${nombre}`);
saludar3('Saulo');

/*
También nos podemos evitar escribir la palabra return, además,
con más de un parámetro de entrada, los paréntesis son 
obligatorios.
*/ 
const sumar = (a, b) => a+b;

console.log(sumar(3,5));

/*SI la función tiene varias lineas de código, las llaves
son necesarias*/
const funcionDeVariasLineas = () => {
    console.log("Uno");
    console.log("Dos");
    console.log("Tres");
}

funcionDeVariasLineas();


const numeros = [1,2,3,4,5];
numeros.forEach((el, index) => console.log(`El elemento ${el} está en la posición ${index}`) );
/*
Las Arrow Functions tienen la capacidad de capturar el objeto
this del contexto en el que se encuentren.
*/
const perro = {
    nombre:"Area",
    ladrar: () => console.log(this)
}
//El objeto this, no es del objeto referido, sino que hereda
//y reconoce el contexto en el que se encuentra el objeto (en
//este caso, perro).
perro.ladrar();
/*
Si declaramos una funcion que no sea arrow function, el objeto
this, hace referencia al propio objeto en el que está declarado:
*/
const dog = {
    nombre:"Area",
    ladrar: function() { console.log(this)}
}
console.log('-------------')
dog.ladrar();

const persona = {
    nombre:"Luciano",
    edad:36,
    contacto: {
        email:'lucianoromero@ucm.es',
        telefono:633791223,
        contactar: () => { console.log(this)}
    },
}
console.log('-------------')
persona.contacto.contactar();
/*
Incluso en este caso, no hereda los atributos del objeto
inmediatamente superior, sino que hereda los globales (objeto
Window).
*/

//FUNCIONES ANÓNIMAS AUTOEJECUTABLES
/*
Es una función en la que englobas todo el código que quieres
ejecutar. No solo la definimos, sino que las ejecutamos
justo en el momento de crearlas. Es una manera de que cuando 
tu archivo se carga en el navegador se ejecuta todo ese código
sin necesidad de llamar a librerias de terceros o propias.
El cuerpo de una FAAE, a diferencia de una función con nombre,
a la que tienes que ejecutar llamando su nombre con parentesis,
es necesario encapsularlo en un paréntesis:
*/


(function(c) {
    c.log("Mi primer IIFE");
})(console);

/*
(function(d, w, c) {
    */
    /*
    d, w, c serían equivalentes a document, window y console
    es una forma de abreviar. eSto no funciona en la consola
    del IDE, se tiene que ver en un documento html, por eso está
    comentado, para ver su funcionamiento ir al archivo
    alertConfirmPrompt.html
    */
   /*
    console.log("Mi segunda IIFE");
    console.log(d);
    console.log(w);
    c.log("Es un console.log")
})(document, window, console);*/

/* Hay 4 formas d escribir una funcion anónima autoejecutable
1- La version anteriormente descrita.

2-*/
(function () {
    console.log("Version Crockford");
}());
//3-
+function() {
    console.log("version Unaria");
}();
//4-
!function() {
    console.log("Version Facebook");
}();



