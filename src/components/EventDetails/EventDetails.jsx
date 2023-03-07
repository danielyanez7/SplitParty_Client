import './EventDetails.css'
import { Card, ListGroup } from 'react-bootstrap';

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
                    <div className="eventCardBody">
                        <p className="eventCardDate">Date: {formatDate}</p>
                        <p className="eventCardDescription">{event.description}</p>
                    </div>
                </Card.Body>
            </ListGroup.Item>
        </ListGroup>
    );
};

export default EventDetails;
