'use client';
export const dynamic = 'force-dynamic';

import { useState } from 'react';
import { Tab, Nav, Table, Button } from 'react-bootstrap';

export function Services({ setPage }: { setPage: (page: string) => void }) {
    const [activeTab, setActiveTab] = useState('landscaping');

    const landscapingServices = [
        { key: 'sod', name: 'Sod Installation', price: '$2.50 / sq ft' },
        { key: 'maintenance', name: 'Maintenance Services', price: '$45 / sq ft' },
        { key: 'garden', name: 'Garden Design', price: 'Starting at $500' }
    ];

    return (
        <div className="container">
            <h1 className="mb-4 text-center">Our Services</h1>

            <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k!)}>
                <Nav variant="tabs" className="mb-4 justify-content-center">
                    <Nav.Item>
                        <Nav.Link eventKey="landscaping">Landscaping</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="construction">Construction</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="snow">Snow Removal</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Tab.Content>
                    <Tab.Pane eventKey="landscaping">
                        <h3 className="text-center mb-4">Landscaping Services</h3>
                        <Table striped bordered hover>
                            <thead>
                            <tr>
                                <th>Service</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {landscapingServices.map(service => (
                                <tr key={service.key}>
                                    <td>{service.name}</td>
                                    <td>{service.price}</td>
                                    <td>
                                        <Button
                                            variant="primary"
                                            size="sm"
                                            onClick={() => setPage(`services/landscaping/${service.key}`)}
                                        >
                                            View Details
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </Tab.Pane>

                    <Tab.Pane eventKey="construction">
                        <p className="text-center">Explore our Construction services.</p>
                        <Button onClick={() => setPage('services/construction')} className="btn btn-primary">
                            View Details
                        </Button>
                    </Tab.Pane>

                    <Tab.Pane eventKey="snow">
                        <p className="text-center">Check out our Snow Removal services.</p>
                        <Button onClick={() => setPage('services/snow')} className="btn btn-primary">
                            View Details
                        </Button>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    );
}
