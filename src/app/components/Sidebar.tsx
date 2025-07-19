'use client';

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap'; // Optional, you can also use plain buttons

export function Sidebar({ setPage }: { setPage: (page: string) => void }) {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <div
            className={`bg-light border-end p-3 d-flex flex-column justify-between`}
            style={{
                width: collapsed ? '60px' : '200px',
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
                    <button onClick={() => setPage('services')} className="nav-link btn btn-link text-start">
                        {collapsed ? '🛠️' : 'Services'}
                    </button>
                    <button onClick={() => setPage('contact')} className="nav-link btn btn-link text-start">
                        {collapsed ? '✉️' : 'Contact'}
                    </button>
                </nav>
            </div>
        </div>
    );
}
