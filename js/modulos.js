import saludar, { Saludar, PI } from "./constantes.js";
//Para dar un alias, a aritmetica por ej:
import { aritmetica as calculos } from "./aritmetica.js";


console.log("Archivo modulos.js");

console.log(PI);
console.log(calculos.sumar(3,4)+"   "+calculos.restar(4,3));
saludar();
let saludo = new Saludar();
saludo;


//saludar();