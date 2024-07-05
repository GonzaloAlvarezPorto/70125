const dividir = (dividendo, divisor) => {
    return new Promise((resolve,rejected) => {
        if(divisor === 0){
            rejected("No se puede dividir por 0");
        }
        else{
            resolve(dividendo/divisor);
        }

    })
}

const calculo = async () => {
    try{
        const resultado = await dividir(10,2);
        console.log(resultado);
    }
    catch(error){
        console.log("Paso por el error");
        console.log(error);
    }
}

calculo();