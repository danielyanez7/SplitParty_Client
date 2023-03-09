import './EventDetails.css'
import { Card, ListGroup, Row, Col } from 'react-bootstrap';

const EventDetails = ({ event }) => {

    const date = new Date(event.date);
    const formatDate = date.toDateString()

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
                {event.products?.map(elm => {
                    return <p>{elm}</p>
                })}

            </ListGroup.Item>
        </ListGroup>
    )
}

export default EventDetails;
