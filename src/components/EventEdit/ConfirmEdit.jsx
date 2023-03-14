import React from "react"
import { Card, Row, Col, Button, Table } from "react-bootstrap"

const ConfirmEdit = ({ handleFormSubmit, event }) => {

    let total = 0

    return (
        <>
            <h3 className="m-2">Please check that event details are correct</h3>

            <Card className="m-3 p-3">

                <Card.Body>
                    <Card.Title>Name: {event.name}</Card.Title>
                    <Row>
                        <Col>
                            <Card.Text>Date: {event.date}</Card.Text>
                        </Col>
                        <Col>
                            <Card.Text>Time: {event.time}</Card.Text>
                        </Col>
                        <Col>
                            <Card.Text>Location: {event.location}</Card.Text>
                        </Col>
                    </Row>
                    <Card.Text>Description: {event.description}</Card.Text>

                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th style={{ textAlign: 'center' }}>Quantity</th>
                                <th style={{ textAlign: 'center' }}>Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {event.products &&
                                event.products.map((elm) => {
                                    const cost = elm.product.price * elm.quantity
                                    total += cost
                                    return (
                                        <tr key={elm.product._id}>
                                            <td>{elm.product.name}</td>
                                            <td style={{ textAlign: 'center' }}>{elm.quantity}</td>
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
                        Confirm Edit
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default ConfirmEdit
