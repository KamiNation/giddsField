import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {

    try {
        const { name, email, message, subject } = await req.json();

        if (!name || !email || !message || !subject) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail", // or use SMTP details
            auth: {
                user: process.env.EMAIL_USER, // Your email
                pass: process.env.EMAIL_PASS, // Your app password
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "adedamolacopy@gmail.com",
            subject: `${subject} `,
            text: `New Contact Form Submission from \n Name: ${name} \n Email: ${email}\n Message: ${message}`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ success: true, message: "Email sent successfully" });
    } catch (error) {
        return NextResponse.json({ success: false, message: "Error sending email", error }, { status: 500 });
    }
}
