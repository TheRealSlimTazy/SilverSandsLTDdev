'use client';

import { Tab, Nav } from 'react-bootstrap';
import {useState} from "react";

export function Services({ setPage }: { setPage: (page: string) => void }) {
    const [activeTab, setActiveTab] = useState('landscaping');

    return (
        <div className="container">
            <h1 className="mb-4 text-center">Our Services</h1>

            <Tab.Container activeKey={activeTab} onSelect={(k) => setActiveTab(k!)}>
                <Nav variant="tabs" className="mb-4 justify-content-center">
                    <Nav.Item>
                        <Nav.Link eventKey="landscaping">Landscaping</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="junk">Junk</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="snow">Snow Removal</Nav.Link>
                    </Nav.Item>
                </Nav>

                <Tab.Content className="text-center">
                    <Tab.Pane eventKey="landscaping">
                        <p>Learn more about our Landscaping services.</p>
                        <button onClick={() => setPage('services/landscaping')} className="btn btn-primary">View Details</button>
                    </Tab.Pane>
                    <Tab.Pane eventKey="junk">
                        <p>Explore our Construction services.</p>
                        <button onClick={() => setPage('services/junk')} className="btn btn-primary">View Details</button>
                    </Tab.Pane>
                    <Tab.Pane eventKey="snow">
                        <p>Check out our Snow Removal services.</p>
                        <button onClick={() => setPage('services/snow')} className="btn btn-primary">View Details</button>
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>
        </div>
    );
}
