/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function numPrimo(n){

    let listNumPrim = []

    for (let numero = 2 ; numero <= n ; numero++ ){
        let esPrimo = true
        for (let divisor = 2 ; divisor <= Math.round(Math.sqrt(numero)) ; divisor++){
            if ( numero % divisor === 0 ){
                esPrimo = false
                break
            }
        }
        if (esPrimo){
            listNumPrim.push(numero)
        }
    }
return listNumPrim
}

console.log(numPrimo(100))