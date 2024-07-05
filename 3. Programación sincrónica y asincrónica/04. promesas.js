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

dividir(5,0)
.then(resultado => {
    console.log(resultado); //Si está bien toma el valor que devuelve resolve
})
.catch(error => {
    console.log(error); //Si está mal toma el valor que devuelve el rejected
});