export const PI = Math.PI;

let usuario = "Luciano";
export let password = "123456";


/*
No se pueden exportar dos cosas con default. IMPORTANTE:
Para exportar (con o sin default) una variable o una función
declarada, primero se declara la variable y LUEGO se exporta.
Para importar una funcion o una variable por defecto:
*/
export default function saludar() {
    console.log("Hola modulos +ES6");
};

export class Saludar {
    constructor() {
        console.log("Hola clase!!!")
    }
}

