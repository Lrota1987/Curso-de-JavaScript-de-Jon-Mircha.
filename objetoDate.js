/*

*/
let fecha = new Date;
console.log(fecha);
//Para que de el día del mes (número):
console.log(fecha.getDate());
//Para que te devuelva el día de la semana (en número también)
//De domingo (0) a Sábado(6);
console.log(fecha.getDay());
//El número de mes, igual, lo guarda en un array y te devuelve
//la posición (Dic sería 11):
console.log(fecha.getMonth());
/*Para obtener el año, hay dos métodos: getYear: no es útil
por su nomenclatura. Normalmente se usa getFullYear().*/
console.log(fecha.getFullYear());
//Para la hora:
console.log(fecha.getHours());
console.log(fecha.getMinutes());
console.log(fecha.getSeconds());
/*Hay métodos que permiten obtener la fecha de forma
más comprensible para el ser humano.*/
console.log(fecha.toString());
console.log(fecha.toDateString());
//Para referirse solo a la hora local:
console.log(fecha.toLocaleString());
//Para obtener sólo la parte de la fecha:
console.log(fecha.toLocaleDateString());
//Para la parte de la hora:
console.log(fecha.toLocaleTimeString());
//Para obtener nuestro uso horario, se da en minutos:
console.log(fecha.getTimezoneOffset());
//Para ver la fecha en timeStamp se usa (se tiene que usar el objeto Date):
console.log(Date.now());
