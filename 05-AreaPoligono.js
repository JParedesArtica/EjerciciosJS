/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */



function calcularArea(poligono) {
  let area = 0;

  switch (poligono.item.toLowerCase()) {
    case "triangulo":
      area = (poligono.base * poligono.altura) / 2;
      console.log(`El area del triangulo es ${area}`);
      break;

    case "cuadrado":
      area = poligono.lado ** 2;
      console.log(`El area del cuadrado es ${area}`);
      break;

    case "rectangulo":
      area = poligono.base * poligono.altura;
      console.log(`El area del rectangulo es ${area}`);
      break;

    default:
      console.log("El polígono no es compatible");
      break;
  }
  return area;
}

const triangulo = { item: "triangulo", base: 5, altura: 10 };
const rectangulo = { item: "rectangulO", base: 5, altura: 10 };
const cuadrado = { item: "cuadrado", lado: 5 };
const cuadrado2 = { item: "cuadrado2", lado: 5 };

calcularArea(triangulo);
calcularArea(rectangulo);
calcularArea(cuadrado);
calcularArea(cuadrado2);