const a = 0;
const b = 7;
const n = 5;
// paso 1 calcular delta
export const delta = (b - a) / n;
let valor = a;
// paso 2 tabla de particiones
export const valoresIniciales = [];
export const resultValoresInciales = [];

for (let index = 0; index <= b; index++) {
  if (valoresIniciales.length > 0) {
    valoresIniciales.push(valoresIniciales[index - 1] + delta);
  } else {
    valoresIniciales.push(valor + delta);
  }
  // break loop
  if (valoresIniciales[index] === b) break;
}
valoresIniciales.unshift(valor);
const posicionesInicialesFinales = [0, 5];

for (let index = 0; index < valoresIniciales.length; index++) {
  if (posicionesInicialesFinales.includes(index)) {
    resultValoresInciales.push(Math.log10(valoresIniciales[index] + 4));
  } else {
    resultValoresInciales.push(2 * Math.log10(valoresIniciales[index] + 4));
  }
}

// sumar valores tabla de particiones
export const suma = resultValoresInciales.reduce((a, b) => a + b);

// hallar area
export const area = (delta * suma) / 2;

// paso 3 tabla de valores
export const valoresGraficarX = [];
export const valoresGraficarY = [];

for (let index = 0; index < valoresIniciales.length; index++) {
  valoresGraficarX.push(valoresIniciales[index]);
  valoresGraficarY.push(Math.log10(valoresIniciales[index] + 4));
}

console.log("sumatoria:  " + suma);
console.log("area: ", area);
for (let index = 0; index < valoresGraficarX.length; index++) {
  console.warn(valoresGraficarX[index], " , ", valoresGraficarY[index]);
}
