/*
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
 */

// Desafortunadamente, no pude encontrar la representación en código morse de los siguientes símbolos: ¿, á, é, í, ó, ú; por lo tanto, les asigné una representación."

const morseCode = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.', 'G': '--.', 'H': '....', 'I': '..', 'J': '.---',
    'K': '-.-', 'L': '.-..', 'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.', 'S': '...', 'T': '-',
    'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-', 'Y': '-.--', 'Z': '--..',
    '0': '-----', '1': '.----', '2': '..---', '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...', '8': '---..', '9': '----.',
    '.': '.-.-.-', ',': '--..--', '?': '..--..', "'": '.----.', '!': '-.-.--', '/': '-..-.', '(': '-.--.', ')': '-.--.-', '&': '.-...', ':': '---...', ';': '-.-.-.', '=': '-...-', '+': '.-.-.', '-': '-....-', '_': '..--.-', '"': '.-..-.', '$': '...-..-', '@': '.--.-.',
    'Á': '.-.-', 'É': '..-..', 'Í': '..', 'Ó': '---.', 'Ú': '..--',
    '¿': '.-.-..'
  };
  
  // Función para convertir texto a código Morse

  function textoAMorse(texto) {
    let result = texto.toUpperCase().split('').map(char => (
      morseCode[char] || char)).join(' ');

    return result.replace(/ {3}/g, '  ');
  }
  
  // Función para convertir código Morse a texto

  function morseATexto(morse) {
    return morse.split(' ').map(code => Object.keys(morseCode).find(key => morseCode[key] === code) || ' ').join('');
  }
  
  // Detección de que tipo se trata

  const esCodigoMorse = (texto) => {

    // Verifica si la cadena contiene solo caracteres permitidos en código Morse

    const caracteresPermitidosMorse = /^[.-\s]+$/;
    return caracteresPermitidosMorse.test(texto);
  };
  
  function convertir(texto) {
    // Determina si es código Morse o texto normal
    if (esCodigoMorse(texto)) {
      return morseATexto(texto);
    } else {
      return textoAMorse(texto);
    }
  }
  
  // Ejemplo de uso
  const entrada1 = "Hola, ¿cómo estás?";
  const entrada2 = ".... --- .-.. .- --..--  .-.-.. -.-. ---. -- ---  . ... - .-.- ... ..--..";
  
  console.log(convertir(entrada1)); // Convertirá a código Morse
  console.log(convertir(entrada2)); // Convertirá a texto normal
 