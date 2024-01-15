import react from 'react';
const propiedades = {
    id: 0,
    name: "pepe",
    username: "lrota",
    profile: "noob"
};

function Componente ({id, ...props}) {
    return <NuevoComponente key={id} {...props} />;
} 

console.log(Componente(propiedades.id, propiedades.name, propiedades.username));

function suma (a,b) {
    a = a ?? 0;
    //Esto es como: a = a == null ? 0 : a
    b = b ?? 0;
    //Seria como decir b es igual a b? si no es así, es 0.
}