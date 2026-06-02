import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Frontend'den gelen isimleri aynen burada kullanıyoruz
    const { fullName, company, email, phone, service, message } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ADMIN MAİLİ - Temiz ve Düzenli
    await transporter.sendMail({
      from: `"Ela Teknoloji" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `Yeni Teklif Talebi: ${fullName}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #933c81; border-bottom: 2px solid #933c81; padding-bottom: 10px;">📩 Yeni Bir Teklif Talebi Var!</h2>
          <table style="width: 100%; text-align: left;">
            <tr><td style="padding: 5px 0;"><strong>Ad Soyad:</strong></td><td>${fullName}</td></tr>
            <tr><td style="padding: 5px 0;"><strong>Firma:</strong></td><td>${company || 'Belirtilmedi'}</td></tr>
            <tr><td style="padding: 5px 0;"><strong>E-Posta:</strong></td><td>${email}</td></tr>
            <tr><td style="padding: 5px 0;"><strong>Telefon:</strong></td><td>${phone}</td></tr>
            <tr><td style="padding: 5px 0;"><strong>Hizmet:</strong></td><td>${service}</td></tr>
          </table>
          <h3 style="color: #933c81; margin-top: 20px;">Proje Detayları:</h3>
          <p style="background: #f9f9f9; padding: 15px; border-radius: 5px;">${message || 'Detay belirtilmedi.'}</p>
        </div>
      `,
    });

    // KULLANICIYA YANIT MAİLİ
    await transporter.sendMail({
      from: `"Ela Teknoloji" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Talebinizi aldık - Ela Teknoloji",
      html: `<h3>Merhaba ${fullName},</h3><p>Talebiniz ekibimize ulaştı. En kısa sürede inceleyip size dönüş yapacağız.</p>`,
    });

    return NextResponse.json({ message: "Başarılı" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Hata" }, { status: 500 });
  }
}