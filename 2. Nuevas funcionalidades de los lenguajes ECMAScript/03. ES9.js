const persona1 = {
    nombre:"Pablo",
    apellido:"Pérez",
    edad:24
}

const persona2 = {
    nombre:"Mateo",
    apellido:"Álvarez Rapetti",
    edad:1
}

//spread destructuring
let {nombre, apellido} = persona2;

console.log(nombre);
console.log(apellido);

//rest
let persona3 = {...persona1};

persona3.nombre = "Luis";

console.log(`La persona 1 se llama: ${persona1.nombre}`);
console.log(`Su hermano se llama: ${persona3.nombre}`);

let {edad, ...resto} = persona1; //guardamos en edad la propiedad edad, y en ...resto, todo lo demás

console.log(edad);
console.log(resto);