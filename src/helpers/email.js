export const enviarCorreo = async () => {
  const response = await fetch("/api/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: "rodrigo.longo1431@gmail.com",
      subject: "Bienvenido a nuestra clínica",
      text: "Gracias por contactarnos.",
      html: "<h1>Gracias por contactarnos</h1><p>Nos pondremos en contacto pronto.</p>",
    }),
  });

  const data = await response.json();
  if (data.ok) {
    console.log("✅ Correo enviado con éxito:", data.messageId);
  } else {
    console.error("❌ Error al enviar correo:", data.error);
  }
};
