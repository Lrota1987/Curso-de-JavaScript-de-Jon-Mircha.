
const c = Array.of("a","b","c",2);
console.log(c);

const d = Array(100).fill(false);
console.log(d);


/*
El método pop quita el último elemento de un array (y además se lo
puedes asignar a otra variable). Hay un método que nos permite
ejecutar una funcion por cada elemento que tenga un arreglo:
*/
const colores = ["rojo", "verde", "azul"];

colores.forEach(function(elemento, index) {
    console.log(elemento.toUpperCase(), index)
});

//Para recorrer arrays con for:

const luciano = {
    nombre:"Luciano",
    apellido:"Romero",
    edad:36,
}

for (const key in luciano) {
    console.log(`Key: ${key} Valor: ${luciano[key]}`);
}

const numeros=[23,2,4,55,12,9,12,];

//for of no vale para objeto, solo para arreglos y cadenas de texto.
for (item of numeros) {
    console.log(item);
}

let texto="Hola";
for (item of texto) {
    console.log(item);
}


