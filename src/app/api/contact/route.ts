import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY!);

    const { name, email, message } = await req.json();

    await resend.emails.send({
        from: process.env.EMAIL_FROM!,
        to: process.env.EMAIL_TO!,
        subject: `New Contact Form Submission from ${name}`,
        html: `<p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
    });

    return NextResponse.json({ status: 'ok' });
}
