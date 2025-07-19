'use client';

import Image from 'next/image';

export function Header({ setPage }: { setPage: (page: string) => void }) {
    return (
        <header className="flex items-center justify-between px-6 py-4 bg-white shadow-md w-full">
            <nav className="flex space-x-6 text-gray-700 font-medium">
                <button onClick={() => setPage('home')}>Silver Sands Contracting Ltd.</button>
            </nav>
            <Image src="/hero-image.png" alt="Logo" width={40} height={40} className="rounded-full" />
        </header>
    );
}
