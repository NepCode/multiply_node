// requireds
const fs = require('fs');


crearArchivo = ( base ) => {

    return new Promise ((resolve, reject) => {

            let data = '';

            for (let i = 1; i <= 10; i++) {
                console.log(`${ base } * ${ i } = ${ base * i }`);
                data+=`${ base } * ${ i } = ${ base * i }\n`;
            }
        
        fs.writeFile(`files/tabla-${ base }.txt`,data, (err) => {
        
            if(err) 
                reject(err);
            resolve(`the file tabla-${ base }.txt`)
        });
        
    });

}

module.exports = {
    crearArchivo 
}