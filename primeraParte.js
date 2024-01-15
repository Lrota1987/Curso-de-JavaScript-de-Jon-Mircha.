function saludar(nombre = "No se ha definido el parámetro")  {
    return `Hola ${nombre}!`
};

console.log(saludar());


//Clases de JS. Con funciones:
//La siguiente funcion define la clase con sus atributos:
/*
function Inventario(nombre) {
    this.nombre = nombre;
    this.articulos = [];

}
//Para definir las funciones de la clase se una prototype:
//Esta funcion devuelve el nombre de la clase.
Inventario.prototype.getNombre = function() {
    return this.nombre;
};
//Esta función es para añadir articulos al inventario:
Inventario.prototype.add = function(articulo, cantidad) {
    this.articulos[articulo] = cantidad;
}

Inventario.prototype.cantidad = function(articulo) {
    return this.articulos[articulo];
}

//Creamos una clase Inventario para libros (por ejemplo):
let libros = new Inventario('libros');
libros.getNombre;//Devuelve libros, que es el nombre asignado en su creación (al usarse la palabra new)
//Se añade 5 libros del quijote.
libros.add("Don Quijote de la Mancha", 5);
//Y comprobamos su cantidad.
let x=libros.cantidad("Don Quijote de la Mancha");

console.log(x);
*/
//La forma actual de crear clases, es usando la palabra class

class Inventario {
    constructor(nombre) {
        this.nombre = nombre;
        this.articulos = [];
    }

    getNombre() {return this.nombre};

    add(articulo, cantidad) {return this.articulos[articulo] = cantidad};

    cantidad(articulo) {return this.articulos[articulo]};
}


//Buena practica para recorrer arrays:
const obj = {
    unArray : new Array(10000)
}

function badPerfomance() {
    console.time("bad");
    for (let i=0; i<obj.unArray.length; i++) {
        obj.unArray[i] = 'Hola';
    }
    console.timeEnd('bad');
}

function goodPerformance() {
    console.time('good');
    let unArray=obj.unArray;
    for (let i=0, longitud=unArray.length; i<longitud; i++) {
        unArray[i] = "Hola";
    }
    console.timeEnd('good');
}

badPerfomance();

goodPerformance();

//Otras formas de recorrer un array:
const miArray = [1, 2, 3, 4];

miArray.forEach((item, index) => console.log(`El valor de la posición ${index} es: ${item}`) );

const libro = {
    titulo: "Don Quijote de la Mancha",
    autor: "Miguel de Cervantes",
    numPaginas: 1424,
    editorial: "Yohoy libros",
    precio: "25.90"
}

const props = Object.getOwnPropertyNames(libro);
props.forEach(name => {
    let valor = Object.getOwnPropertyDescriptor(libro, name).value;
    console.log(`La prop ${name} contiene ${valor}`);
})

//Tambien valdría, sería lo mismo:
 for (let prop in libro) {
    console.log(`La propiedad ${prop} contiene ${libro[prop]}`);
 }

