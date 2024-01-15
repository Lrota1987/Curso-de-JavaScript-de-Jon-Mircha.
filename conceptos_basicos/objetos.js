const luciano = {
    nombre: "Luciano",
    apellido: "Romero",
    edad: 36,
    pasatiempos: ["Cerveza", "Dardos", "Informática", "Vicio en general"],
    soltero:false,
    contacto: {
        email: "lucianoromero@ucm.es",
        telefono:630771522
    },
    saludar: function() {
        return "Hola";
    },
    decirMiNombre: function() {
        return `Hola me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años, me puedes escribir al siguiente email: ${this.contacto.email}`;
    }
}
/*
Dentro de un objeto a las variables se les va a allamar atributos
 o propiedades y a las funciones se les llama métodos.
*/
console.log(luciano.decirMiNombre());

//OBJETOS LITERALES:

let nombre = "Area";
let edad = 9;

const perro = {
    nombre:nombre,
    edad:edad,
    ladrar: function() {
        console.log("guauuu guauuu");
    }
}

const dog = {
    nombre,
    edad,
    raza:"Palleiro",
    ladrar() {
        console.log("guauuu guauuu guauuu");
    }
}

/*
Si el nombre de la propiedad del objeto a la que le quieres asignar
la variable se llama igual que la variable, basta con escribit
lo que se ha escrito en el objeto dog. También vale para los
métodos ya existentes en objetos con el método declarado.
*/

console.log(dog);
dog.ladrar();
