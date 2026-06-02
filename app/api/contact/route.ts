// Dosya: app/api/contact/route.ts
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const body = await request.json();
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

    // 1. SİZE GELECEK MAİL (ADMIN)
    const adminHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
        <h2 style="color: #933c81; border-bottom: 2px solid #933c81; padding-bottom: 10px;">📩 Yeni Bir Teklif Talebi Var!</h2>
        <table style="width: 100%; text-align: left; border-collapse: collapse;">
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Ad Soyad:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${fullName || 'Belirtilmedi'}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Firma:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${company || 'Belirtilmedi'}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>E-Posta:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${email || 'Belirtilmedi'}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Telefon:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${phone || 'Belirtilmedi'}</td></tr>
          <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Hizmet:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${service || 'Belirtilmedi'}</td></tr>
        </table>
        <h3 style="color: #933c81; margin-top: 20px;">Proje Detayları:</h3>
        <p style="background: #f9f9f9; padding: 15px; border-radius: 5px; border-left: 4px solid #933c81;">${message || 'Detay belirtilmedi.'}</p>
      </div>
    `;

    // 2. KULLANICIYA YANIT MAİLİ
    const userHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px;">
        <h2 style="color: #933c81;">Merhaba ${fullName || 'Sayın Yetkili'},</h2>
        <p>Ela Teknoloji olarak projenizle ilgili talebinizi aldık, ilginiz için teşekkür ederiz.</p>
        <p>Uzman ekibimiz mesajınızı inceleyip size en kısa sürede dönüş yapacaktır.</p>
        <div style="margin-top: 20px; border-top: 1px solid #eee; padding-top: 20px;">
          <p><strong>Ela Teknoloji ve Tasarım</strong><br>
          Ataşehir / İstanbul<br>
          0216 576 58 26 | <a href="https://www.eladesign.org">www.eladesign.org</a></p>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Ela Teknoloji" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER,
      subject: `Yeni Teklif Talebi: ${fullName}`,
      html: adminHtml,
    });

    await transporter.sendMail({
      from: `"Ela Teknoloji" <${process.env.SMTP_USER}>`,
      to: email,
      subject: "Talebinizi aldık - Ela Teknoloji",
      html: userHtml,
    });

    return NextResponse.json({ message: "Başarılı" }, { status: 200 });

  } catch (error) {
    console.error("Mail hatası:", error);
    return NextResponse.json({ message: "Hata" }, { status: 500 });
  }
}