/*
En POO hay 4 conceptos importantes:
-Clases: Las clases son un modelo a seguir para poder generar
instancias.
-Objetos: Es una instancia de una clase, es decir, una copia
de ese modelo que es la clase.
    -Atributos: Es una característica o propiedad del objeto.
    Son variables dentro de un objeto.
    -Métodos: Son las acciones que un objeto puede realizar.
    Son funciones dentro un objeto. 
JS es un lenguaje orientado a objetos basado en prototipos,
no en clases, pero se han implementado las clases para
facilitar el trabajo con JS.
*/

const animal = {
    nombre:'Snoopy',
    sonar() {
        console.log('Hago sonidos porque estoy vivo');
    }
}

const animal2 = {
    nombre:'Lola Bunny',
    sonar() {
        console.log('Hago sonidos porque estoy vivo');
    }
}
/*
Para evitar andar pegando y copiando código para crear objetos
similares existen las clases. Para crear un proptotipo para
generar n cantidad de animales definimos una función constructora:
*/

function Animal(nombre, genero) {
    //Atributos
    this.nombre = nombre;
    this.genero = genero;
    //Métodos
    this.sonar = function() {
        console.log("Hago sonidos porque estoy vivo.");
    }

    this.saludar = function() {
        console.log(`Hola me llamo ${this.nombre}`);
    }
}

const Snoopy = new Animal('Snoopy', 'Macho'),
lolaBunny = new Animal('Lola Bunny', 'Hembra');

console.log(animal);
console.log(animal2);
//Al ejecutar, animal es del prototipo object (no sale nada).
//Animal es del prototipo Animal.
console.log(Snoopy);
console.log(lolaBunny);

/*Para evitar la duplicidad de los metodos definidos en el
prototipo (con dos no pasa nada, pero con 100 ya podría dar
problemas, son 22 métodos duplicados), los métodos se tienen
que sacar de la función y se los pegamos al prototipo.
*/
function Animal2(nombre, genero) {
    //Atributos
    this.nombre = nombre;
    this.genero = genero;
}

//Métodos agregados al prototipo de la funcion constructora.
Animal2.prototype.sonar = function() {
    console.log("Hago sonidos porque estoy vivo.");
}

Animal2.prototype.saludar = function() {
    console.log(`Hola me llamo ${this.nombre}`);
}
const Snoopy2 = new Animal2('Snoopy', 'Macho');
//Ya no se generan duplicidades de métodos:
console.log(Snoopy2);
Snoopy2.saludar();

//HERENCIA PROTOTIPICA:
/*
Genereamos una funcion constructora para la clase perro, que va
a heredar las características de animal.
*/

function Perro(nombre, genero, tamano) {
    //Este es el método super constructor:
    this.super = Animal2;
    this.super(nombre, genero);
    this.tamano = tamano;
}

//Perro está heredando de animal.
Perro.prototype = new Animal2();
Perro.prototype.constructor = Perro;

//Sobreescritura método del prototipo padre en hijo.
Perro.prototype.sonar = function() {
    console.log("Soy un perro y mi sonido es un ladrido.")
}

Perro.prototype.ladrar = function() {
    console.log("guauuuu guauuuu");
}

const Snoopy3 = new Perro("Snoopy", "Macho", "Mediano");
console.log(Snoopy3);

Snoopy3.saludar();
Snoopy3.sonar();
Snoopy3.ladrar();