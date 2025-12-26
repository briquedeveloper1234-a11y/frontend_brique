import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const { name, email, phone, service, message } = await request.json();

    // Validate required fields
    if (!name || !email || !phone || !service || !message) {
      return Response.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Create transporter with Zoho SMTP
    const transporter = nodemailer.createTransport({
      host: process.env.ZOHO_SMTP_HOST,
      port: parseInt(process.env.ZOHO_SMTP_PORT),
      secure: true, // Use SSL
      auth: {
        user: process.env.ZOHO_EMAIL,
        pass: process.env.ZOHO_PASSWORD,
      },
    });

    // Email to you (the business owner)
    await transporter.sendMail({
      from: `"Brique Developers Contact" <${process.env.ZOHO_EMAIL}>`,
      to: process.env.ZOHO_EMAIL,
      replyTo: email, // Customer can reply directly
      subject: `🏗️ New Contact: ${service}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #ea580c 0%, #c2410c 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 20px; }
            .label { font-weight: bold; color: #ea580c; margin-bottom: 5px; }
            .value { background: white; padding: 10px; border-radius: 5px; border-left: 3px solid #ea580c; }
            .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📧 New Contact Form Submission</h1>
            </div>
            <div class="content">
              <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">${name}</div>
              </div>
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value"><a href="mailto:${email}">${email}</a></div>
              </div>
              <div class="field">
                <div class="label">📱 Phone:</div>
                <div class="value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              <div class="field">
                <div class="label">🏗️ Service Interested In:</div>
                <div class="value">${service}</div>
              </div>
              <div class="field">
                <div class="label">💬 Message:</div>
                <div class="value">${message}</div>
              </div>
              <div class="footer">
                <p>Received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // Auto-reply to customer
    await transporter.sendMail({
      from: `"Brique Developers" <${process.env.ZOHO_EMAIL}>`,
      to: email,
      subject: '✅ Thank You for Contacting Brique Developers',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #ea580c 0%, #c2410c 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
            .content { background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px; }
            .message-box { background: white; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #ea580c; }
            .contact-info { background: white; padding: 15px; border-radius: 8px; margin: 20px 0; }
            .contact-item { margin: 10px 0; }
            .footer { text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🙏 Thank You, ${name}!</h1>
            </div>
            <div class="content">
              <p>We've received your message and appreciate you reaching out to Brique Developers.</p>
              
              <div class="message-box">
                <h3 style="color: #ea580c; margin-top: 0;">Your Message:</h3>
                <p><strong>Service:</strong> ${service}</p>
                <p>${message}</p>
              </div>

              <p><strong>What happens next?</strong></p>
              <ul>
                <li>Our team will review your inquiry</li>
                <li>We'll contact you within 24 hours</li>
                <li>We'll discuss your project requirements in detail</li>
              </ul>

              <div class="contact-info">
                <h3 style="color: #ea580c; margin-top: 0;">📞 Contact Us Directly:</h3>
                <div class="contact-item">📍 <strong>Address:</strong> D,89 sector 2, Noida, Uttar Pradesh</div>
                <div class="contact-item">📞 <strong>Phone:</strong> 0120 28 407036 | 0120 28 405999</div>
                <div class="contact-item">📧 <strong>Email:</strong> info@briquedevelopers.com</div>
                <div class="contact-item">🕐 <strong>Hours:</strong> Mon - Sat: 9:00 AM - 6:00 PM</div>
              </div>

              <div class="footer">
                <p>Best regards,<br><strong>Brique Developers Team</strong></p>
                <p style="margin-top: 20px;">This is an automated response. Please do not reply to this email.</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    return Response.json({ 
      success: true, 
      message: 'Email sent successfully' 
    });

  } catch (error) {
    console.error('Email Error:', error);
    return Response.json(
      { 
        success: false, 
        message: 'Failed to send email. Please try again or contact us directly.' 
      },
      { status: 500 }
    );
  }
}