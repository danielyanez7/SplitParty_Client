import React from "react"
import { Card, Row, Col, Button } from "react-bootstrap"

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

                    <Card.Text>Selected Products:</Card.Text>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Quantity</th>
                                <th>Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {formData.products &&
                                formData.products.map((product) => {
                                    const cost = product.price * product.quantity
                                    total += cost
                                    return (
                                        <tr>
                                            <td>{product.name}</td>
                                            <td>{product.quantity}</td>
                                            <td><strong>{cost}€</strong></td>
                                        </tr>
                                    )
                                })}

                        </tbody>
                        <tfoot>
                            <tr>
                                <td>Total</td>
                                <td> </td>
                                <td><strong>{total}€</strong></td>
                            </tr>
                        </tfoot>
                    </table>
                    <Button variant="dark" type="submit" onClick={handleFormSubmit} className="mt-4">
                        Confirm
                    </Button>
                </Card.Body>
            </Card>
        </>
    );
};

export default ConfirmTab
