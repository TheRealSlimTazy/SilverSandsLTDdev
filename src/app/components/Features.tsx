export function Features() {
    return (
        <section className="p-10 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                <div className="p-6 border rounded-xl shadow-sm text-center">
                    <h3 className="font-bold text-xl mb-2">Landscaping</h3>
                    <p className="text-gray-600">Lawn installation, garden design, retaining walls, and more.</p>
                </div>
                <div className="p-6 border rounded-xl shadow-sm text-center">
                    <h3 className="font-bold text-xl mb-2">Construction</h3>
                    <p className="text-gray-600">From small repairs to full home additions.</p>
                </div>
                <div className="p-6 border rounded-xl shadow-sm text-center">
                    <h3 className="font-bold text-xl mb-2">Snow Removal</h3>
                    <p className="text-gray-600">Winter services including plowing, sanding, and salting.</p>
                </div>
            </div>
        </section>
    );
}

