const mostrarLista = (listado = []) => {

    if (listado.length === 0) {
        return "Lista vacía";
    }
    listado.forEach(elemento => {
        console.log(elemento);
    });

    let cantElementos = listado.length;

    return cantElementos;
}

let listadoPrimero = [
    1,2,5,88
    ];
    
let listadoSegundo = [
    5,6,9,12
];

let listadoTercero = [

]

let resultadoPrimero = mostrarLista(listadoPrimero);
console.log(`El largo de la lista 1 es: ${resultadoPrimero}`);
let resultadoSegundo = mostrarLista(listadoSegundo);
console.log(`El largo de la lista 2 es: ${resultadoSegundo}`);
let resultadoTercero = mostrarLista(listadoTercero);
console.log(`El largo de la lista 3 es: ${resultadoTercero}`);
let resultadoVacio = mostrarLista();
console.log(`El largo de la lista vacía es: ${resultadoVacio}`);