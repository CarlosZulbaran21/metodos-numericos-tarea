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
} from "./simpson-abierto";

const SIMPSON_ABIERTO = () => {
  const [show_delta_abierto, setshow_delta_abierto] = React.useState(false);
  const [how_partition_abierto, sethow_partition_abierto] =
    React.useState(false);
  const [show_valores_abierto, setshow_valores_abierto] = React.useState(false);
  return (
    <>
      <img src={require("./SIMPSON_abierto.jpeg")} alt="trapezoidal" />
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setshow_delta_abierto(!show_delta_abierto)}
      >
        Resultado Paso 1 (Delta)
      </Button>
      <Typography
        variant="h5"
        component="h2"
        style={{
          display: show_delta_abierto ? "block" : "none",
          marginTop: 40,
        }}
      >
        El resultado de delta es : {delta}
      </Typography>
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={() => sethow_partition_abierto(!how_partition_abierto)}
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
          display: how_partition_abierto ? "block" : "none",
          marginTop: 40,
        }}
      >
        <table border={4} style={{ margin: "0 auto" }}>
          <thead>
            <tr>
              <th>X</th>
              <th>Y = Ln (x-2)</th>
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
        onClick={() => setshow_valores_abierto(!show_valores_abierto)}
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
          display: show_valores_abierto ? "block" : "none",
          marginTop: 40,
        }}
      >
        <table border={4} style={{ margin: "0 auto" }}>
          <thead>
            <tr>
              <th>X</th>
              <th>Y = Ln (x-2)</th>
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

export default SIMPSON_ABIERTO;
