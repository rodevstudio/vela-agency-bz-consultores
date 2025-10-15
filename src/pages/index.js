import { useState } from "react";
import Image from "next/image";
import CustomHead from "@components/CustomHead";
import sinimg from "@assets/imgs/SinInversion.png"
import conimg from "@assets/imgs/ConInversion.png"
import inversion from "@assets/imgs/InversionPrevia.png"
import calendar from "@assets/imgs/Calendar.png"
import chart from "@assets/icons/ChartUpPink.svg"
import clock from "@assets/icons/RelojPink.svg"
import seguridad from "@assets/icons/SecurePink.svg"


export default function Home() {
  const [value, setValue] = useState("");
  const [v1, setV1] = useState(250000.00)
  const [v2, setV2] = useState(125000.00)
  const [v3, setV3] = useState(104166.67)
  const [v4, setV4] = useState(20833.33)
  const steps = [
    'Determinación de la inversión óptima a realizar',
    'Contrato de financiación',
    'Desembolso de la inversión',
    'Preparación de la documentación legal',
    'Comunicación a la Administración Tributaria',
    'Aplicación de la deducción fiscal en el Impuesto de Sociedades',
  ]
  const handleChange = (e) => {
    // Obtener solo los dígitos
    const numericValue = e.target.value.replace(/\D/g, "");

    const cuota = numericValue * 0.25
    const deduccion = cuota * 0.5
    const inversion = deduccion / 1.2
    const rentabilidad = inversion * 0.2


    setV1(cuota.toFixed(2))
    setV2(deduccion.toFixed(2))
    setV3(inversion.toFixed(2))
    setV4(rentabilidad.toFixed(2))
    setValue(numericValue);
  };
  return (
    <>
      <CustomHead page="index" />
      <section className="topbar">
        <div className="logo"></div>
      </section>
      <section className="hero">
        <h1 className="title">INVERSIÓN EN CULTURA</h1>
        <h2 className="subtitle">Tranforma tu Impuesto de Sociedades en un 20% de rentabilidad</h2>
      </section>
      <section className="cards-section">
        <IconCard
          icon={chart}
          text='Rentabilidad garantizada del 20%'
        />
        <IconCard
          icon={clock}
          text='Corto plazo'
        />
        <IconCard
          icon={seguridad}
          text='Seguridad'
        />
      </section>
      <div className="textContainer">
        <p className="text">En BZ Consultores somos especialistas en la <span className="text-bold">deducción fiscal más rentable y sencilla:</span> <br /> inviertes en cultura y obtienes una deducción del 120 de lo aportado. <span className="text-bold">Legal, seguro y rentable</span>.</p>
      </div>
      <div className="textContainer">
        <h3 className="header">¿En qué consiste?</h3>
        <p className="text">La &quot;inversión en cultura&quot; es una herramienta jurídica sencilla: mediante una inversión en proyectos culturales (música, teatro o danza) los inversores privados obtienen una rentabilidad del 20% a través de una deducción en el Impuesto de Sociedades.</p>
      </div>
      <div className="textContainer">
        <h3 className="header">¿Quién puede beneficiarse?</h3>
        <p className="text">Esta solución de ahorro fiscal está dirigida a <span className="text-bold">empresas con un pago elevado en el Impuesto de Sociedades</span>, que buscan <span className="text-bold">optimizar su carga fiscal</span> y, al mismo tiempo, obtener una <span className="text-bold">rentabilidad atractiva</span> de manera segura.</p>
      </div>
      <div className="textContainer">
        <p className="text">Colaboramos directamente con <span className="text-bold">directores financieros</span> y <span className="text-bold">fiscalistas internos</span> de grandes empresas y despachos legales para que cada operación sea segura.</p>
      </div>
      <div className="textContainer">
        <h3 className="header">¿Cómo?</h3>
        <div className="textContainer-left">
          <p className="text">El funcionamiento es muy sencillo:</p>
          <ul>
            <li className="text">El <span className="text-bold">inversor</span> realiza una <span className="text-bold">aportación del 100%</span> (ejemplo: 300.000 €).</li>
            <li className="text">Esta cantidad genera una <span className="text-bold">deducción fiscal del 120%</span> en el Impuesto de Sociedades (ejemplo: 360.000 €).</li>
            <li className="text">Además, el inversor recibe una <span className="text-bold">rentabilidad garantizada del 20%</span> (ejemplo: 60.000 €).</li>
          </ul>
          <p className="text">De esta manera, tu empresa obtiene un <span className="text-bold">ahorro fiscal muy significativo</span>, al mismo tiempo que logra una <span className="text-bold">rentabilidad segura</span> y contribuye <span className="text-bold">al impulso de la cultura</span>.</p>
        </div>
      </div>
      <div className="textContainer">
        <h3 className="header">Pasos a seguir</h3>
        <p className="text">Con BZ Consultores, el inversor solo invierte en un proyecto seguro y aplica la deducción fiscal en su próximo Impuesto de Sociedades. De todo lo demás, se encargan los profesionales espeicializados.</p>
      </div>
      <section className="cards-section">
        {steps && steps.map((t, i) => <NumCard
          key={i}
          i={i + 1}
          text={t}
        />
        )}
      </section>
      <div className="calendar-imgs">
        <div className="calendarimg">
          <div className="img">
            <Image
              src={calendar}
              alt={'text'}
              fill
              sizes='100vw'
              priority
              className="image"
            />
          </div>
        </div>
        <div className="textContainer textContainer-left  textContainer-m0">
          <h3 className="header">¿Cuándo?</h3>
          <p className="text">La inversión debe realizarse antes de fin de ejercicio. Cada vez más empresas utilizan esta deducción sencilla y altamente rentable, por lo que los proyectos culturales disponibles se agotan rápido.</p>
          <p className="text text-bold mt2">¡Invierte ahora y ahorra hasta el 50% de tu Impuesto de Sociedades en julio de 2026!</p>
        </div>
      </div>
      <section className="hero mt10">
        <h3 className="header text-white">Pongamos números</h3>
        <p className="text text-white mt2">“Decidí invertir a través de estaherramienta en el 2024. Hice una aportaciónde 300.000 euros enseptiembre. Recuperé mi inversión y he obtenido un beneficio de 60.000 € en solo 10 meses”.</p>
      </section>
      <section className="inversion-imgs">
        <div className="inversionimg">
          <div className="img">
            <Image
              src={sinimg}
              alt={'text'}
              fill
              sizes='100vw'
              priority
              className="image"
            />
          </div>
        </div>
        <div className="inversionimg">
          <div className="img">
            <Image
              src={conimg}
              alt={'text'}
              fill
              sizes='100vw'
              priority
              className="image"
            />
          </div>
        </div>
      </section>
      <section className="inversion-imgs inversion-imgs-2">
        <div className="inversionimg inversionimg-2">
          <div className="img">
            <Image
              src={inversion}
              alt={'text'}
              fill
              sizes='100vw'
              priority
              className="image"
            />
          </div>
        </div>
      </section>
      <div className="textContainer">
        <h3 className="header">CALCULADORA BZ</h3>
      </div>
      <section className="calculadora">
        <div className="calculadora_interior">
          <div className="left">
            <p className="text">Introduce la base imponible estimada de tu próximo Impuesto de sociedades y calcula la rentabilidad máxima que puedes obtener.</p>
            <input
              type="text" // 👈 Importante: no "number", porque "number" no deja mostrar el símbolo €
              value={value ? `${Number(value).toLocaleString("es-ES")}€` : ""}
              onChange={handleChange}
              placeholder="Ejemplo: 1.000.000€"
              className="mt5"
              inputMode="numeric" // muestra teclado numérico en móviles
              pattern="[0-9]*"
            />
          </div>
          <div className="calculos">
            <div className="calculos_celdas">
              <p className="text">Cuota íntegra (25%)</p>
              <p className="text">{Number(v1).toLocaleString("es-ES")} €</p>
            </div>
            <div className="calculos_celdas">
              <p className="text">Deducción inversión</p>
              <p className="text">{Number(v2).toLocaleString("es-ES")} €</p>
            </div>
            <div className="calculos_celdas">
              <p className="text">Inversión óptima</p>
              <p className="text">{Number(v3).toLocaleString("es-ES")} €</p>
            </div>
            <div className="calculos_celdas calculos_celdas-fin">
              <p className="text text-bold">Rentabilidad obtenida (20%)</p>
              <p className="text text-bold">{Number(v4).toLocaleString("es-ES")} €</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



const IconCard = ({ icon, text }) => {
  return (
    <div className="iconcard">
      <div className="icon-container">
        <div className="icon">
          <Image
            src={icon}
            alt={text}
            fill
            sizes='100vw'
            priority
            className="image"
          />
        </div>
      </div>
      <p className="text text-sm">{text}</p>
    </div>
  )
}

const NumCard = ({ i, text }) => {
  return (
    <div className="numcard">
      <p className="num header">{i}</p>
      <p className="text">{text}</p>
    </div>
  )
}