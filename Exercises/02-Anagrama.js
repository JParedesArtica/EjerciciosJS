/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function anagrama(string1,string2){
    if ( string1.toLowerCase() === string2.toLowerCase()){
        return ('Las palabras son iguales,así que no son anagramas');
    } else{
        return (string1.toLowerCase().split("").sort().join("") === string2.toLowerCase().split("").sort().join(""));
    }

}

console.log(anagrama("Hola Mundo","olah Mundo"))