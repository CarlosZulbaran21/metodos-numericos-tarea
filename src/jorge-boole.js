const a = 0;
const b = 5;

// paso 1 hallar delta
export const delta = (b - a) / 4;

// paso 2 tabla de particiones
export const valoresIniciales = []; // empieza en 0 para empezar la tabla
export const resultValoresInciales = [];
const positionToSeven = [4];
const positionTo32 = [1, 3];
const positionTo12 = [2];
let valor = a;

for (let index = 0; index < b; index++) {
  if (valoresIniciales.length > 0) {
    valoresIniciales.push(valoresIniciales[index - 1] + delta);
  } else {
    valoresIniciales.push(valor + delta);
  }
  // break loop
  if (valoresIniciales[index] === b) break;
}
valoresIniciales.unshift(valor);

for (let index = 0; index < b; index++) {
  if (resultValoresInciales.length === 0) {
    resultValoresInciales.push(7 * Math.pow(3, valoresIniciales[0]));
  } else if (positionToSeven.includes(index)) {
    resultValoresInciales.push(7 * Math.pow(3, valoresIniciales[index]));
  } else if (positionTo32.includes(index)) {
    resultValoresInciales.push(32 * Math.pow(3, valoresIniciales[index]));
  } else if (positionTo12.includes(index)) {
    resultValoresInciales.push(12 * Math.pow(3, valoresIniciales[index]));
  }
  // break loop
  if (resultValoresInciales[index] === b) break;
}

export const suma = resultValoresInciales.reduce((a, b) => a + b);

export const area = (2 * delta * suma) / 45;

// paso 3 tabla de valores
export const valoresGraficarX = [];
export const valoresGraficarY = [];

for (let index = 0; index < valoresIniciales.length; index++) {
  valoresGraficarX.push(valoresIniciales[index]);
  valoresGraficarY.push(Math.pow(3, valoresIniciales[index]));
}

console.log("sumatoria:  " + suma);
console.log("area: ", area);

for (let index = 0; index < valoresGraficarX.length; index++) {
  console.warn(valoresGraficarX[index], " , ", valoresGraficarY[index]);
}
