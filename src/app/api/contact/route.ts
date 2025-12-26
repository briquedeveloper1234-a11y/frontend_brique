import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // Parse incoming form data
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    // Validate all required fields
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'All fields are required' 
        },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Invalid email format' 
        },
        { status: 400 }
      );
    }

    // Send email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Brique Developers <noreply@briquedevelopers.com>',
      to: ['info@briquedevelopers.com'],
      replyTo: email, // Allows you to reply directly to customer
      subject: `🏗️ New Contact: ${service} - ${name}`,
      html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Contact Form Submission</title>
          </head>
          <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;">
            <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f3f4f6; padding: 40px 20px;">
              <tr>
                <td align="center">
                  <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                    
                    <!-- Header -->
                    <tr>
                      <td style="background: linear-gradient(135deg, #ea580c 0%, #fb923c 100%); padding: 40px 30px; text-align: center;">
                        <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: bold;">
                          🏗️ New Contact Form Submission
                        </h1>
                        <p style="margin: 10px 0 0 0; color: rgba(255, 255, 255, 0.9); font-size: 14px;">
                          Brique Developers Website
                        </p>
                      </td>
                    </tr>
                    
                    <!-- Content -->
                    <tr>
                      <td style="padding: 40px 30px; background-color: #fafafa;">
                        
                        <!-- Name -->
                        <div style="margin-bottom: 25px;">
                          <div style="color: #ea580c; font-weight: bold; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                            👤 Full Name
                          </div>
                          <div style="background-color: #ffffff; padding: 15px; border-radius: 8px; border-left: 4px solid #ea580c; font-size: 16px; color: #1f2937;">
                            ${name}
                          </div>
                        </div>
                        
                        <!-- Email -->
                        <div style="margin-bottom: 25px;">
                          <div style="color: #ea580c; font-weight: bold; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                            📧 Email Address
                          </div>
                          <div style="background-color: #ffffff; padding: 15px; border-radius: 8px; border-left: 4px solid #ea580c;">
                            <a href="mailto:${email}" style="color: #2563eb; text-decoration: none; font-size: 16px;">
                              ${email}
                            </a>
                          </div>
                        </div>
                        
                        <!-- Phone -->
                        <div style="margin-bottom: 25px;">
                          <div style="color: #ea580c; font-weight: bold; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                            📱 Phone Number
                          </div>
                          <div style="background-color: #ffffff; padding: 15px; border-radius: 8px; border-left: 4px solid #ea580c;">
                            <a href="tel:${phone}" style="color: #2563eb; text-decoration: none; font-size: 16px;">
                              ${phone}
                            </a>
                          </div>
                        </div>
                        
                        <!-- Service -->
                        <div style="margin-bottom: 25px;">
                          <div style="color: #ea580c; font-weight: bold; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                            🏢 Service Interested In
                          </div>
                          <div style="background-color: #ffffff; padding: 15px; border-radius: 8px; border-left: 4px solid #ea580c; font-size: 16px; color: #1f2937; text-transform: capitalize;">
                            ${service.replace('-', ' ')}
                          </div>
                        </div>
                        
                        <!-- Message -->
                        <div style="margin-bottom: 0;">
                          <div style="color: #ea580c; font-weight: bold; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 8px;">
                            💬 Message
                          </div>
                          <div style="background-color: #ffffff; padding: 15px; border-radius: 8px; border-left: 4px solid #ea580c; font-size: 16px; color: #1f2937; line-height: 1.6; white-space: pre-wrap;">
                            ${message}
                          </div>
                        </div>
                        
                      </td>
                    </tr>
                    
                    <!-- Footer -->
                    <tr>
                      <td style="padding: 30px; text-align: center; background-color: #ffffff; border-top: 1px solid #e5e7eb;">
                        <p style="margin: 0 0 10px 0; color: #6b7280; font-size: 14px;">
                          This email was sent from the Brique Developers contact form
                        </p>
                        <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                          Click "Reply" to respond directly to <strong>${name}</strong>
                        </p>
                      </td>
                    </tr>
                    
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    // Handle Resend errors
    if (error) {
      console.error('❌ Resend API Error:', error);
      return NextResponse.json(
        { 
          success: false, 
          message: 'Failed to send email. Please try again.' 
        },
        { status: 500 }
      );
    }

    // Success response
    console.log('✅ Email sent successfully:', data);
    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully',
      emailId: data?.id 
    });

  } catch (error) {
    // Catch any unexpected errors
    console.error('❌ Unexpected error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'An unexpected error occurred' 
      },
      { status: 500 }
    );
  }
}