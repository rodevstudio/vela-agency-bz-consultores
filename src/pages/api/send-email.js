// src/pages/api/send-email.js  (o pages/api/send-email.js)
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Método no permitido' })
  }

  try {
    const { to, subject, text, html, attachments } = req.body || {}

    if (!to || !subject || (!text && !html)) {
      return res.status(400).json({ ok: false, error: 'Faltan datos para el envío de correo' })
    }

    const host = process.env.MAIL_HOST
    const port = process.env.MAIL_PORT ? parseInt(process.env.MAIL_PORT, 10) : undefined
    const secure = process.env.MAIL_SECURE === 'true'
    const user = process.env.MAILING_EMAIL
    const pass = process.env.MAILING_PASSWORD

    if (!host || !port || !user || !pass) {
      return res.status(500).json({ ok: false, error: 'Config SMTP incompleta' })
    }

    const transporter = nodemailer.createTransport({
      host, port, secure,
      auth: { user, pass },
    })

    const info = await transporter.sendMail({
      from: `"Roomie Reports" <${process.env.MAILING_EMAIL}>`,
      to, subject, text, html, attachments,
    })

    console.log('✅ Correo enviado:', info.messageId)
    return res.status(200).json({ ok: true, messageId: info.messageId })
  } catch (err) {
    console.error('❌ Error enviando correo:', err)
    return res.status(500).json({ ok: false, error: err?.message ?? 'Error interno' })
  }
}
