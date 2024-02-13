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
    return texto.toUpperCase().split('').map(char => morseCode[char] || char).join(' ');
  }
  
  // Función para convertir código Morse a texto

  function morseATexto(morse) {
    return morse.split(' ').map(code => Object.keys(morseCode).find(key => morseCode[key] === code) || ' ').join('');
  }
  
  // Ejemplo de uso

  const textoOriginal = "Hola, ¿cómo estás?";
  const morse = textoAMorse(textoOriginal);
  const textoConvertido = morseATexto(morse);
  
  console.log('Texto Original:', textoOriginal);
  console.log('Morse:', morse);
  console.log('Texto Convertido:', textoConvertido);