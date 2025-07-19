import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(req: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY!);

    const {
        name,
        email,
        streetAddress,
        city,
        province,
        postalCode,
        projectType,
        serviceType,
        servicesNeeded,
        labourers,
        message,
    } = await req.json();

    await resend.emails.send({
        from: process.env.EMAIL_FROM!,
        to: process.env.EMAIL_TO!,
        subject: `New Project Inquiry from ${name}`,
        html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Address:</strong> ${streetAddress}, ${city}, ${province}, ${postalCode}</p>
            <p><strong>Project Type:</strong> ${projectType}</p>
            <p><strong>Service Type:</strong> ${serviceType}</p>
            <p><strong>Services Needed:</strong> ${servicesNeeded.join(', ')}</p>
            ${servicesNeeded.includes('Junk Labour') ? `<p><strong>Labourers Needed:</strong> ${labourers}</p>` : ''}
            <p><strong>Message:</strong> ${message}</p>
        `,
    });

    return NextResponse.json({ status: 'ok' });
}
