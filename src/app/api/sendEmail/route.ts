import { NextResponse } from 'next/server'
import { createTransport } from 'nodemailer'

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json()  

  const userData = {
    name: name,
    email: email,
    subject: subject,
    message: message
  }

  try {
    const transporter = createTransport({
      // FIXME: adapter nodemailer with ts
      // @ts-ignore
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
        clientId: process.env.EMAIL_CLIENT_ID,
        clientSecret: process.env.EMAIL_CLIENT_SECRET,
        refreshToken: process.env.EMAIL_REFRESH_TOKEN
      },
    });
  
    // Set settings mail
    const mailOptions = {
      from: `${email}`,
      to: 'nahuel.scheytt@gmail.com',
      subject: `${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };
  
    await transporter.sendMail(mailOptions);
  
    return NextResponse.json({ data: userData }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ message: 'Error submitting form' }, { status: 500 })
  }
}