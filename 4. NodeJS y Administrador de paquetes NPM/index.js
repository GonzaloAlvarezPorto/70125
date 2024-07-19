const { DateTime } = require("luxon");

const fecha = DateTime.now();
const fNac = DateTime.fromISO("1988-08-10");
if(fecha.isValid && fNac.isValid){
    const days = fecha.diff(fNac).as("days");
    const diasRedondeados = Math.floor(days);
    console.log(`Han pasado ${diasRedondeados} días desde que nací`);
}
else{
    console.log("Fecha inválida");
}

