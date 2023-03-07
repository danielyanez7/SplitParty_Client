import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Tabs, Tab, Form, Button, Card, Row, Col, Container, ListGroup } from "react-bootstrap"
import eventsService from "../../services/events.services"


const NewEventForm = () => {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({})
    const [activeTab, setActiveTab] = useState("basic")
    const [lastTab, setLastTab] = useState(false)

    const handleNext = () => {
        const tabs = ["basic", "details", "confirm"]
        const currentIndex = tabs.indexOf(activeTab)

        if (currentIndex < tabs.length - 1) {
            setActiveTab(tabs[currentIndex + 1])
        } else {
            setLastTab(true)
        }
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        eventsService
            .saveEvent(formData)
            .then(({ data }) => {
                navigate('/events')
            })
            .catch(err => console.log(err))
    }

    return (
        <Form onSubmit={handleFormSubmit}>

            <Tabs activeKey={activeTab} onSelect={(k) => setActiveTab(k)} className="flex-nowrap">
                <Tab eventKey="basic" title="Basic Information">
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Event Name</Form.Label>
                        <Form.Control
                            type="text"
                            name="name"
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        />
                    </Form.Group>
                    <Row>
                        <Col className="col-md-6">
                            <Form.Group className="mb-3" controlId="date">
                                <Form.Label>Date</Form.Label>
                                <Form.Control
                                    type="date"
                                    name="date"
                                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                />
                            </Form.Group>
                        </Col>
                        <Col className="col-md-6">
                            <Form.Group className="mb-3" controlId="time">
                                <Form.Label>Time</Form.Label>
                                <Form.Control
                                    type="time"
                                    name="time"
                                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Button variant="dark" onClick={handleNext}>
                        Next
                    </Button>
                </Tab>


                <Tab eventKey="details" title="Event Details">
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Event description</Form.Label>
                        <Form.Control
                            as="textarea"
                            name="description"
                            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="location">
                        <Form.Label>Location</Form.Label>
                        <Form.Control
                            type="text"
                            name="location"
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        />
                    </Form.Group>
                    <Button variant="dark" onClick={handleNext}>
                        Next
                    </Button>
                </Tab>

                <Tab eventKey="confirm" title="Confirmation">
                    <h3>Please check that event details are correct</h3>

                    <Card className="p-2">
                        <Card.Title>Name: {formData.name}</Card.Title>
                        <Card.Body>

                            <Card.Text>Date: {formData.date}</Card.Text>
                            <Card.Text>Time: {formData.time}</Card.Text>
                            <Card.Text>Description: {formData.description}</Card.Text>
                            <Card.Text>Location: {formData.location}</Card.Text>

                            <Button variant="dark" type="submit">Confirm</Button>
                        </Card.Body>
                    </Card>
                </Tab>

            </Tabs>
        </Form>
    );
};

export default NewEventForm;



