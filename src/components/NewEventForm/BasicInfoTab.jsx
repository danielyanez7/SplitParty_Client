import React from "react"
import { Form, Button, Row, Col } from "react-bootstrap"

const BasicInformation = ({ formData, setFormData, handleNext }) => {
    return (
        <>
            <Form.Group className="m-3" controlId="name">
                <Form.Label>Event Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                />
            </Form.Group>
            <Row>
                <Col className="col-md-6">
                    <Form.Group className="m-3" controlId="date">
                        <Form.Label>Date</Form.Label>
                        <Form.Control
                            type="date"
                            name="date"
                            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                        />
                    </Form.Group>
                </Col>
                <Col className="col-md-6">
                    <Form.Group className="m-3" controlId="time">
                        <Form.Label>Time</Form.Label>
                        <Form.Control
                            type="time"
                            name="time"
                            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="dark" onClick={handleNext} className="green-button">
                Next
            </Button>
        </>
    );
};

export default BasicInformation
