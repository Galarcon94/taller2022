import React, { useState } from "react";
import "./styles.css";
import Componente from "./apps/Francisco/main";
import AppKaren from "./apps/Karen/main";
//import GabrielApp from "./apps/Gabriel/main";
import Componente2 from "./apps/Pedro/main";
import Erick from "./apps/Erick/main";
import AppVictor from "./apps/Victor/main";

export default function App() {
  const [_sel, set_sel] = useState("");

  return (
    <div>
      <h1>Taller desarrollo web colaborativo con React 2022</h1>
      <h2>Nuestros colaboradores :)</h2>
      <button
        onClick={() => {
          set_sel("Francisco");
        }}
      >
        Francisco
      </button>
      <button
        onClick={() => {
          set_sel("Karen");
        }}
      >
        Karen
      </button>
      <button
        onClick={() => {
          set_sel("Pedro");
        }}
      >
        Pedro
      </button>
      <button
        onClick={() => {
          set_sel("Erick");
        }}
      >
        Erick
      </button>
      <button
        onClick={() => {
          set_sel("Victor");
        }}
      >
        Victor
      </button>
      <br />
      Muchas gracias n.n/
      <hr />
      <div>
        {_sel === "Francisco" && <Componente />}
        {_sel === "Karen" && <AppKaren />}
        {_sel === "Pedro" && <Componente2 />}
        {_sel === "Erick" && <Erick />}
        {_sel === "Victor" && <AppVictor />}
      </div>
    </div>
  );
}
