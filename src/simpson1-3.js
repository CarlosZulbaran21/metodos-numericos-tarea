const a = 5;
const b = 12;

// paso 1 hallar delta
export const delta = (b - a) / 2;
export const valoresIniciales = [];
export const resultValoresInciales = [];
export const valoresGraficarX = [];
export const valoresGraficarY = [];
let valor = a;

// paso 2 tabla de particiones

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

resultValoresInciales.push(Math.sqrt(valoresIniciales[0] + 3));
resultValoresInciales.push(4 * Math.sqrt(valoresIniciales[1] + 3));
resultValoresInciales.push(Math.sqrt(valoresIniciales[2] + 3));

export const suma = resultValoresInciales.reduce((a, b) => a + b);
export const area = (delta * suma) / 3;
//paso 3 tabla de valores
//valores en x
valoresGraficarX.push(0);
valoresGraficarX.push(valoresIniciales[0]);
valoresGraficarX.push(valoresIniciales[1]);
valoresGraficarX.push(valoresIniciales[2]);
// valores en y
valoresGraficarY.push(Math.sqrt(0 + 3));
valoresGraficarY.push(Math.sqrt(valoresIniciales[0] + 3));
valoresGraficarY.push(Math.sqrt(valoresIniciales[1] + 3));
valoresGraficarY.push(Math.sqrt(valoresIniciales[2] + 3));

console.log("sumatoria:  " + suma);
console.log("area: ", area);
for (let index = 0; index < valoresGraficarX.length; index++) {
  console.warn(valoresGraficarX[index], " , ", valoresGraficarY[index]);
}
