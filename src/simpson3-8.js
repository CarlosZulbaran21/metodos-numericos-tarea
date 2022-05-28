const a = 5;
const b = 12;

// paso 1 hallar delta
export const delta = (b - a) / 3;
let valor = a;

// paso 2 tabla de particiones
export const valoresIniciales = [];
export const resultValoresInciales = [];
const positionTo3 = [1, 2];
for (let index = 0; index < b; index++) {
  if (valoresIniciales.length === 0) {
    valoresIniciales.push(valor);
  } else {
    valoresIniciales.push(valoresIniciales[index - 1] + delta);
  }
  // break loop
   // eslint-disable-next-line
  if (parseFloat(valoresIniciales[index]).toFixed(0) == b) break;
}

for (let index = 0; index < valoresIniciales.length; index++) {
  if (positionTo3.includes(index)) {
    resultValoresInciales.push(3 * Math.sqrt(valoresIniciales[index] - 2));
  } else {
    resultValoresInciales.push(Math.sqrt(valoresIniciales[index] - 2));
  }
}

export const suma = resultValoresInciales.reduce((a, b) => a + b);

export const area = ((3 * delta) * (suma)) / 8

// paso 3 tabla de valores
export const valoresGraficarX = [];
export const valoresGraficarY = [];

for (let index = 0; index < valoresIniciales.length; index++) {
  valoresGraficarX.push(valoresIniciales[index]);
  valoresGraficarY.push(Math.sqrt(valoresIniciales[index] - 2));
}

console.log("sumatoria:  " + suma);
console.log("area: ", area);
for (let index = 0; index < valoresGraficarX.length; index++) {
  console.warn(valoresGraficarX[index], " , ", valoresGraficarY[index]);
}
