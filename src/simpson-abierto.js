const a = 5;
const b = 8;
const n = 6; // n tiene que ser par
// 1 paso hallar delta
export const delta = (b - a) / n;
const valor = a;
// 2 paso hallar tabla de particiones
export const valoresIniciales = [];
export const resultValoresInciales = [];

for (let index = 0; index < b; index++) {
  if (valoresIniciales.length === 0) {
    valoresIniciales.push(valor);
  } else {
    valoresIniciales.push(valoresIniciales[index - 1] + delta);
  }
  // break loop
  // eslint-disable-next-line
  if (valoresIniciales[index] == b) break;
}

const positionTo4 = [1, 3, 5];
const positionTo2 = [2, 4];

for (let index = 0; index < valoresIniciales.length; index++) {
  if (resultValoresInciales.length === 0) {
    resultValoresInciales.push(Math.log(valor - 2));
  } else if (positionTo4.includes(index)) {
    resultValoresInciales.push(4 * Math.log(valoresIniciales[index] - 2));
  } else if (positionTo2.includes(index)) {
    resultValoresInciales.push(2 * Math.log(valoresIniciales[index] - 2));
  } else {
    resultValoresInciales.push(Math.log(valoresIniciales[index] - 2));
  }
}

export const suma = resultValoresInciales.reduce((a, b) => a + b);
export const area = (delta * suma) / 3;

export const valoresGraficarX = [];
export const valoresGraficarY = [];

for (let index = 0; index < valoresIniciales.length; index++) {
  valoresGraficarX.push(valoresIniciales[index]);
  valoresGraficarY.push(Math.log(valoresIniciales[index] - 2));
}

console.log("sumatoria:  " + suma);
console.log("area: ", area);
for (let index = 0; index < valoresGraficarX.length; index++) {
  console.warn(valoresGraficarX[index], " , ", valoresGraficarY[index]);
}
