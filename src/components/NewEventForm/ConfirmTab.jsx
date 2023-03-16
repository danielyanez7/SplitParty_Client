import React from "react"
import { Card, Row, Col, Button, Table } from "react-bootstrap"

const ConfirmTab = ({ formData, handleFormSubmit }) => {

    let total = 0

    const date = new Date(formData.date)
    const formatDate = date.toDateString()
    const dateArray = formatDate.split(' ')

    return (
        <>
            <h3 className="m-2">Please check that formData details are correct</h3>

            <Card className="m-3 p-3">

                <Card.Body className="black-text">
                    <Row>
                        <Col md={{ span: 2 }} className='text-center align-self-center'>
                            <p className='my-0'>{dateArray[0]}</p>
                            <h2 className='my-0'>{dateArray[2]}</h2>
                            <h3 className='my-0'>{dateArray[1]}. {dateArray[3]}</h3>
                            <p>{formData.time}</p>
                        </Col>
                        <Col md={{ span: 8 }}>
                            <p> {formData.description}</p>
                            <p>
                                <img src="https://cdn.icon-icons.com/icons2/1946/PNG/512/1904662-location-map-map-location-map-point-pin-place-placeholder_122512.png" alt="location" className='social-media-img mx-2' />
                                <strong>{formData.location}</strong>
                            </p>
                        </Col>
                    </Row>
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
                                formData.products.map((elm) => {
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
                    <Button variant="dark" type="submit" onClick={handleFormSubmit} className="mt-4 green-button">
                        Confirm
                    </Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default ConfirmTab




