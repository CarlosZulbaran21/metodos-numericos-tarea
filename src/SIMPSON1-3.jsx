import { Button, Typography } from "@mui/material";
import React from "react";
import {
  area,
  delta,
  resultValoresInciales,
  suma,
  valoresGraficarX,
  valoresGraficarY,
  valoresIniciales,
} from "./simpson1-3";

const SIMPSON1_3 = () => {
  const [show_delta_1_3, setshow_delta_1_3] = React.useState(false);
  const [how_partition_1_3, sethow_partition_1_3] = React.useState(false);
  const [show_valores_1_3, setshow_valores_1_3] = React.useState(false);
  return (
    <>
      <img src={require("./SIMPSON_1_3.jpeg")} alt="trapezoidal" />
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setshow_delta_1_3(!show_delta_1_3)}
      >
        Resultado Paso 1 (Delta)
      </Button>
      <Typography
        variant="h5"
        component="h2"
        style={{
          display: show_delta_1_3 ? "block" : "none",
          marginTop: 40,
        }}
      >
        El resultado de delta es : {delta}
      </Typography>
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={() => sethow_partition_1_3(!how_partition_1_3)}
        style={{
          marginTop: 20,
        }}
      >
        Resultado Paso 2 (TABLA DE PARTICIONES)
      </Button>
      <Typography
        variant="h5"
        component="h2"
        style={{
          display: how_partition_1_3 ? "block" : "none",
          marginTop: 40,
        }}
      >
        <table border={4} style={{ margin: "0 auto" }}>
          <thead>
            <tr>
              <th>X</th>
              <th>Y = y = V(x + 3) (raiz cuadrada)</th>
            </tr>
          </thead>
          <tbody>
            <Patition />
          </tbody>
        </table>
        <br />
        la suma es de: {suma}
        <br />
        el area es de: {area}
      </Typography>
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setshow_valores_1_3(!show_valores_1_3)}
        style={{
          marginTop: 20,
        }}
      >
        Resultado Paso 3 (TABLA DE VALORES PARA GRAFICAR)
      </Button>
      <Typography
        variant="h5"
        component="h2"
        style={{
          display: show_valores_1_3 ? "block" : "none",
          marginTop: 40,
        }}
      >
        <table border={4} style={{ margin: "0 auto" }}>
          <thead>
            <tr>
              <th>X</th>
              <th>Y = y = V(x + 3) (raiz cuadrada)</th>
            </tr>
          </thead>
          <tbody>
            <ValoresGraficar />
          </tbody>
        </table>
      </Typography>
    </>
  );

  function Patition() {
    return valoresIniciales.map((valor, index) => (
      <tr key={index}>
        <td>{valoresIniciales[index]}</td>
        <td>{resultValoresInciales[index]}</td>
      </tr>
    ));
  }

  function ValoresGraficar() {
    return valoresGraficarX.map((valor, index) => (
      <tr key={index}>
        <td>{valoresGraficarX[index]}</td>
        <td>{valoresGraficarY[index]}</td>
      </tr>
    ));
  }
};

export default SIMPSON1_3;
