var obj = {
    foo: function() {return 'foo'},
    bar: function() {
        document.addEventListener('click', event => this.foo());
        //El arrow function lleva implicito el objeto bind.
        //this hace referencia el contexto de la funcion.
        
    }
}