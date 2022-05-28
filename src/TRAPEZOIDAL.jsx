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
} from "./trapezoidal";

const TRAPEZOIDAL = () => {
  const [show_delta_trapezoidal, setshow_delta_trapezoidal] = React.useState(false);
  const [show_partition_trapezoidal, setshow_partition_trapezoidal] = React.useState(false);
  const [show_valores_trapezoidal, setshow_valores_trapezoidal] = React.useState(false);
  return (
    <>
      <img src={require("./trapezoidal-exercise.jpeg")} alt="trapezoidal" />
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setshow_delta_trapezoidal(!show_delta_trapezoidal)}
      >
        Resultado Paso 1 (Delta)
      </Button>
      <Typography
        variant="h5"
        component="h2"
        style={{
          display: show_delta_trapezoidal ? "block" : "none",
          marginTop: 40,
        }}
      >
        El resultado de delta es : {delta}
      </Typography>
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setshow_partition_trapezoidal(!show_partition_trapezoidal)}
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
          display: show_partition_trapezoidal ? "block" : "none",
          marginTop: 40,
        }}
      >
        <table border={4} style={{ margin: "0 auto" }}>
          <thead>
            <tr>
              <th>X</th>
              <th>Log (x+4)</th>
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
        onClick={() => setshow_valores_trapezoidal(!show_valores_trapezoidal)}
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
          display: show_valores_trapezoidal ? "block" : "none",
          marginTop: 40,
        }}
      >
        <table border={4} style={{ margin: "0 auto" }}>
          <thead>
            <tr>
              <th>X</th>
              <th>Y = Log(x+4)</th>
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

export default TRAPEZOIDAL;
