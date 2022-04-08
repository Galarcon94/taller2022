import "./styles.css";
import Componente from "./apps/Francisco/main";
import GabrielApp from "./apps/Gabriel/main";

export default function App() {
  return (
    <div className="App">
      <h1>Taller desarrollo web colaborativo con React 2022</h1>
      <h2>Todos nuestros participantes :)</h2>
      <GabrielApp />
      <Componente />
    </div>
  );
}
