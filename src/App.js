import "./styles.css";
import Componente from "./apps/Francisco/main";
import AppKaren from "./apps/Karen/main";
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Componente />
      <AppKaren />
    </div>
  );
}
