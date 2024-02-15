/*
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */

function comparacion(string1,string2){

    let array1 = string1.toLowerCase().split('') 
    let array2 = string2.toLowerCase().split('')
    let out1 = ""
    let out2 = ""

    array1.forEach(element => {
        if(!array2.includes(element) && !out1.includes(element)){
            out1 += element
        }
    });

    array2.forEach(element => {
        if(!array1.includes(element) && !out2.includes(element)){
            out2 += element
        }
    });

    return {out1,out2}
}

const { out1, out2 } = comparacion("me GUSTA programar", "me gusta jugar");

console.log(`out1: ${out1} , out2: ${out2}`);