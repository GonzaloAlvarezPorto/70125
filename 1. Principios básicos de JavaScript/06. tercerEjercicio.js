class Contador {
    constructor (responsable){
        this.responsable = responsable;
        this.conteo = 0;
        Contador.contadorGlobal++;
    }

    static contadorGlobal = 0;

    getResponsable = () => {
        return this.responsable;
    }

    contar = () => {
        this.conteo++;
        Contador.contadorGlobal++;
    }

    getConteoIndividual = () => {
        return this.conteo;
    }

    getContadorGlobal = () => {
        return Contador.contadorGlobal;
    }
}

const julia = new Contador("Julia");
const pedro = new Contador("Pedro");

pedro.contar();
pedro.contar();

console.log(`El resultado global es: ${pedro.getContadorGlobal()}`);
console.log(`El resultado de Pedro es: ${pedro.getConteoIndividual()}`);
console.log(`El resultado de Julia es: ${julia.getConteoIndividual()}`);
