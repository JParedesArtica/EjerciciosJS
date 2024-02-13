const fs = require('fs');
const path = require('path');

// Obtén la fecha actual en formato YYYY-MM-DD
const fechaActual = new Date().toISOString().split('T')[0];

// Ruta al archivo de registro diario
const rutaArchivo = path.join(__dirname, 'registro-diario.md');

// Contenido a añadir al archivo de registro diario
const nuevoContenido = `\n\n### Día ${fechaActual}\n\n- [ ] Resolví Ejercicio 1.\n- [ ] Resolví Ejercicio 2.`;

// Lee el contenido actual del archivo
const contenidoActual = fs.readFileSync(rutaArchivo, 'utf-8');

// Agrega el nuevo contenido al archivo
fs.writeFileSync(rutaArchivo, contenidoActual + nuevoContenido);

console.log('Registro diario actualizado correctamente.');