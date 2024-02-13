/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

function binarySystem(int){

    let numBin = ""

    while (int > 0){
        residuo = int % 2
        numBin = residuo + numBin
        int =  Math.floor(int/2)   
    }

    if ( numBin === ""){
        numBin = 0
    }

return numBin
}

console.log(binarySystem(15))