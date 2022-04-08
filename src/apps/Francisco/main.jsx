import moduleStyles from "./styles.module.css";

export default function AppFrancisco() {
  return (
    <div>
      <body className={moduleStyles.cuerpo}>
        <div className={moduleStyles.principal}>
          <div className={moduleStyles.menu}>
            <li className={moduleStyles.li}>
              <img
                src="https://i.imgur.com/6qdoIgH.png"
                className={moduleStyles.imagen}
              ></img>
            </li>
            <li className={moduleStyles.li}>
              <a className={moduleStyles.a} href="./main.jsx">
                Inicio
              </a>
            </li>
          </div>
          <div className={moduleStyles.presentacion}>
            <h1>Los beneficios de la cosmética natural</h1>
            <img
              src="https://i.imgur.com/UjECsMM.jpg"
              className={moduleStyles.imagenPresentacion}
            ></img>
          </div>
          <div className={moduleStyles.desarrollo}>
            <h2>¿Cuál es la diferencia de la cosmética tradicional?</h2>
            <p align="justify">
              Cada vez es más común ver productos con ingredientes vegetales y
              naturales en los comercios. Esta tendencia crece cada vez más
              seguidores debido a los problemas dermatológicos que pueden
              provocar algunos químicos utilizados en la cosmética para acelerar
              los efectos de sus productos.
            </p>
            <p align="justify">
              Los cosméticos naturales intentan asemejarse al manto lípido de la
              piel, integrando sustancias que tengan la mayor afinidad posible.
              Por eso, se recurre, por ejemplo, a la manzanilla para
              desinflamarla, a la miel para aportarle luminosidad; al limón para
              limpiar el cabello y al aguacate para hidratarlo.
            </p>
            <h3 align="justify">
              Entre las ventajas de esta clase de cosméticos, están:{" "}
            </h3>
            <ol align="left">
              <li>
                No contienen aromas sintéticos, ni conservantes o perfumes
                artificiales.
              </li>
              <li>Se adaptan muy bien a cada tipo de piel.</li>
              <li>
                No utilizan componentes químicos derivados del petróleo, ni
                aditivos artificiales.
              </li>
              <li>Regeneran, cuidan y protegen la piel con eficacia.</li>
            </ol>
          </div>
        </div>
      </body>
    </div>
  );
}
