/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */


function contarPalabras(texto){
    
    const palabras = texto.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").toLowerCase().split(" ")

    const recuentoPalabras = {}

    palabras.forEach(palabra => {
        if(recuentoPalabras[palabra]){
            recuentoPalabras[palabra]++
        } else{
            recuentoPalabras[palabra] = 1
        }
    });

    // for (let i=0 ; i < palabras.length; i++){
       
    //     if(recuentoPalabras[palabras[i]]){
    //         recuentoPalabras[palabras[i]]++
    //     } else {
    //         recuentoPalabras[palabras[i]] = 1
    //     }
    // }
    
    console.log("Recuento final de palabras:");

    for (let palabra in recuentoPalabras) {
        console.log(`${palabra}: ${recuentoPalabras[palabra]}`);
    }
        }

 contarPalabras('"En un tranquilo pueblo, la gente disfruta de su día. El sol brilla sobre las casas blancas mientras los niños juegan en el parque. Algunos residentes prefieren leer libros en la biblioteca, otros se relajan en el café local. La vida cotidiana transcurre con normalidad, pero de repente, la paz se ve interrumpida por un curioso suceso. Un gato travieso, llamado Whiskers, decide explorar el mercado y sorprende a todos. Whiskers, conocido por sus travesuras, se convierte en el tema principal de conversación. Sin embargo, a pesar de la sorpresa inicial, la gente encuentra alegría en la diversión inesperada que trae el pequeño felino a sus vidas."')       