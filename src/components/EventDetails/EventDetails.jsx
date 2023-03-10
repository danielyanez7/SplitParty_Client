import './EventDetails.css'
import { Card, ListGroup, Row, Col, Table } from 'react-bootstrap';

const EventDetails = ({ event }) => {
    let total = 0
    const date = new Date(event.date);
    const formatDate = date.toDateString()

    console.log(event.products)

    return (
        <ListGroup variant="flush">
            <ListGroup.Item className='eventDetailsBanner'
                style={{
                    backgroundImage: `url(${event.banner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                <Card.Title className=''>
                    <h1>{event.name}</h1>
                </Card.Title>
            </ListGroup.Item>
            <ListGroup.Item>
                <Card.Body>
                    <Card.Title>Name: {event.name}</Card.Title>
                    <Row>
                        <Col>
                            <Card.Text>Date: {formatDate}</Card.Text>
                        </Col>
                        <Col>
                            <Card.Text>Time: {event.time}</Card.Text>
                        </Col>
                        <Col>
                            <Card.Text>Location: {event.location}</Card.Text>
                        </Col>
                    </Row>
                    <Card.Text>Description: {event.description}</Card.Text>
                </Card.Body>


                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th style={{ textAlign: 'center' }}>Quantity</th>
                            <th style={{ textAlign: 'center' }}>Cost</th>
                        </tr>
                    </thead>
                    <tbody>

                        {event.products && event.products.map((elm, index) => (
                            <tr key={index}>
                                <td>
                                    {elm._id}
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                    {elm.quantity}
                                </td>
                                {/* <td style={{ textAlign: 'center' }}>
                                    <strong>{elm.product.price.toFixed(2)}€</strong>
                                </td> */}
                            </tr>
                        ))}
                        <tr>
                            <td>Total</td>
                            <td></td>
                            <td style={{ textAlign: 'center' }}>
                                <strong>{total.toFixed(2)}€</strong>
                            </td>
                        </tr>
                    </tbody>

                </Table>
            </ListGroup.Item>
        </ListGroup>
    )
}

export default EventDetails;


// {
//     event.products?.map(elm => {
//         return <p>{elm.name}</p>
//     })
// } 
