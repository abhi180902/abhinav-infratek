import nodemailer from 'nodemailer'

export async function sendOwnerEmail({ subject, text }) {
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) return false

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
  })

  await transporter.sendMail({
    from: `Abhinav Infratek Website <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_USER,
    subject,
    text
  })

  return true
}
