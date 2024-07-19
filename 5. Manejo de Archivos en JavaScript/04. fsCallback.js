const fs = require('fs');

fs.writeFile('./ejemploCallback.txt', "holaaaa", (error) => {
    if (error) {
        return console.log("No se pudo escribir");
    }
    fs.readFile('./ejemploCallback.txt', 'utf-8', (error, resultado) => {
        if (error) {
            return console.log("No se pudo leer");
        }
        console.log(resultado);
        fs.appendFile('./ejemploCallback.txt', ' bebeeee', (error => {
            if (error) {
                return console.log("No se pudo actualizar");
            }
            fs.readFile('./ejemploCallback.txt', 'utf-8', (error, contenido) => {
                if (error) {
                    return console.log(error);
                }
                console.log(contenido);
            })
        }));
    });
});