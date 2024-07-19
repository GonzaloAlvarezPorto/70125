const generarNumeroAleatorio = (cantidad) => {
    const numeros = [];

    for(let i = 0; i < cantidad; i++){
        const numeroAleatorio = Math.floor(Math.random()*20 + 1) //floor redondea para abajo
        numeros.push(numeroAleatorio);
    }
    return numeros;
}

function contarFrecuenciaNumeros(numeros){
    return new Promise((resolve, reject) => {
        const frecuencia = {};
        for(const numero of numeros){
            if(frecuencia[numero]){
                frecuencia[numero]++;
            }
            else{
                frecuencia[numero] = 1;
            }
        }

        resolve(frecuencia);
    });
}

const cantidadNumerosAleatorios = 10000;

const numeros = generarNumeroAleatorio(cantidadNumerosAleatorios);

console.log({numeros});

contarFrecuenciaNumeros(numeros).then(result => {
    console.log(result);
})