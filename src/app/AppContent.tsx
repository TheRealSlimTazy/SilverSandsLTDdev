'use client';

import { useState, useEffect } from 'react';
import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import { Header } from '@/app/components/Header';
import { Hero } from '@/app/components/Hero';
import { About } from '@/app/components/About';
import { Services } from '@/app/components/Services';
import { ContactForm } from '@/app/components/ContactForm';
import { LandscapingServices } from '@/app/components/Services/Landscaping/LandscapingServices';
import { SodService } from '@/app/components/Services/Landscaping/Sod';
import { MaintenanceService } from '@/app/components/Services/Landscaping/Maintenance';
import { GardenDesignService } from '@/app/components/Services/Landscaping/GardenDesign';
import { JunkServices } from '@/app/components/Services/JunkServices';
import { SnowServices } from '@/app/components/Services/SnowServices';
import { Sidebar } from '@/app/components/Sidebar';

export function AppContent() {
    const router = useRouter();
    const searchParams = useSearchParams();

    const currentQueryPage = searchParams.get('page');
    const [currentPage, setCurrentPage] = useState<string>(currentQueryPage || 'home');
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const handlePageChange = (page: string) => {
        setCurrentPage(page);
        if (page === 'home') {
            router.push('/', { scroll: false });
        } else {
            router.push(`/?page=${page}`, { scroll: false });
        }
    };

    useEffect(() => {
        const newPage = searchParams.get('page') || 'home';
        setCurrentPage(newPage);
    }, [searchParams]);

    const renderPage = () => {
        switch (currentPage) {
            case 'about':
                return <About />;
            case 'services':
                return <Services setPage={handlePageChange} />;
            case 'services/landscaping':
                return <LandscapingServices />;
            case 'services/landscaping/sod':
                return <SodService />;
            case 'services/landscaping/maintenance':
                return <MaintenanceService />;
            case 'services/landscaping/garden-design':
                return <GardenDesignService />;
            case 'services/junk':
                return <JunkServices />;
            case 'services/snow':
                return <SnowServices />;
            case 'contact':
                return <ContactForm />;
            default:
                return <Hero />;
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            <Header setPage={handlePageChange} />
            <div className="flex flex-1">
                {sidebarOpen && <Sidebar setPage={handlePageChange} />}
                <main className="flex-1 p-8">
                    {renderPage()}
                </main>
            </div>
        </div>
    );
}
