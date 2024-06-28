class Persona {
    constructor(nombre, apellido, edad, ciudad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.ciudad = ciudad;
    }

    static especie = "humano";

    saludar = () => {
        console.log(`Hola soy ${this.nombre}`)

    }

    despedir = () => {
        console.log(`Chau nos vemos`);
    }

    getNombre = () => {
        console.log(`Me llamo ${this.nombre}`);
    }
}

const juan = new Persona("Juan", "Pérez", 22, "Wilde");
const lucia = new Persona("Lucía", "Álvarez", 35, "Avellaneda");

lucia.getNombre();
juan.getNombre();

console.log(lucia.edad);

console.log(Persona.especie);

lucia.saludar();
lucia.despedir();