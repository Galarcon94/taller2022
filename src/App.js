import "./styles.css";
import Componente from "./apps/Francisco/main";
import AppKaren from "./apps/Karen/main";
import GabrielApp from "./apps/Gabriel/main";
import Componente2 from "./apps/Pedro/main";
import Erik from "./apps/Erick/main";
import AppVictor from "./apps/Victor/main";
export default function App() {
  return (
    <div className="App">
      <h1>Taller desarrollo web colaborativo con React 2022</h1>
      <h2>Todos nuestros participantes :)</h2>
      <GabrielApp />
      <Componente />
      <AppKaren />
      <Componente2 />
      <Erik />
      <AppVictor />
    </div>
  );
}
