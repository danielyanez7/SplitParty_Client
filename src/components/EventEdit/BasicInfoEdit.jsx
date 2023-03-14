import React from "react"
import { Form, Button, Row, Col } from "react-bootstrap"

const BasicInfoEdit = ({ handleNext, event, handleInputChange }) => {

    const date = new Date(event.date)
    const formatDate = date.toLocaleDateString("en-CA", { year: 'numeric', month: '2-digit', day: '2-digit' })

    return (
        <>
            <Form.Group className="m-3" controlId="name">
                <Form.Label>Event Name</Form.Label>
                <Form.Control
                    type="text"
                    name="name"
                    value={event.name}
                    onChange={handleInputChange}
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
                            value={formatDate}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Col>
                <Col className="col-md-6">
                    <Form.Group className="m-3" controlId="time">
                        <Form.Label>Time</Form.Label>
                        <Form.Control
                            type="time"
                            name="time"
                            value={event.time}
                            onChange={handleInputChange}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Button variant="dark" onClick={handleNext}>
                Next
            </Button>
        </>
    );
};

export default BasicInfoEdit


