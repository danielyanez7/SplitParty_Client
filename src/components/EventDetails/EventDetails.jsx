import './EventDetails.css'
import { Container, Card, ListGroup, Row, Col, Table, Button } from 'react-bootstrap';

const EventDetails = ({ event }) => {

    let total = 0
    const date = new Date(event.date);
    const formatDate = date.toDateString()

    const dateArray = formatDate.split(' ')

    return (
        <ListGroup variant="flush">

            <ListGroup.Item className='eventDetailsBanner'
                style={{
                    backgroundImage: `url(${event.banner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}>
                <Card.Title>
                    <h1>{event.name}</h1>
                </Card.Title>
            </ListGroup.Item>
            <Container>
                <ListGroup.Item className='mt-5'>
                    <Row>
                        <Col md={{ span: 2 }} className='text-center align-self-center'>
                            <p className='my-0'>{dateArray[0]}</p>
                            <h2 className='my-0'>{dateArray[2]}</h2>
                            <p className='my-0'>{dateArray[1]}. {dateArray[3]}</p>
                            <p>{event.time}</p>
                        </Col>
                        <Col md={{ span: 10 }}>
                            <p> Location: <strong>{event.location}</strong>.</p>
                            <p> {event.description}</p>
                        </Col>
                    </Row>

                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th style={{ textAlign: 'center' }}>Name</th>
                                <th style={{ textAlign: 'center' }}>Quantity</th>
                                <th style={{ textAlign: 'center' }}>Cost</th>
                            </tr>
                        </thead>
                        <tbody>

                            {event.products && event.products.map((elm) => {

                                total += elm.product.price * elm.quantity

                                return (
                                    <tr key={elm.product._id}>
                                        <td>
                                            {elm.product.name}
                                        </td>
                                        <td style={{ textAlign: 'center' }}>
                                            {elm.quantity}
                                        </td>
                                        <td style={{ textAlign: 'center' }}>
                                            <strong>{(elm.product.price * elm.quantity).toFixed(2)}€</strong>
                                        </td>
                                    </tr>
                                )
                            }

                            )}
                            <tr>
                                <td>Total</td>
                                <td></td>
                                <td style={{ textAlign: 'center' }}>
                                    <strong>{total.toFixed(2)}€</strong>
                                </td>
                            </tr>
                        </tbody>

                    </Table>
                    <Row>
                        <Col><Button>Budget</Button></Col>
                        <Col>{total.toFixed(2)}€</Col>
                        <Col>  <p>Icon Whatsapp</p> </Col>
                        <Col> <p>Contact Host</p> </Col>
                    </Row>
                    <Row>
                        <Col><Button>Per Guest</Button></Col>
                        <Col>{total.toFixed(2) / 5}€</Col>
                        <Col>  <p>Icon Instagram</p> </Col>
                        <Col> <p>#{event.name}{dateArray[2]}{dateArray[1]}</p> </Col>
                    </Row>
                </ListGroup.Item>
            </Container>
        </ListGroup>
    )
}

export default EventDetails;
