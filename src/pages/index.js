import { useState } from "react";
import Image from "next/image";
import CustomHead from "@components/CustomHead";
import logo from "@assets/logo/logo.png"
import logo_w from "@assets/logo/logo_w.jpg"
import consiste from "@assets/imgs/consiste.png"
import sinimg from "@assets/imgs/SinInversion.png"
import conimg from "@assets/imgs/ConInversion.png"
import inversion from "@assets/imgs/InversionPrevia.png"
import calendar from "@assets/imgs/Calendar.png"
import chart from "@assets/icons/ChartUpPink.svg"
import clock from "@assets/icons/RelojPink.svg"
import seguridad from "@assets/icons/SecurePink.svg"
import chartmix from "@assets/icons/ChartUpMixed.svg"
import igual from "@assets/icons/bars.svg"
import acelerar from "@assets/icons/Acelerar.svg"


export default function Home() {
  const [faq, setFaq] = useState(0);
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
        <a href="https://www.bzconsultores.es/" target="_blank" rel="noreferrer" className="logo">
          <div className="img">
            <Image
              src={logo}
              alt={'text'}
              fill
              sizes='100vw'
              priority
              className="image"
            />
          </div>
        </a>
      </section>
      <section className="hero">
        <h1 className="title">INVERSIÓN EN CULTURA</h1>
        <h2 className="subtitle">La estrategia fiscal más rentable</h2>
      </section>
      <div className="textContainer">
        <p className="text">En BZ Consultores somos especialistas en la <span className="text-bold">deducción fiscal más rentable y sencilla:</span></p>
        <p className="text mt2">Inviertes en cultura y obtienes una deducción del 120% de lo aportado. <span className="text-bold">Legal, seguro y rentable</span>.</p>
      </div>
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
        <h3 className="header">1. ¿Quién puede beneficiarse?</h3>
        <p className="text mt3">Esta solución de ahorro fiscal está dirigida a <span className="text-bold">empresas con un pago elevado en el Impuesto de Sociedades</span>, que buscan <span className="text-bold">optimizar su carga fiscal</span> y, al mismo tiempo, obtener una <span className="text-bold">rentabilidad atractiva</span> de manera segura.</p>
      </div>

      <div className="beneficio-imgs">
        <div className="container">
          <div className="beneficioimg">
            <div className="img">
              <Image
                src={acelerar}
                alt={'text'}
                fill
                sizes='100vw'
                priority
                className="image"
              />
            </div>
          </div>
          <p className="text text-sm">Mayor inversión</p>
        </div>
        <div className="container">
          <div className="beneficioimg beneficioimg-2">
            <div className="img">
              <Image
                src={igual}
                alt={'text'}
                fill
                sizes='100vw'
                priority
                className="image"
              />
            </div>
          </div>
        </div>
        <div className="container">
          <div className="beneficioimg">
            <div className="img">
              <Image
                src={chartmix}
                alt={'text'}
                fill
                sizes='100vw'
                priority
                className="image"
              />
            </div>
          </div>
          <p className="text text-sm">Mayor ahorro fiscal</p>
        </div>
      </div>

      <div className="textContainer textContainer-squares ">
        <p className="text text-bold text-blue">Colaboramos directamente con directores financieros, fiscalistas internos de grandes empresas, Family Offices y despachos legales para conseguir optimizar los resultados financieros y reducir la carga fiscal de las empresas</p>
      </div>


      <div className="textContainer">
        <h3 className="header">2. ¿En qué consiste?</h3>
        <p className="text mt3">El inversor y el promotor de un proyecto cultural firman un contrato de financiación mediante el cual intercambian <span className="text-bold">financiación</span> (100% inversión) por un <span className="text-bold">crédito fiscal</span> (120% deducción fiscal). Es decir, el inversor recupera el 100% de su inversión más un 20% de rentabilidad.</p>
      </div>

      <div className="consiste-imgs">
        <div className="container">
          <div className="consisteimg">
            <div className="img">
              <Image
                src={consiste}
                alt={'text'}
                fill
                sizes='100vw'
                priority
                className="image"
              />
            </div>
          </div>
        </div>
      </div>


      <div className="textContainer">
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

      <div className="textContainer textContainer-fit textContainer-squares">
        <p className="text text-bold text-blue">Transforma tu Impuesto de Sociedades en un 20% de rentabilidad</p>
      </div>

      <section className="textContainer">
        <h3 className="header">3. ¿Qué rentabilidad puedo obtener?</h3>
      </section>
      <section className="textContainer textContainer-quotes">
        <div className="quote-left" />
        <div className="quote-right" />
        <p className="text">Decidí invertir a través de esta herramienta 300.000 euros en Septiembre. Recuperé mi inversión y he obtenido un beneficio de 60.000 euros en solo 10 meses.</p>
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
        <h3 className="subtitle text-blue text-bold">Calcula tu ahorro fiscal</h3>
      </div>
      <section className="calculadora">
        <div className="calculadora_interior">
          <div className="left">
            <p className="text text-white">Introduce la base imponible estimada de tu próximo Impuesto de sociedades y calcula la rentabilidad máxima que puedes obtener.</p>
            <div className="currency-input mt2">
              <input
                type="text" // 👈 Importante: no "number", porque "number" no deja mostrar el símbolo €
                value={value ? `${Number(value).toLocaleString("es-ES")}` : ""}
                onChange={handleChange}
                placeholder="Ejemplo: 1.000.000"
                inputMode="numeric" // muestra teclado numérico en móviles
                pattern="[0-9]*"
              />
            </div>
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
            <div className="calculos_celdas calculos_celdas-fin">
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

      <div className="textContainer">
        <h3 className="header">4. ¿Cuándo invertir?</h3>
        <p className="text">Para poder aplicar la deducción en tu próximo Impuesto de Sociedades, debes realizar la inversión <span className="text-bold">antes de que termine el ejercicio fiscal</span> correspondiente.</p>
        <p className="text mt2">En todo caso, al ser una de las deducciones más rentables de la normativa actual, es cada vez más demandada, por lo que cuando se agotan los proyectos a financiar, es necesario esperar al siguiente ejercicio para poder invertir.</p>
      </div>

      <div className="calendar-imgs mt4">
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
      </div>
      <div className="textContainer mt4 textContainer-fit textContainer-squares">
        <p className="text text-bold text-blue">¡Invierte ahora y ahorra hasta el 50% de tu próximo Impuesto de Sociedades!</p>
      </div>

      <div className="textContainer">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeDgQO-MD1rxP7dsa6-dCS_K8H0ISIXuET5EGekCAVVG3mRNw/viewform?usp=preview" target="_blank" rel="noreferrer" className="button">Contáctanos para empezar</a>
      </div>

      <div className="textContainer">
        <h3 className="header header-light">Preguntas frecuentes​</h3>
      </div>
      <div className="faqs">
        <div className="faq">
          <div onClick={() => setFaq(prev => prev === 1 ? 0 : 1)} className="faq_top"><p className="text text-bold">¿Es segura esta inversión?</p> <div className={`chevron ${faq === 1 ? 'chevron-up' : ''}`} /></div>
          {faq === 1 && <div className="faq_text">
            <p className="text">La normativa que regula este incentivo fiscal se encuentra en la Ley del Impuesto sobre Sociedades, en sus artículos 36 y 39.7.</p>
            <p className="text mt2">Puedes consultar aquí: <a href="https://sede.agenciatributaria.gob.es/Sede/ayuda/manuales-videos-folletos/manuales-practicos/manual-sociedades-2024/capitulo-06-liquidacion-is-determinacion-tributaria/cuota-liquida-casilla-00592/deducc-incentiv-determ-activ-sujetas-lis/deducc-incent-determinadas-actividades-periodo-impositivo/deducc-contribuy-participa-financ-producc-vivo.html" target="_blank" rel="noreferrer">Deducción por inversiones en espectáculos en vivo de artes escénicas y musicales.</a></p>
          </div>}
        </div>
        <div className="faq">
          <div onClick={() => setFaq(prev => prev === 2 ? 0 : 2)} className="faq_top"><p className="text text-bold">¿Quién se encarga de todos los trámites legales?</p> <div className={`chevron ${faq === 2 ? 'chevron-up' : ''}`} /></div>
          {faq === 2 && <div className="faq_text">
            <p className="text">En BZ Consultores nos ocupamos del proceso de principio a fin, con todas las garantías legales para que tú solo obtengas la rentabilidad del 20% en tu próximo impuesto:</p>
            <div className="bullets">
              <div className="b"><div className="square" /><p className="text">Auditoría de los proyectos de los promotores</p></div>
              <div className="b"><div className="square" /><p className="text">Contrato de financiación</p></div>
              <div className="b"><div className="square" /><p className="text">Certificados de los organismos correspondientes</p></div>
              <div className="b"><div className="square" /><p className="text">Comunicación a la Administración Tributaria.</p></div>
            </div>
          </div>}
        </div>
        <div className="faq">
          <div onClick={() => setFaq(prev => prev === 3 ? 0 : 3)} className="faq_top"><p className="text text-bold">¿Qué límite hay para invertir en el ejercicio?</p> <div className={`chevron ${faq === 3 ? 'chevron-up' : ''}`} /></div>
          {faq === 3 && <div className="faq_text">
            <p className="text">La deducción aplicada te permite ahorrar hasta el 50% de tu Impuesto de Sociedades.</p>
          </div>}
        </div>
        <div className="faq faq-bn">
          <div onClick={() => setFaq(prev => prev === 4 ? 0 : 4)} className="faq_top"><p className="text text-bold">¿Y si invierto más y no puedo aplicar toda la deducción generada? </p> <div className={`chevron ${faq === 4 ? 'chevron-up' : ''}`} /></div>
          {faq === 4 && <div className="faq_text">
            <p className="text">La deducción generada y no aplicada en el ejercicio no la pierdes, puedes aplicarla en los próximos 15 ejercicios.</p>
          </div>}
        </div>
      </div>

      <div className="footer">
        <div className="footer_top">
          <div className="footer_logo">
            <div className="logo">
              <div className="img">
                <Image
                  src={logo_w}
                  alt={'text'}
                  fill
                  sizes='100vw'
                  priority
                  className="image"
                />
              </div>
            </div>
          </div>
          <div className="footer_text">
            <p className="">INFORMACIÓN DE CONTACTO</p>
            <p className="mt2">Llámanos 932 096 399</p>
            <p className="mt2">bz@bzconsultores.es</p>
            <p className="mt2">Tuset 27 7º-1ª 08006 Barcelona</p>
          </div>
          <div className="footer_text">
            <p className="">HORARIO DE APERTURA</p>
            <p className="mt2">Lun - Jue 9-14h | 15-18h</p>
            <p className="mt2">Viernes: 8-15h</p>
          </div>
        </div>
        <div className="footer_bottom">
          <p>BZ Consultores C 2025 Todos los derechos reservados</p>
          <div className="footer_bottom_right">
            <a href="https://www.bzconsultores.es/politica-cookies/" target="_blank" rel="noreferrer">POLÍTICA DE COOKIES</a>
            <p className="dn">|</p>
            <a href="https://www.bzconsultores.es/politica-privacidad/" target="_blank" rel="noreferrer">POLÍTICA DE PRIVACIDAD</a>
            <p className="dn">|</p>
            <a href="https://www.bzconsultores.es/aviso-legal/" target="_blank" rel="noreferrer">AVISO LEGAL</a>
          </div>
        </div>
      </div>

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