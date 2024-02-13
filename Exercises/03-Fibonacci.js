/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

function fibonacci(n){

    if( n===0){
        return [];
    } else if (n ===1 ) {
        return [0]
        
    }

    let arrFibonacci = [0,1]

    // while (arrFibonacci.length < n){
    //     arrFibonacci.push(arrFibonacci[arrFibonacci.length-1]+arrFibonacci[arrFibonacci.length-2])
    // }

    for (let i = 0 ; i < n-2 ; i++){
        arrFibonacci.push(arrFibonacci[arrFibonacci.length-1]+arrFibonacci[arrFibonacci.length-2])
    }

return arrFibonacci

}

console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(50))