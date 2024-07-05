const sumar = (numero1, numero2) => numero1 + numero2;
const restar = (numero1, numero2) => numero1 - numero2;
const multiplicar = (numero1, numero2) => numero1 * numero2;
const dividir = (numero1, numero2) => numero1 / numero2;

const realizarOperacion = (numero1, numero2, funcionCallBack) => {
    console.log("Realizo la operación que recibo");

    let resultado = funcionCallBack(numero1, numero2);

    console.log("Resultado: " + resultado);
}

realizarOperacion(22,2,dividir);
realizarOperacion(2,11,multiplicar);
realizarOperacion(22,11,sumar);
realizarOperacion(55,11,restar);