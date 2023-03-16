import './EventDetails.css'
import { Container, Card, ListGroup, Row, Col, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const EventDetails = ({ event }) => {

    let total = 0
    const date = new Date(event.date)
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
                <ListGroup.Item className='mt-5' >

                    <Row>
                        <Col md={{ span: 2 }} className='text-center align-self-center'>
                            <p className='my-0'>{dateArray[0]}</p>
                            <h2 className='my-0'>{dateArray[2]}</h2>
                            <h3 className='my-0'>{dateArray[1]}. {dateArray[3]}</h3>
                            <p>{event.time}</p>
                        </Col>
                        <Col md={{ span: 8 }}>
                            <p> {event.description}</p>
                            <p>
                                <img src="https://cdn.icon-icons.com/icons2/1946/PNG/512/1904662-location-map-map-location-map-point-pin-place-placeholder_122512.png" alt="location" className='social-media-img mx-2' />
                                <strong>{event.location}</strong>
                            </p>
                        </Col>
                        <Col md={{ span: 2 }} className='d-flex justify-content-end'>
                            <Link variant="link" to={`/events/${event._id}/edit`}>
                                <img src="https://cdn.icon-icons.com/icons2/2098/PNG/512/edit_icon_128873.png" alt="Editar" className='detailsButton mx-2' />
                            </Link>
                            <Link variant="link" >
                                <img src="https://cdn.icon-icons.com/icons2/2098/PNG/512/trash_icon_128726.png" alt="Borrar" className='detailsButton mx-2' />
                            </Link>
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
                            <div className="">
                                Guests
                            </div>
                        </Col>
                        <Col md={3}>
                            {
                                event.guests?.map(guest => {
                                    return <p>{guest.username}</p>
                                })
                            }
                        </Col>

                        <Col md={6} style={{ textAlign: 'right' }}>
                            <p>
                                <img src="https://cdn.icon-icons.com/icons2/790/PNG/512/whatsapp_icon-icons.com_65442.png" alt="Whatsapp Icon" className='social-media-img mx-2' />
                                Contact Host
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={3}>
                            <div className="">
                                Per Guest
                            </div>
                        </Col>
                        <Col md={3}>{(total / (event.guests?.length + 1)).toFixed(2)}€ </Col>
                        <Col md={6} style={{ textAlign: 'right' }}>
                            <p>
                                <img src="https://cdn.icon-icons.com/icons2/790/PNG/512/instagram_icon-icons.com_65435.png" alt="Instagram Icon" className='social-media-img mx-2' />
                                #{event.name?.split(' ').join('')}{dateArray[2]}{dateArray[1]}
                            </p>
                        </Col>
                    </Row>
                </ListGroup.Item>
            </Container>
        </ListGroup>
    )
}

export default EventDetails
