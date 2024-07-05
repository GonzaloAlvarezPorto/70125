const suma = async (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num1 === 0 || num2 === 0) {
            reject("Operación innecesaria.");
        }
        if (num1 + num2 < 0) {
            reject("Operación inválida, solo valores positivos.");
        }

        let total = num1 + num2;

        resolve(total);
    })

}

const resta = async (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num1 === 0 || num2 === 0) {
            reject("Operación innecesaria.");
        }
        if (num1 + num2 < 0) {
            reject("Operación inválida, solo valores positivos.");
        }

        let total = num1 - num2;

        resolve(total);
    })
}

const multiplicacion = async (num1, num2) => {
    return new Promise((resolve, reject) => {
        if (num1 < 0 || num2 < 0) {
            reject("Operación inválida.");
        }
        if(num1 * num2 < 0 ){
            reject("Solo valores positivo");
        }

        let total = num1 * num2;

        resolve(total);
    })
}

const dividir = (dividendo, divisor) => {
    return new Promise((resolve, rejected) => {
        if (divisor === 0) {
            rejected("No se puede dividir por 0");
        }
        else {
            resolve(dividendo / divisor);
        }

    })
}


//operacion es el callBack
const calculos = async (num1, num2, operacion) => {
    try {
        const resultado = await operacion(num1, num2);
        console.log(`El resultado es: ${resultado}`)

    } catch (error) {
        console.log("error");
        console.log(error);

    }

}

calculos(10, 0, dividir);
calculos(0, 2, suma);
calculos(0, 2, resta);
calculos(10, -2, multiplicacion);
