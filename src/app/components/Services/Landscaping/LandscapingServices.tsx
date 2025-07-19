'use client';

import { useState } from 'react';
import { Tab, Nav, Image, Row, Col } from 'react-bootstrap';

export function LandscapingServices() {
    const [activeSubTab, setActiveSubTab] = useState('sod');

    const landscapingServices = {
        sod: {
            title: 'Sod Installation',
            image: '/sod.png', // Put this image in /public/sod.jpg
            price: '$2.50 / sq ft',
            description: 'We provide professional sod installation, soil preparation, and maintenance.',
        },
        garden: {
            title: 'Garden Design',
            image: '/garden.png',
            price: 'Starting at $500',
            description: 'Custom garden designwith flowers, shrubs, and landscape features.',
        },
        retaining: {
            title: 'Retaining Walls',
            image: '/retaining-wall.jpg',
            price: '$45 / sq ft',
            description: 'Durable and aesthetic retaining walls for landscape support.',
        },
    };

    return (
        <div>
            <h2 className="mb-4 text-center">Landscaping Services</h2>

            <Tab.Container activeKey={activeSubTab} onSelect={(k) => setActiveSubTab(k!)}>
                <Nav variant="pills" className="justify-content-center mb-4">
                    <Nav.Item>
                        <Nav.Link eventKey="sod">Sod Installation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="garden">Garden Design</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="retaining">Retaining Walls</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Tab.Content>
                    {Object.keys(landscapingServices).map((key) => {
                        const service = landscapingServices[key as keyof typeof landscapingServices];
                        return (
                            <Tab.Pane eventKey={key} key={key}>
                                <Row className="align-items-center">
                                    <Col md={6} className="text-center mb-4">
                                        <Image src={service.image} alt={service.title} fluid rounded />
                                    </Col>
                                    <Col md={6}>
                                        <h3>{service.title}</h3>
                                        <p><strong>Price:</strong> {service.price}</p>
                                        <p>{service.description}</p>
                                    </Col>
                                </Row>
                            </Tab.Pane>
                        );
                    })}
                </Tab.Content>
            </Tab.Container>
        </div>
    );
}
