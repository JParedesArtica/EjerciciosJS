/*
 * Crea un programa que comprueba si los paréntesis, llaves y corchetes
 * de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cierran
 *   en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios.
 *   No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 */

function extraerCaracteres(texto){

    const caracteresExtraidos = texto.match(/[{}\(\)\[\]]/g);
    console.log(caracteresExtraidos)
}
extraerCaracteres("{ [ a * ( c + d ) ] - 5 }")



// aun estoy pensando en como realizar el ejercicio