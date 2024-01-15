const a = "Hey!";

function global() {
    const b = "¿Qué";
    function local() {
        const c = " tal?";
        return a + b + c;
    }
    return local;
}

const closure = global();

console.log(global()); //No reconoce la funcion interna, para ello:
//Con la constante closure (puede tener cualquier nombre), se llama a todas las funciones.
console.log(closure());

const miContador = (function() {
    let _contador = 0;
    function incrementar() {
        return _contador ++;
    }

    function decrementar() {
        return _contador--;
    }

    function valor() {
        return _contador;
    }

    return {
        incrementar,
        decrementar,
        valor
    }
})();// Con el doble parentesis se crea el closure. Los parámetros
//No son accesibles desde fuera.
//Para acceder a los parametros:
miContador.incrementar();
miContador.incrementar();
miContador.incrementar();
miContador.decrementar();
console.log(miContador.valor());


//Usamos una funcion de inmediato:
function greet() {
    var i = 1;
    for (; i<=10; i++) {
        setTimeout((function (i) {
            return function() {
                console.log("Hi" + i);
            }
        })(i), i*1000);
    }
}

greet()