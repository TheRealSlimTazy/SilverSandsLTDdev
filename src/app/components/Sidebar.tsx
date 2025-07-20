'use client';
export const dynamic = 'force-dynamic';

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';

export function Sidebar({ setPage }: { setPage: (page: string) => void }) {
    const [collapsed, setCollapsed] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [landscapingOpen, setLandscapingOpen] = useState(false);

    return (
        <div
            className="bg-light border-end p-3 d-flex flex-column justify-between"
            style={{
                width: collapsed ? '60px' : '220px',
                minHeight: '100vh',
                transition: 'width 0.3s ease',
                position: 'relative'
            }}
        >
            <div>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <strong>{!collapsed && 'Menu'}</strong>
                    <Button
                        variant="light"
                        size="sm"
                        onClick={() => setCollapsed(!collapsed)}
                        style={{ border: 'none' }}
                    >
                        {collapsed ? '☰' : '✖'}
                    </Button>
                </div>

                <nav className="nav flex-column">
                    <button onClick={() => setPage('home')} className="nav-link btn btn-link text-start">
                        {collapsed ? '🏠' : 'Home'}
                    </button>

                    <button onClick={() => setPage('about')} className="nav-link btn btn-link text-start">
                        {collapsed ? 'ℹ️' : 'About'}
                    </button>

                    <button
                        onClick={() => {
                            setPage('services');
                            setServicesOpen(!servicesOpen);
                        }}
                        className="nav-link btn btn-link text-start"
                    >
                        {collapsed ? '🛠️' : servicesOpen ? '▼ Services' : '▶ Services'}
                    </button>

                    {servicesOpen && !collapsed && (
                        <div className="ms-3">
                            <button
                                onClick={() => {
                                    setPage('services/landscaping');
                                    setLandscapingOpen(!landscapingOpen);
                                }}
                                className="nav-link btn btn-link text-start"
                            >
                                {landscapingOpen ? '▼ Landscaping' : '▶ Landscaping'}
                            </button>

                            {landscapingOpen && (
                                <div className="ms-3">
                                    <button
                                        onClick={() => setPage('services/landscaping/sod')}
                                        className="nav-link btn btn-link text-start"
                                    >
                                        🌱 Sod Installation
                                    </button>
                                    <button
                                        onClick={() => setPage('services/landscaping/garden-design')}
                                        className="nav-link btn btn-link text-start"
                                    >
                                        🌸 Garden Design
                                    </button>
                                    <button
                                        onClick={() => setPage('services/landscaping/maintenance')}
                                        className="nav-link btn btn-link text-start"
                                    >
                                        🧱 Maintenance
                                    </button>
                                </div>
                            )}

                            <button onClick={() => setPage('services/junk')} className="nav-link btn btn-link text-start">
                                🗑️ Junk Removal
                            </button>
                            <button onClick={() => setPage('services/snow')} className="nav-link btn btn-link text-start">
                                ❄️ Snow Removal
                            </button>
                        </div>
                    )}

                    <button onClick={() => setPage('contact')} className="nav-link btn btn-link text-start">
                        {collapsed ? '✉️' : 'Contact'}
                    </button>
                </nav>
            </div>
        </div>
    );
}
