import React from "react"
import { Form, Button } from "react-bootstrap"

const DetailsEdit = ({ handleNext, handleInputChange, formData }) => {
    return (
        <>
            <Form.Group className="m-3" controlId="description">
                <Form.Label>Event description</Form.Label>
                <Form.Control
                    as="textarea"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Form.Group className="m-3" controlId="location">
                <Form.Label>Location</Form.Label>
                <Form.Control
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Button variant="dark" className="green-button" onClick={handleNext}>
                Next
            </Button>
        </>
    )
}

export default DetailsEdit
