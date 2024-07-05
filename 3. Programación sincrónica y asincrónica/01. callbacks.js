//map transforma el array original y lo convierte en uno nuevo
let valoresOriginales = [1, 2, 5, 6, 4];

let nuevosValores = valoresOriginales.map(x => x + 1);

console.log(valoresOriginales);
console.log(nuevosValores);

const funcionPar = (valor) => {
    if(valor%2 === 0){
        return valor;
    }
    else{
        return "No es par";
    }
}

let nuevosValoresPares = valoresOriginales.map(funcionPar);
let nuevosValoresParesBis = nuevosValores.map(funcionPar);

console.log(nuevosValoresPares);
console.log(nuevosValoresParesBis);
