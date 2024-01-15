/*
Los parámetros REST son una forma de ir agregando parámetros infinitos
a una función o dentro de una variable (por ejemplo, un arreglo
en el que no sabes cuantos valores vas a recibir). Se definen:
*/

function sumar(a,b,...c) {
    let resultado = a + b;
    c.forEach(function (n) { //c funciona como un arreglo.
        resultado += n;
    });

    return resultado;
}

console.log(sumar(3,4));
console.log("------------------");
console.log(sumar(3,4,3));
console.log("------------------");
console.log(sumar(3,4,3,5));

/*
El Spread operator u operador de propagación, nos permite expandir 
una expresión en situaciones donde tengamos que almacenar multiples
elementos. Por ejemplo, un arreglo con un cierto número de elementos,
pero en cierto momento recibes nuevos elementos, en vez de hacer
push o concatenaciones al arreglo, puedes agregarle con el spread aperator.
También usa los tres puntos suspensivos. Los parámetros REST son para
las funciones y los Spread operators se pueden ejecutar en cualquier
sentencia del código.
*/

const arr1 = [1,2,3,4,5];
const arr2 = [5,6,7,8,9,0];

//Para crear otro arreglo a partir de los dos anteriores:
let arr3 = [arr1, arr2];

console.log(arr3);
//Esto crea un arreglo de 2 posiciones, para ello:
arr3 = [...arr1, ...arr2];

console.log(arr3);

