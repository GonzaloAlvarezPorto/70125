const fs = require('fs');

const operacionesAsincronas = async () => {
    await fs.promises.writeFile('./fsPromises.txt', "hola desde acá", 'utf-8');
    let resultado = await fs.promises.readFile('./fsPromises.txt', 'utf-8');
    console.log(resultado);
    await fs.promises.appendFile('./fsPromises.txt', ", desde Wilde", 'utf-8');
    resultado = await fs.promises.readFile('./fsPromises.txt', 'utf-8');
    console.log(resultado);
    fs.promises.unlink('./fsPromises.txt');
}

operacionesAsincronas();