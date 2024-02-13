/*
 * Crea un programa que invierta el orden de una cadena de texto
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

function invertString(string){
    stringInvertido = ""

    for ( let i = string.length -1 ; i >=0 ; i-- ){
        stringInvertido += string[i]
    }
return stringInvertido
}
console.log(invertString("Hola Mundo"))