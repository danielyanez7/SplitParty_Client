import './EventDetails.css'
import { Container, Card, ListGroup, Row, Col, Table, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

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
                <ListGroup.Item className='mt-5' style={{ position: 'relative' }}>

                    <Link variant="link" to={`/events/${event._id}/edit`} style={{ position: 'absolute', top: 6, right: 70 }}>
                        <img src="https://cdn.icon-icons.com/icons2/2098/PNG/512/edit_icon_128873.png" alt="Editar" className='detailsButton' />
                    </Link>
                    <Button variant="link" style={{ position: 'absolute', top: 0, right: 0 }}>
                        <img src="https://cdn.icon-icons.com/icons2/2098/PNG/512/trash_icon_128726.png" alt="Borrar" className='detailsButton' />
                    </Button>

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
                        <Col md={3}>
                            <div className="btn btn-dark">
                                Budget
                            </div>
                        </Col>
                        <Col md={3}>{total.toFixed(2)}€</Col>
                        <Col md={6} style={{ textAlign: 'right' }}>
                            <p>
                                <img src="https://cdn.icon-icons.com/icons2/790/PNG/512/whatsapp_icon-icons.com_65442.png" alt="Whatsapp Icon" className='social-media-img' />
                                Contact Host
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <div className="btn btn-dark">
                                Per Guest
                            </div>
                        </Col>
                        <Col md={3}>{total.toFixed(2) / 5}€</Col>
                        <Col md={6} style={{ textAlign: 'right' }}>
                            <p>
                                <img src="https://cdn.icon-icons.com/icons2/790/PNG/512/instagram_icon-icons.com_65435.png" alt="Instagram Icon" className='social-media-img' />
                                #{event.name?.split(" ").join('')}{dateArray[2]}{dateArray[1]}
                            </p>
                        </Col>
                    </Row>
                </ListGroup.Item>
            </Container>
        </ListGroup>
    )
}

export default EventDetails
