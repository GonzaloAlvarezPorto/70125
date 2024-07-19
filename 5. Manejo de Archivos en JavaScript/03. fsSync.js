const fs = require('fs');

fs.writeFileSync('./ejemplo.txt', "hola bebeee", "utf-8");

if(fs.existsSync('./ejemplo.txt')){
    let contenido = fs.readFileSync('./ejemplo.txt', 'utf-8');
    console.log(contenido);
    fs.appendFileSync('./ejemplo.txt', " de mi corazón", 'utf-8');
    contenido = fs.readFileSync('./ejemplo.txt', 'utf-8');
    console.log(contenido);   
    fs.unlinkSync('./ejemplo.txt')
}