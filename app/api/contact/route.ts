import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // 465 kullanıyorsan true, 587 ise false
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 1. SİZE GELECEK MAİL (ADMIN)
    const adminMail = {
      from: `"${firstName} ${lastName}" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      replyTo: email,
      subject: `Yeni Proje Talebi: ${firstName} ${lastName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; border: 1px solid #ddd; padding: 20px; border-radius: 10px;">
          <h2 style="color: #933c81;">📩 Yeni Bir Talep Var!</h2>
          <p>Siteden yeni bir form gönderildi:</p>
          <ul style="list-style: none; padding: 0;">
            <li><strong>Ad Soyad:</strong> ${firstName} ${lastName}</li>
            <li><strong>E-Posta:</strong> ${email}</li>
            <li><strong>Telefon:</strong> ${phone}</li>
          </ul>
          <p><strong>Mesaj:</strong><br>${message}</p>
        </div>
      `,
    };

    // 2. KULLANICIYA GİDECEK MAİL (AUTO-REPLY)
    const userMail = {
      from: `"Ela Teknoloji" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Talebinizi aldık - Ela Teknoloji",
      html: `
        <div style="font-family: sans-serif; max-width: 600px; padding: 20px;">
          <h2 style="color: #933c81;">Merhaba ${firstName},</h2>
          <p>Ela Teknoloji olarak talebinizi aldık, ilginiz için teşekkür ederiz.</p>
          <p>Ekibimiz mesajınızı inceleyip size en kısa sürede dönüş yapacaktır.</p>
          <hr>
          <p><strong>Ela Teknoloji ve Tasarım</strong><br>
          Ataşehir / İstanbul<br>
          +90 (216) 576 58 26</p>
        </div>
      `,
    };

    await transporter.sendMail(adminMail);
    await transporter.sendMail(userMail);

    return NextResponse.json({ message: "Mail başarıyla gönderildi." }, { status: 200 });

  } catch (error) {
    console.error("Mail gönderme hatası:", error);
    return NextResponse.json({ message: "Mail gönderilemedi." }, { status: 500 });
  }
}