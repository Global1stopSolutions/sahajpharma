import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import path from "path"; // Import the 'path' module

// const transporter = nodemailer.createTransport({
//   host: "smtp.example.com",
//   port: 587,
//   secure: false,
//   auth: {
//     user: "your-email@example.com",
//     pass: "your-password",
//   },
// });

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
    default:
      return NextResponse.json({
        success: false,
        message: `Operation "${operation}" not supported.`,
      });
  }
}

async function registrationForm(params: any) {
  const readableContent: string = getReadableContent(params);

  const attachment = {
    filename: "dummy.pdf",
    path: path.join(process.cwd(), "public", "dummy.pdf"),
  };

  const mailOptions = {
    from: "Sahaj Pharma<cv@sahajpharma.com>",
    to: "harshit3228@gmail.com",
    subject: "New Registration",
    text: readableContent,
    attachments: [attachment],
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

function getReadableContent(params: any): string {
  let content = "Registration Details:\n\n";

  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      content += `${key}: ${params[key]}\n`;
    }
  }

  return content;
}
