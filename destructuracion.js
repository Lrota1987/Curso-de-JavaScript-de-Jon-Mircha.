/*
Es una forma de asignar valores a arreglos o a objetos de una 
forma más agil.
*/

const numeros = [1,2,3,4,5,6,7,8,9,0];

//Sin usar destructuración:
let uno = numeros[0];
let dos = numeros[1];
let tres = numeros[2];

//Usando destructuración:
const [one, two, three, four, five, six] = numeros;

console.log(uno, dos, tres);
console.log(one, two, three, four);

//También es válido para objetos:
const persona = {
    nombre:"Luciano",
    apellido:"Romero",
    edad:36,
}

/*
Para que la destructuración funcione en los objetos es muy
importante que la variable que se crea se llame IGUAL a la
propiedad del objeto. El orden en el que se definan da igual.
*/
let {apellido, nombre, age/*Al llamarse diferente, no lo reconoce*/ } = persona;
console.log(nombre, apellido, age);