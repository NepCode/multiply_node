const multiplicar = require('./app_multi');

let base = 3;


crearArchivo(base)
.then(archivo => console.log(`the file tabla-${ base }.txt has been saved!`));


