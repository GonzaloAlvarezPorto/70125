const fs = require('fs');

const leerPackageJson = async () => {
    try {
        const contenido = await fs.promises.readFile('../package.json', 'utf-8');
        const contObj = JSON.parse(contenido);
        const stats = await fs.promises.stat('../package.json');
        const info = {
            contenidoStr: contenido,
            contenidoObj: contObj,
            size: stats.size 
        }
        await fs.promises.writeFile('./info.json', JSON.stringify(info), 'utf-8');
    } catch (error) {
        console.log(error);
    }
}

leerPackageJson();