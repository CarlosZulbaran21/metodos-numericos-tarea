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
} from "./simpson3-8";

const SIMPSON3_8 = () => {
  const [show_delta_3_8, setshow_delta_3_8] = React.useState(false);
  const [how_partition_3_8, sethow_partition_3_8] = React.useState(false);
  const [show_valores_3_8, setshow_valores_3_8] = React.useState(false);
  return (
    <>
      <img src={require("./SIMPSON3-8.jpeg")} alt="trapezoidal" />
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={() => setshow_delta_3_8(!show_delta_3_8)}
      >
        Resultado Paso 1 (Delta)
      </Button>
      <Typography
        variant="h5"
        component="h2"
        style={{
          display: show_delta_3_8 ? "block" : "none",
          marginTop: 40,
        }}
      >
        El resultado de delta es : {delta}
      </Typography>
      <br />
      <Button
        variant="contained"
        color="primary"
        onClick={() => sethow_partition_3_8(!how_partition_3_8)}
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
          display: how_partition_3_8 ? "block" : "none",
          marginTop: 40,
        }}
      >
        <table border={4} style={{ margin: "0 auto" }}>
          <thead>
            <tr>
              <th>X</th>
              <th>Y = y = V(x - 2) (raiz cuadrada</th>
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
        onClick={() => setshow_valores_3_8(!show_valores_3_8)}
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
          display: show_valores_3_8 ? "block" : "none",
          marginTop: 40,
        }}
      >
        <table border={4} style={{ margin: "0 auto" }}>
          <thead>
            <tr>
              <th>X</th>
              <th>Y = y = V(x - 2) (raiz cuadrada)</th>
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

export default SIMPSON3_8;
