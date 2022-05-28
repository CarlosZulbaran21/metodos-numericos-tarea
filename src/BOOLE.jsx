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
} from "./jorge-boole";

const BOOLE = () => {
  const [show_delta_boole, setshow_delta_boole] = React.useState(false);
  const [show_partition_boole, setshow_partition_boole] = React.useState(false);
  const [show_valores_boole, setshow_valores_boole] = React.useState(false);
  return (
    <>
      <img src={require("./Boole.jpeg")} alt="trapezoidal" />
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setshow_delta_boole(!show_delta_boole)}
      >
        Resultado Paso 1 (Delta)
      </Button>
      <Typography
        variant="h5"
        component="h2"
        style={{
          display: show_delta_boole ? "block" : "none",
          marginTop: 40,
        }}
      >
        El resultado de delta es : {delta}
      </Typography>
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setshow_partition_boole(!show_partition_boole)}
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
          display: show_partition_boole ? "block" : "none",
          marginTop: 40,
        }}
      >
        <table border={4} style={{ margin: "0 auto" }}>
          <thead>
            <tr>
              <th>X</th>
              <th>Y = 3^x</th>
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
        onClick={() => setshow_valores_boole(!show_valores_boole)}
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
          display: show_valores_boole ? "block" : "none",
          marginTop: 40,
        }}
      >
        <table border={4} style={{ margin: "0 auto" }}>
          <thead>
            <tr>
              <th>X</th>
              <th>Y = 3^x</th>
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

export default BOOLE;
