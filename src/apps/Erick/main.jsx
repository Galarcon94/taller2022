import moduleStyles from "./styles/index.module.css";
import imagenes from "./img/clubAmerica.jpg";
export default function AppErick() {
  return (
    <div className="App">
      <body bgcolor="blue">
        <header>
          <h1 className={moduleStyles.h1}>Hola soy Erick</h1>
          <h2> Sitio sencillo</h2>
          <hr />
        </header>

        <blockquote>
          <div align="center">
            <h2>AMERICA</h2>
            <img className={moduleStyles.img} src={imagenes} alt="America" />
          </div>
          <p className={moduleStyles.p}>
            El Club de Fútbol América S. A. de C. V., es un equipo de fútbol
            ​profesional de la Primera División de México.br Fue fundado el 12
            de octubre de 1916 en la Ciudad de México, por un grupo de
            estudiantes encabezados por el jugador Rafael Garza Gutiérrez, y el
            profesor y entrenador Eugenio Cenoz. Disputa sus partidos, como
            local, en el Estadio Azteca, y los colores tradicionales del
            uniforme americanista son el amarillo y el azul.
          </p>
        </blockquote>
        <hr />
        <div>
          <footer>
            <p>Erick David Arce Leyva</p>
            <p>TALLER Desarrollo Web Colaborativo con REACT 2021</p>
          </footer>
        </div>
      </body>
    </div>
  );
}
