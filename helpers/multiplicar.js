const fs = require('fs');
const colors = require('colors');
//1er modo de crear la promesa, retornando una nueva promesa(new Promise) y dandole
//como argumentos el resolve y reject. y devuelve el resolve.
/* const crearArchivo = (base = 5) => {

  return new Promise((resolve, reject) => {

    console.log('============================');
    console.log('     Tabla del:', base);
    console.log('============================');
  
    let salida = '';
  
    for (let i = 1; i <= 10; i++ ) {
      salida += `${base} X ${i} = ${ base * i }\n`;
    }
  
    console.log(salida);
  
    fs.writeFileSync( `tabla-${base}.txt`, salida);
  
    resolve(`tabla-${base}.txt Creado`);
  })
} */

// 2do modo de crear uan promesa. agregando el async a la funcion y retornando el 
// resultado.

//para manejar el reject(error) se debe colocar dentro de un try y catch!
const crearArchivo = async(base = 5, listar = false, hasta =20 ) => {

  try {

    let salida, consola = '';

    for (let i = 1; i <= hasta; i++ ) {
      salida  += `${base} x ${i} = ${ base * i }\n`;
      consola += `${base} ${ 'x'.yellow } ${i} ${ '='.yellow} ${ base * i }\n`;
    }

    if ( listar ) {
      
      console.log('============================'.green);
      console.log('     Tabla del:'.blue, colors.blue( base ) );
      console.log('============================'.green);

      console.log(consola);
      
    }

    
    fs.writeFileSync( `./salida/tabla-${base}.txt`, salida);
    
    return `tabla-${base}.txt`;
    
  } catch (error) {

    throw err;
    
  }
  
}

module.exports = {
  crearArchivo
};


