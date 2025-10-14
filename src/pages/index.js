import CustomHead from "@components/CustomHead";
// import { enviarCorreo } from "@helpers/email";

export default function Home() {
//  const sendmail = async () => await enviarCorreo()
  return (
    <>
      <CustomHead page="index" />
      <section className="layout">
        <h1>HOLA</h1>
        <h2>HOLA</h2>
        <h3>HOLA</h3>
        <p>HOLA</p>
      </section>
    </>
  );
}
