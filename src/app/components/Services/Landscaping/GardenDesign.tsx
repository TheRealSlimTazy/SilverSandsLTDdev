'use client';

import Image from "next/image";

export function GardenDesignService() {
    return (
        <div className="flex flex-col items-center text-center">
            <h2 className="mb-4">Garden Design</h2>
            <p className="mb-6 max-w-xl">
                We provide professional sod installation including site prep, soil amendment, and care instructions.
            </p>
            <Image src="/garden.png" alt="Sod Installation" width={400} height={400}/>
        </div>
    );
}
