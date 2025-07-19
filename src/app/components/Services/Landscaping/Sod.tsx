'use client';

import Image from "next/image";

export function SodService() {
    return (
        <div className="flex flex-col items-center text-center">
            <h2 className="mb-4">Sod Installation</h2>
            <p className="mb-6 max-w-xl">
                We provide professional sod installation including site prep, soil amendment, and care instructions.
            </p>
            <Image src="/sod.png" alt="Sod Installation" width={400} height={400}/>
        </div>

    );
}
