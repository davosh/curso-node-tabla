const fs = require('fs');
require('colors');
const crearArchivo = async(base = 5, listar = false, h) => {
    try {
        let salida, consola = '';
        for (let i = 1; i <= h; i++) {
            salida += `${base} X ${i} = ${i*base}\n`;
            consola += `${base} ${'X'.yellow} ${i} ${'='.yellow} ${i*base}\n`;
        }

        if (listar) {
            console.log('==================='.red);
            console.log('  Tabla del: '.red, base);
            console.log('==================='.red);
            console.log(consola);
        }


        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `tabla-${base}.txt`;
    } catch (err) {
        throw (err)
    }

}

module.exports = {
    crearArchivo
}