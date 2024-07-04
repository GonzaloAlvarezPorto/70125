const texto = "    Texto ejemplo               ";

let procesado = '';

procesado = texto.trim(); // -> "Texto ejemplo"

procesado = texto.trimStart(); // -> "Texto ejemplo               "

procesado = texto.trimEnd(); // -> "    Texto ejemplo"


//flat

const arr = [1, [2,3, "g"], [4,5], 5];

console.log(arr.flat());