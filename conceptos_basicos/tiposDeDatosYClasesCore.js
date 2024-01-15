const libro = {
    titulo: "Don Quijote de la Mancha",
    autor: {
        nombre: "Miguel de Cervantes",
        edad: 68
    },
    numPaginas: 1424,
    editorial: "Yohoy libros",
    precio: "25.90",
    leer: () => console.log("He leido el libro")

}

//Aunque sea una constante las propiedades del objeto se pueden modificar.
libro.titulo = "Don Quijote de la Mancha Vol II";

libro.leer();

libro.autor.nombre;
//libro[autor][edad];

//metodo map: permite aplicar una función a un array y
//transformar sus elementos, devolviendo otro array con los
//elementos transformados:
let miArray = [2, 4, 6, 8];

let raices = miArray.map((item) => Math.sqrt(item));

console.log(raices);

//La funcion filter te permite filttrar entre los elementos de un array:
miArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let resultado = miArray.filter(item => item % 3 === 0);

console.log(resultado);