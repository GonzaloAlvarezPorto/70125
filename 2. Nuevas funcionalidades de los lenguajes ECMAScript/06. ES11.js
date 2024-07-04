let variable;

let valor1 = variable ?? "Vino nula";
let valor2 = variable || "Vino nula";

console.log(valor1);
console.log(valor2);

class Persona {
    #mayorEdad = 18;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    obtenerNombre(){
        return this.name;
    }

    #metodoPrivado(){
        console.log("Metodo privado");
    }

    usoMetodoPrivado(){
        this.#metodoPrivado();
    }
}

const persona = new Persona ("Luis",25);
persona.usoMetodoPrivado();