
'use client';
import { ContactForm } from './ContactForm';

export function ContactModal({ open, onClose }: { open: boolean; onClose: () => void; }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-xl w-full max-w-lg relative">
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl">&times;</button>
                <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
                <ContactForm />
            </div>
        </div>
    );
}