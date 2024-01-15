const datos = [/*{
    id: 1,
    title: 'Iron Man',
    year: 2008
},
{
    id: 2,
    title: 'Spiderman: Homecoming',
    year:2017
},
{
    id: 3,
    title: 'Avengers: Endgame',
    year:2019
}*/];

/*
const getDatos =() => {
    return datos;
}
*/

//Si la funcion llamase a los datos desde una api (hay un delay), fingimos
//ese delay con setTimeOut, asi creamos una función asimcrona.

//Si no se crea el objeto promise:
//Devuelve undefined debido al tiempo que tiene que esperar, para solucionar
//esto están las promesas, que devuelven algo cuando pasa el tiempo que tenga que pasar
//(si todo está correcto el resultado, sino, un error.).

const getDatos =() => {
    return new Promise((resolve, reject) => {
        if (datos.length === 0) {
            reject(new Error('No existen Datos'));
        }
        setTimeout(() => {
            resolve(datos)
        }, 1500);
    });
};

/*
getDatos()
    .then((datos) => console.log(datos));
*/



async function fetchingData () {
    try {
        const datosFetched = await getDatos();
        console.log(datosFetched);
    }
    catch (err) {
        console.log(err.message);
    }
}

fetchingData();
