import Image from 'next/image';

export function Hero() {
    return (
        <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-4xl font-bold mb-4">Welcome to Silver Sands Contracting Ltd.</h1>
                <p className="text-gray-600 mb-8">Landscaping, Construction & Snow Removal in Nova Scotia.</p>
            </div>
            <div className="md:w-1/2 flex justify-center">
                <Image src="/hero-image.png" alt="Company Logo" width={200} height={200} />
            </div>
        </div>
    );
}
