
    /*
    Las clases en JS es el denominado azucar sintáctico, es decir
    facilita el trabajo pero internamente trabaja con prototipos.
    */
    class Animal {

        /*
        El constructor es un método especial que se ejecuta
        en el momento de instanciar la clase.
        */
        constructor(nombre, genero) {
            this.nombre = nombre;
            this.genero = genero;
        }

        //Métodos.
        sonar() {
            console.log("Hago ruidos porque estoy vivo.");
        }

        saludar () {
            console.log(`Hola me llamo ${this.nombre}`);
        }
    }



    class Perro extends Animal {
        constructor(nombre, genero, tamano) {
            /*
            El método super() manda llamar al constructor de la
            clase padre.
            */
           super(nombre, genero);
           this.tamano = tamano;
           this.raza = null;
        }

        sonar() {
            console.log("Soy un perro y mi sonido es un ladrido");
        }
        ladrar() {
            console.log("guauuu guauuu!!");
        }
        //Método estático:
        static queEres() {
            console.log("Los perros somos animales mamíferos que pertenecemos a la familia de los...");
        }
        /*
        Los setters y getters son métodos especiales que nos
        permiten establecer y obtener los valores de atributos 
        de nuestra clase.
        */
        get getRaza() {
            return this.raza;
        }
        set setRaza(raza) {
            this.raza = raza;
        }

    }

    const mimi = new Animal("Mimi", "Hembra"),
    scooby = new Perro("Scooby", "Macho", "Gigante");
    //Las clases solo simplifican la escritura.
    //Herencia:
    mimi.saludar();
    mimi.sonar();
    scooby.saludar();
    scooby.sonar();
    scooby.ladrar();
    //Para llamar un método estático:
    Perro.queEres();

    /*
    OJO, los getters y los setters al invocarlos son tratados
    como PARÁMETROS y no como métodos!!!!
    */
    scooby.setRaza = "Gran Danés";
    console.log(scooby.getRaza);
//El prototipo de Perro es Animal, y el de Animal es Object.
//Métodos getter, setter y estáticos:

/*
JS no permite crear clases privadas o protegidas, es decir, en
JS todas clas clases que se crean son públicas. En cambio si existen
ciertas características, como pueden ser los métodos estáticos,
es decir, aquel que se puede ejecutar sin instanciar la clase.
*/
