const objetos = [
    {
        manzanas: 3,
        peras: 2,
        carne: 1,
        jugos: 5,
        dulces: 2
    },
    {
        manzanas: 1,
        sandias: 1,
        huevos: 6,
        jugos: 1,
        panes: 4
    }
];

const productos = [];

objetos.forEach(elemento => {
    productos.push(...Object.keys(elemento));
});

console.log(productos);


//para eliminar los productos repetidos usaremos reduce
const productosUnicos = productos.reduce((acc, item) => { //acc va a ser array

    if (!acc.includes(item)) {//si en acc no está item
        acc.push(item);//se agrega
    }
    return acc;//va returnando acc con los productos pusheados hasta que termine de recorrer acc
},[]);//este es el inicializador
console.log(productosUnicos);

//cantidad de productos vendidos
const cantProductos = [];

objetos.forEach(elemento => {
    cantProductos.push(...Object.values(elemento));
});

//const totalProductos = cantProductos.reduce(function(a,b){return (a + b)}, 0);
const totalProductos = cantProductos.reduce((acc, valor) => {
    acc = acc + valor;
    return acc;
},0);

console.log(totalProductos);