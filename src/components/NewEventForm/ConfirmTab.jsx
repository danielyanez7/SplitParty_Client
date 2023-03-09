import React from "react"
import { Card, Row, Col, Button, Table } from "react-bootstrap"

const ConfirmTab = ({ formData, handleFormSubmit }) => {
    let total = 0
    return (
        <>
            <h3 className="m-2">Please check that event details are correct</h3>

            <Card className="m-3 p-3">

                <Card.Body>
                    <Card.Title>Name: {formData.name}</Card.Title>
                    <Row>
                        <Col>
                            <Card.Text>Date: {formData.date}</Card.Text>
                        </Col>
                        <Col>
                            <Card.Text>Time: {formData.time}</Card.Text>
                        </Col>
                        <Col>
                            <Card.Text>Location: {formData.location}</Card.Text>
                        </Col>
                    </Row>
                    <Card.Text>Description: {formData.description}</Card.Text>

                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th style={{ textAlign: 'center' }}>Quantity</th>
                                <th style={{ textAlign: 'center' }}>Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formData.products &&
                                formData.products.map((product, index) => {
                                    const cost = product.price * product.quantity;
                                    total += cost;
                                    return (
                                        <tr key={index}>
                                            <td>{product.name}</td>
                                            <td style={{ textAlign: 'center' }}>{product.quantity}</td>
                                            <td style={{ textAlign: 'center' }}>
                                                <strong>{cost.toFixed(2)}€</strong>
                                            </td>
                                        </tr>
                                    );
                                })}
                            <tr>
                                <td>Total</td>
                                <td></td>
                                <td style={{ textAlign: 'center' }}>
                                    <strong>{total.toFixed(2)}€</strong>
                                </td>
                            </tr>
                        </tbody>
                    </Table>
                    <Button variant="dark" type="submit" onClick={handleFormSubmit} className="mt-4">
                        Confirm
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default ConfirmTab
