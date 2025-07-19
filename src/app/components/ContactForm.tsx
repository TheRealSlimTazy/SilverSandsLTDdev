'use client';

import { useState } from 'react';
import { Form, Button, Alert, Container, Row, Col } from 'react-bootstrap';

export function ContactForm() {
    const [status, setStatus] = useState('');
    const [serviceType, setServiceType] = useState('');
    const [selectedServices, setSelectedServices] = useState<string[]>([]);
    const [labourers, setLabourers] = useState('');

    const serviceOptions: { [key: string]: string[] } = {
        landscaping: ['Sod Installation', 'Garden Design', 'Retaining Walls'],
        snow: ['Snow Plowing', 'Salting', 'Sanding'],
        junk: ['Junk Pickup', 'Furniture Removal', 'Construction Debris Removal', 'Junk Labour'],
    };

    const handleCheckboxChange = (service: string) => {
        setSelectedServices((prev) =>
            prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
        );
    };

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('Sending...');

        const form = e.currentTarget;
        const formData = new FormData(form);

        const body = {
            name: formData.get('name'),
            email: formData.get('email'),
            streetAddress: formData.get('streetAddress'),
            city: formData.get('city'),
            province: formData.get('province'),
            postalCode: formData.get('postalCode'),
            projectType: formData.get('projectType'),
            serviceType: formData.get('serviceType'),
            servicesNeeded: selectedServices,
            labourers: labourers,
            message: formData.get('message'),
        };

        await fetch('/api/contact', {
            method: 'POST',
            body: JSON.stringify(body),
            headers: { 'Content-Type': 'application/json' },
        });

        setStatus('Message sent!');
        form.reset();
        setServiceType('');
        setSelectedServices([]);
        setLabourers('');
    }

    return (
        <Container className="my-5">
            <Row className="justify-content-center">
                <Col md={8} lg={6}>
                    <h2 className="text-center mb-4">Project Inquiry Form</h2>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control name="name" placeholder="Enter your name" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Your Email</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter your email" required />
                        </Form.Group>

                        <h5 className="mt-4">Project Address</h5>

                        <Form.Group className="mb-3">
                            <Form.Label>Street Address</Form.Label>
                            <Form.Control name="streetAddress" placeholder="123 Main St" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>City</Form.Label>
                            <Form.Control name="city" placeholder="City" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Province/State</Form.Label>
                            <Form.Select name="province" required>
                                <option value="">Select Province</option>
                                <option value="NS">Nova Scotia</option>
                                <option value="NB">New Brunswick</option>
                                <option value="PEI">Prince Edward Island</option>
                            </Form.Select>
                        </Form.Group>


                        <Form.Group className="mb-3">
                            <Form.Label>Postal Code</Form.Label>
                            <Form.Control name="postalCode" placeholder="Postal / ZIP Code" required />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Project Type</Form.Label>
                            <Form.Select name="projectType" required>
                                <option value="">Select Project Type</option>
                                <option value="Commercial">Commercial</option>
                                <option value="Residential">Residential</option>
                                <option value="House">House</option>
                                <option value="Apartment">Apartment</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Label>Service Type</Form.Label>
                            <Form.Select
                                name="serviceType"
                                value={serviceType}
                                onChange={(e) => {
                                    setServiceType(e.target.value);
                                    setSelectedServices([]);
                                    setLabourers('');
                                }}
                                required
                            >
                                <option value="">Select Service Type</option>
                                <option value="landscaping">Landscaping</option>
                                <option value="snow">Snow Removal</option>
                                <option value="junk">Junk Removal</option>
                            </Form.Select>
                        </Form.Group>

                        {serviceType && (
                            <Form.Group className="mb-3">
                                <Form.Label>Services Needed</Form.Label>
                                {serviceOptions[serviceType].map((service) => (
                                    <Form.Check
                                        key={service}
                                        type="checkbox"
                                        label={service}
                                        name="servicesNeeded"
                                        value={service}
                                        checked={selectedServices.includes(service)}
                                        onChange={() => handleCheckboxChange(service)}
                                        className="mb-1"
                                    />
                                ))}
                            </Form.Group>
                        )}

                        {serviceType === 'junk' && selectedServices.includes('Junk Labour') && (
                            <Form.Group className="mb-3">
                                <Form.Label>Number of Labourers Needed</Form.Label>
                                <Form.Control
                                    type="number"
                                    min="1"
                                    name="labourers"
                                    value={labourers}
                                    onChange={(e) => setLabourers(e.target.value)}
                                    placeholder="Enter number of labourers"
                                    required
                                />
                            </Form.Group>
                        )}

                        <Form.Group className="mb-3">
                            <Form.Label>Additional Details</Form.Label>
                            <Form.Control as="textarea" name="message" rows={4} placeholder="Describe your project..." required />
                        </Form.Group>

                        <div className="d-grid">
                            <Button variant="primary" type="submit">
                                Send Inquiry
                            </Button>
                        </div>

                        {status && (
                            <Alert variant="success" className="mt-3 text-center">
                                {status}
                            </Alert>
                        )}
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
