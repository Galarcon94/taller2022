import img from "./rollo.jpg";
import img2 from "./Ramen.jpg";
export default function AppVictor() {
  return (
    <div className="App">
      <h1>Victor Manuel Naranjo Giles</h1>
      <h2>Saludos a todos, que la fuerza este de tu lado</h2>
      <h1>Restaurante</h1>
      <div>
        <p>Rollo California</p>
        <p>
          Rollo de sushi empanizado relleno con aguacate atun y trozos de pulpo
          acompañado con salsa de soja
        </p>
        <img src={img} />
      </div>
      <h1> RAMEN DE CERDO </h1>
      <div>
        <p>
          Ramen es un caldo con su base en pescado y huesos de res con miso,
          acompañado con fideos, huevo duro, germinado, filetes de cerdo ahumado
        </p>
        <img src={img2} />
      </div>
    </div>
  );
}
