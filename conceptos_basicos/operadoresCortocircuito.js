/*
Funcionan poniendo dos condiciones usando operadores lógicos.
Cortocircuito OR: Cuando el valor de la izquierda en la expresión
se pueda validar a TRUE, es el valor que se cargará por defecto,
es decir, el valor de la derecha no se validará.

Cortocircuito AND: Cuando el valor de la izquierda en la expresión
se valide a FALSE, es el valor que se cargará por defecto.
*/

function saludar(nombre){
    nombre = nombre || 'Desconocido';
    console.log(`Hola ${nombre}`);
}

saludar('Luciano');
saludar();

console.log('cadena' || 'valor de la derecha');
//Aplica a cadena. Aplicará siempre que sea truty.
console.log(0 || '2da cadena de la derecha');
console.log("" || '2da cadena de la derecha');
//Aplica a la derecha debido a que en la izquierda son falsys.
