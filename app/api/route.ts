import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import fs from "fs/promises";
import path from "path";

const transporter = nodemailer.createTransport({
  service: process.env.SMTP_SERVICE,
  auth: {
    user: process.env.SMTP_AUTH_USER,
    pass: process.env.SMTP_AUTH_PASSWORD,
  },
});

export async function POST(request: NextRequest) {
  const { params, operation } = await request.json();
  return await handlePostOperation(operation, params);
}

async function handlePostOperation(operation: string, params: any) {
  switch (operation) {
    case "RegistrationForm":
      return registrationForm(params);
    case "ContactForm":
      return contactForm(params);
    default:
      return NextResponse.json({
        success: false,
        message: `Operation "${operation}" not supported.`,
      });
  }
}

async function registrationForm(params: any) {
  let contentHeader = "Registration Details:\n\n";
  const readableContent: string = getReadableContent(params, contentHeader);
  const filePath = path.join(process.cwd(), "uploads", params.chooseFile);

  const attachment = {
    filename: params.chooseFile,
    path: filePath,
  };

  const mailOptions = {
    from: "Sahaj Pharma<cv@sahajpharma.com>",
    to: "global1stopsolutions@gmail.com",
    subject: "New Registration",
    text: readableContent,
    attachments: [attachment],
  };

  try {
    await transporter.sendMail(mailOptions);
    await fs.unlink(filePath);
    return NextResponse.json({
      success: true,
      message: "Operation completed. Email sent.",
      data: params,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, message: "Failed to send email." });
  }
}

async function contactForm(params: any) {
  let contentHeader = "Contact Details:\n\n";
  const readableContent: string = getReadableContent(params, contentHeader);

  const mailOptions = {
    from: "Sahaj Pharma<cv@sahajpharma.com>",
    to: "global1stopsolutions@gmail.com",
    subject: "New Contact",
    text: readableContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({
      success: true,
      message: "Operation completed. Email sent.",
      data: params,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, message: "Failed to send email." });
  }
}

function getReadableContent(params: any, contentHeader: string): string {
  let content = contentHeader;

  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      content += `${key}: ${params[key]}\n`;
    }
  }

  return content;
}
