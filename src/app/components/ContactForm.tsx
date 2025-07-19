'use client';

import { useState } from 'react';

export function ContactForm() {
    const [status, setStatus] = useState('');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('Sending...');

        const form = e.currentTarget;
        const formData = new FormData(form);

        const body = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        });

        setStatus('Message sent!');
        form.reset();
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <input name="name" placeholder="Your Name" className="w-full p-2 border rounded" required />
            <input name="email" type="email" placeholder="Your Email" className="w-full p-2 border rounded" required />
            <textarea name="message" placeholder="Your Message" className="w-full p-2 border rounded" required />
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
            {status && <p className="mt-2 text-green-600">{status}</p>}
        </form>
    );
}
