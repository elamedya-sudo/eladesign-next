// Dosya: app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Formdan gelen verileri alıyoruz
    const body = await request.json();
    const { firstName, lastName, email, message } = body;

    // SMTP Ayarlarını yapılandırıyoruz (.env.local dosyasından çeker)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true, // 465 portu kullanıyorsan true, 587 ise false yap.
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Gönderilecek Mailin Şablonu
    const mailOptions = {
      from: `"${firstName} ${lastName}" <${process.env.SMTP_USER}>`, // Sunucun kimlik doğrulaması için kendi adresinden çıkmalı
      to: process.env.SMTP_USER, // Maillerin düşmesini istediğin adres
      replyTo: email, // Sen mailden "Yanıtla" dediğinde müşterinin adresine gitsin
      subject: `Yeni İletişim Formu Mesajı: ${firstName} ${lastName}`,
      html: `
        <h3>Web Sitenizden Yeni Bir Mesaj Var</h3>
        <p><strong>Ad Soyad:</strong> ${firstName} ${lastName}</p>
        <p><strong>E-Posta:</strong> ${email}</p>
        <p><strong>Mesaj:</strong></p>
        <p>${message}</p>
      `,
    };

    // Maili gönder
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Mail başarıyla gönderildi." }, { status: 200 });

  } catch (error) {
    console.error("Mail gönderme hatası:", error);
    return NextResponse.json({ message: "Mail gönderilemedi." }, { status: 500 });
  }
}