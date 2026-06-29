import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, reportTemplate } = body;

    // Vercel'deki SMTP ayarlarınla bağlantı kuruyoruz
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: Number(process.env.SMTP_PORT) === 465, // Port 465 ise true, 587 ise false olur
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 1. Müşteriye Gidecek Prestijli Mail
    const clientMailOptions = {
      from: `"Ela Design" <${process.env.SMTP_USER}>`,
      to: email,
      subject: `${name}, Ela Design Proje Analiziniz Hazır!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <h2 style="color: #933c81;">Sayın ${name},</h2>
          <p>Web sitemiz üzerinden yaptığınız analiz sonucuna göre, projeniz için en uygun teknoloji stratejisi belirlenmiştir:</p>
          <div style="background-color: #f8f9fa; padding: 25px; border-left: 4px solid #933c81; margin: 20px 0; border-radius: 4px;">
            <h3 style="margin-top: 0; color: #1e293b; font-size: 20px;">${reportTemplate.title}</h3>
            <p style="font-size: 16px;"><strong>Tahmini Bütçe:</strong> ${reportTemplate.price}</p>
            <p style="font-size: 16px;"><strong>Proje Süresi:</strong> ${reportTemplate.timeline}</p>
            <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 15px 0;">
            <p style="color: #475569; line-height: 1.6;">${reportTemplate.content}</p>
          </div>
          <p>Bu rapor bir ön değerlendirmedir. Projenin teknik detaylarını ve tam kapsamını görüşmek üzere en kısa sürede <strong>${phone}</strong> numarasından sizinle iletişime geçeceğiz.</p>
          <br/>
          <p>Saygılarımızla,<br><strong style="color: #933c81;">Ela Design Ekibi</strong></p>
        </div>
      `,
    };

    // 2. Sana (Hüseyin'e) Gelecek Bildirim Maili
    const adminMailOptions = {
      from: `"Ela Sistem" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // Kendi kurumsal mailine düşecek
      subject: `🔥 YENİ TALEP: ${name} - ${reportTemplate.title}`,
      html: `
        <h2 style="color: #d97706;">Yeni Proje Analizi Talebi Geldi!</h2>
        <p><strong>Müşteri:</strong> ${name}</p>
        <p><strong>E-Posta:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <hr>
        <p><strong>Çıkan Sonuç:</strong> ${reportTemplate.title}</p>
        <p><strong>Verilen Bütçe:</strong> ${reportTemplate.price}</p>
      `,
    };

    // Mailleri ateşle
    await transporter.sendMail(clientMailOptions);
    await transporter.sendMail(adminMailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail gönderme hatası:", error);
    return NextResponse.json({ success: false, error: "Mail gönderilemedi" }, { status: 500 });
  }
}