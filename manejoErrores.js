/*
Para evaluar fragmentos de codigo, y si hay algún error se captura
en la parte del catch.
*/

try {
    console.log ("En el try se agraga el código a evaluar.");
    //EL catch no se ejecuta si NO hay error, pero el finally, SI.
    noExiste;/*Da un error porque la variable no existe (no 
    está declarada).*/
    console.log("Segundo mendsaje en try");
    /*
    Puede darse el caso de que se tenga la necesidad de 
    lanzar un error personalizado a proposito.
    */
} 
catch(error) {
    console.log("catch captura cualquier error surgido o lanzado en el try.");
    console.log("El error es: "+error);
}
finally {
    console.log("Se ejecutará siempre al final de un bloque try-catch");
    /*
    Puede ser muy útil para cerrar conexiones con bases de datos
    abiertas en el try (por ejemplo).
    */
}

    /*
    Puede darse el caso de que se tenga la necesidad de 
    lanzar un error personalizado a proposito.
    */

try {
    let numero= "a";
    if (isNaN(numero)) {
        throw new Error("La variable definida no es un número!");
    }
    console.log(Math.pow(numero, 2));
}
catch(error) {
    console.log(error.message);
}