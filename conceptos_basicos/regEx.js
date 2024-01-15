

/*
Expresiones regulares: Secuencia de caracteres que forman un 
patrón de búsqueda, principalmente utilizada para la búsqueda
de patrones de cadenas de caracteres.
*/

let cadena = "Lorem ipsum dolorem sit amet doloremque consectetur adipisicing elit. Sit, aliquam consequatur? Id repellendus maxime minus illum omnis? Voluptatem dolor sunt beatae accusamus. Quam, id. Debitis perferendis laborum laboriosam magni officiis?";

let expReg = new RegExp("lorem", "ig");
let expReg2 = /lorem/ig;

//Con test te dice si la expresion regular existe en la cadena.
console.log(expReg.test(cadena));
//exec te da un array con las coincidencias.
console.log(expReg2.exec(cadena));
