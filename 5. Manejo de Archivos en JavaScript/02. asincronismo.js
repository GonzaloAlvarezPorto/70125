console.log("iniciando tarea");


setTimeout(() => {

    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }

}, 3000)

console.log("tarea terminada");

let i = 0;
const intervalo = setInterval(() => {
    console.log("Ejecutando intervalo")
    i++;

    if(i === 3){
        clearInterval(intervalo);
    }
}, 2000)