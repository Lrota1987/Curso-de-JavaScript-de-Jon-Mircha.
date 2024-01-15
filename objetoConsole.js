/*
El objeto console es propio de JS. Tiene sus propios métodos
definidos. La consola de JS también permite mandar mensaje 
como errores o alertas:
*/

console.error("Esto es un error.");
console.warn("Esto es una alerta!");
console.info("Esto es una información");
console.log("Esto es un registro de lo que ha pasado.");

let nombre = "Luciano",
apellido = "Romero",
edad = 36;
//Todos estos métodos se pueden pasar cualquier parámetro separado por coma.

console.info(nombre, apellido, edad);
console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad} años.`);

//También se puede escribir como: (los parámetros deben de estar en orden)
console.warn(`Hola mi nombre es %s %s y tengo %d años`, nombre, apellido, edad);

//clear() limpia todo lo que haya estado en la consola:
console.clear();
/*
console.dir() muestra todos los parametros y métodos de los 
objetos. Esto es útil para el objeto document, que con un
console.log() muestra la estructura html, con .dir() muestra
la estructura interna del objeto. (Aquí no funciona debido
    a que no tenemos ningún elemento html).
*/

/*
console.group() agrupa los console.log que se escriban a
continuación. Sirve para representar los datos en la consola
de manera más ordenada.
*/
console.group("Los cursos de luciano");
console.log("Curso de JS");
console.log("Curso de node.js");
console.groupEnd();
/*
También se pueden hacer tablas con el objeto console para
representar en la consola. Esto se hace con console.table():
*/
//entries() devuelve un array con los params y metodos de un objeto.
console.table(Object.entries(console).sort());

const numeros = [1,2,3,4,5];
const vocales = ["a","e","i","o","u"];
//Para mostrar estos dos arreglos en una tabla:

console.table(numeros);
console.table(vocales);

console.clear();
/*
Console.time() te dice cuanto tarde en ejecutarse el código,
es especialmenmte útil para métodos asíncronos.
*/
console.time('Cuanto tiempo tarda mi código');
const arreglo = Array(1000000);
for (let i=0; i<arreglo.length;i++) {
    arreglo[i]=i;
}
//Las etiquetas de time y timeEnd, tienen que ser el MISMO.
console.timeEnd('Cuanto tiempo tarda mi código');

for (let i=0; i<100;i++) {
    console.count('codigo for');
    //Cuenta el número de veces que se ejecuta el código.

    console.log(i);
}
console.clear();
/*
Existen librerias para hacer testing, el objeto console tiene
un método llamado assert que es una librería para testing.
*/
let x= 3,
y=2,
pruebaXY = "Se espera que X sea menor que Y";

//Las variables se apasan en forma de objeto.
console.assert(x<y,{x,y,pruebaXY});
