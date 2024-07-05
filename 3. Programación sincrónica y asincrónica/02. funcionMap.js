function miFuncionMAP(arreglo, funcionCallBack) { 
    //La funcionCallBack es la funcion que recibe como parametro
    let nuevoArreglo = [];
    for (let i = 0; i < arreglo.length; i++) {
        const elemento = arreglo[i];

        let nuevoValor = funcionCallBack(elemento);
        nuevoArreglo.push(nuevoValor);
    }
    return nuevoArreglo;
}

let valoresOriginales = [1,2,5,6,4];

const funcionPar = (valor) => {
    if(valor%2 === 0){
        return valor
    }else{
        return "No es par"
    }
}

//let nuevosValores =  miFuncionMAP(valoresOriginales, funcionPar );

Array.prototype.miMap = function(funcionCallBack){
        //La funcionCallBack es la funcion que recibe como parametro
        let nuevoArreglo = [];
        for (let i = 0; i < this.length; i++) {
            const elemento = this[i];
    
            let nuevoValor = funcionCallBack(elemento);
            nuevoArreglo.push(nuevoValor);
        }
        return nuevoArreglo;
}

let nuevoArreglo = valoresOriginales.miMap(x=>x+1)

console.log(nuevoArreglo);