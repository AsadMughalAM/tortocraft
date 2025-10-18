import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    // ✅ Parse FormData (for file uploads)
    const formData = await request.formData();
    const files = formData.getAll("files");

    const formDataObject = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      timestamp: new Date().toLocaleString("en-IN", {
        timeZone: "Asia/Kolkata",
        dateStyle: "full",
        timeStyle: "medium",
      }),
    };

    console.log("Form data received:", formDataObject);

    // ✅ Setup Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // your gmail address
        pass: process.env.EMAIL_PASS, // your gmail app password
      },
    });

    await transporter.verify();
    console.log("Email transporter verified ✅");

    // ✅ Handle attachments
    const attachments = [];
    for (const file of files) {
      if (file && file.name) {
        const buffer = Buffer.from(await file.arrayBuffer());
        attachments.push({
          filename: file.name,
          content: buffer,
        });
      }
    }

    const COLORS = {
      BG_LIGHT: "#f5f3ee",
      TEXT_DARK: "#3b2f2f",
      ACCENT_GOLD: "#c19a6b",
    };

    // ✅ Admin Email
    const adminMailOptions = {
      from: `"TORTOCRAFT Website" <${process.env.EMAIL_USER}>`,
      to: process.env.ADMIN_EMAIL,
      replyTo: formDataObject.email,
      subject: `🎯 New Contact: ${formDataObject.subject} - ${formDataObject.name}`,
      html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background:${
        COLORS.BG_LIGHT
      }; color:${COLORS.TEXT_DARK}; padding:20px;">
        <div style="max-width:600px; margin:auto; background:white; border-radius:10px; overflow:hidden; box-shadow:0 4px 6px rgba(0,0,0,0.1);">
          <div style="background:${COLORS.TEXT_DARK}; color:${
        COLORS.BG_LIGHT
      }; padding:30px; text-align:center;">
            <h1 style="font-size:28px; color:${
              COLORS.ACCENT_GOLD
            }; margin-bottom:5px;">TORTOCRAFT</h1>
            <p>New Customer Inquiry</p>
          </div>
          <div style="padding:30px;">
            <div style="margin-bottom:20px; padding-bottom:15px; border-bottom:1px solid #eee;">
              <strong>👤 Customer:</strong><br>
              ${formDataObject.name}<br>
              📧 ${formDataObject.email}<br>
              📞 ${formDataObject.phone || "Not provided"}
            </div>
            <div style="margin-bottom:20px; padding-bottom:15px; border-bottom:1px solid #eee;">
              <strong>🎯 Subject:</strong> ${formDataObject.subject}
            </div>
            <div style="margin-bottom:20px; padding:20px; background:#f8f9fa; border-left:4px solid ${
              COLORS.ACCENT_GOLD
            }; border-radius:4px; font-style:italic;">
              ${formDataObject.message.replace(/\n/g, "<br>")}
            </div>
            <div style="margin-bottom:20px;">
              <strong>🕐 Received At:</strong> ${formDataObject.timestamp}
            </div>
            ${
              attachments.length
                ? `<p><strong>📎 Attachments:</strong> ${attachments
                    .map((a) => a.filename)
                    .join(", ")}</p>`
                : ""
            }
          </div>
        </div>
      </div>
      `,
      attachments, // ✅ attach uploaded files
    };

    // ✅ Customer Auto-Reply Email
    const customerMailOptions = {
      from: `"TORTOCRAFT Team" <${process.env.EMAIL_USER}>`,
      to: formDataObject.email,
      subject:
        "Thank You for Contacting TORTOCRAFT - We Will Contact You Soon!",
      html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background:${COLORS.BG_LIGHT}; color:${COLORS.TEXT_DARK}; padding:20px;">
        <div style="max-width:600px; margin:auto; background:white; border-radius:10px; overflow:hidden; box-shadow:0 4px 6px rgba(0,0,0,0.1);">
          <div style="background:${COLORS.ACCENT_GOLD}; color:${COLORS.TEXT_DARK}; padding:30px; text-align:center;">
            <h1 style="font-size:28px; margin-bottom:5px;">TORTOCRAFT</h1>
            <p>Thank You, ${formDataObject.name}!</p>
          </div>
          <div style="padding:30px;">
            <p>Dear <strong>${formDataObject.name}</strong>,</p>
            <p>Thank you for choosing <strong>TORTOCRAFT</strong>! We received your inquiry about <strong>"${formDataObject.subject}"</strong>.</p>
            <p><strong>Your Message:</strong><br><em>${formDataObject.message}</em></p>
            <p>We'll get back to you within 24 hours.</p>
            <p>Warm regards,<br><strong>The TORTOCRAFT Team</strong></p>
          </div>
        </div>
      </div>
      `,
    };

    // ✅ Send Emails
    await transporter.sendMail(adminMailOptions);
    console.log("Admin email sent ✅");

    await transporter.sendMail(customerMailOptions);
    console.log("Customer email sent ✅");

    return NextResponse.json({
      success: true,
      message:
        "✅ Thank you! Your message has been sent. We'll contact you within 24 hours.",
    });
  } catch (error) {
    console.error("Email sending failed ❌:", error);
    return NextResponse.json(
      {
        success: false,
        error:
          "Unable to send message. Please email us directly at tortocraft415@gmail.com",
      },
      { status: 500 }
    );
  }
}
