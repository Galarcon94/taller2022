import "./styles.css";
export default function AppPedro() {
  return (
    <div>
      <h2>Pagina de pedro Reyes y Erick</h2>
      <div id="cuerpo">
        <Banner />
        <Cuerpo />
      </div>
    </div>
  );
}

function Banner() {
  return (
    <div id="Banner">
      <img src="https://i.imgur.com/8fh3Q0O.jpg" />
    </div>
  );
}

function Cuerpo() {
  return (
    <div id="main">
      <div id="lateral">
        <table id="menu">
          <tbody>
            <tr>
              <td>
                <a href="./">Michael de Santa</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="./">Trevor Phillips</a>
              </td>
            </tr>
            <tr>
              <td>
                <a href="./">Franklin Clinton</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div id="centro">
        <div className="entrada">
          <div className="imgentrada">
            <img src="https://i.pinimg.com/originals/82/b6/f8/82b6f8f492a71f343c6a60bf27b149ee.jpg" />
          </div>

          <p>
            <b>Trevor Phillips:</b> Es un frecuente consumidor de drogas
            controlado por sus deseos y propenso a ataques violentos y alborotos
            destructivos. Trevor es un ex-piloto militar de cuarenta años de
            edad que ayudaba a su amigo Michael con asaltos en bancos durante
            sus viejos tiempos. El más conocido hasta ahora es el de Ludendorff
            en North Yankton.
          </p>
        </div>
        <div className="entrada">
          <div className="imgentrada">
            <img src="https://gamersrd.com/wp-content/uploads/2021/12/gta-online-franklin-aging-gta-5-fans-GamersRD-1.jpg" />
          </div>

          <p>
            <b>Franklin Clinton:</b> Es un joven ambicioso de 25 años que vivió
            en una pequeña casa en South Los Santos, junto a su tía Denise
            Clinton en el inicio del juego, y acabó viviendo en una mansión en
            Vinewood Hills. Trabajó para un vendedor de autos de lujo armenio
            llamado Simeon Yetarian. Él conoció a Michael De Santa mediante un
            embargo clandestino al vehículo a su hijo, Jimmy De Santa un BeeJay
            XL Amarillo chillón, quien le presentó después a Trevor Philips.{" "}
          </p>
        </div>
        <div className="entrada">
          <div className="imgentrada">
            <img src="https://i.pinimg.com/originals/78/7b/78/787b78dd962c640fd80161f2919427fa.jpg" />
          </div>

          <p>
            <b>Michael De Santa:</b> Es un exitoso ex-ladrón de bancos de la
            costa este, actualmente retirado. Tiene aproximadamente 45 años. Él
            vive en su lujosa mansión con su esposa Amanda, con quien no se
            lleva muy bien, y sus hijos Tracey y James a quienes no entiende.{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
