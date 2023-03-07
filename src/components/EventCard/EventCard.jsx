import './EventCard.css'
import { Button, Card, Col, ListGroup, Row } from "react-bootstrap"
import { Link } from 'react-router-dom'

const EventCard = ({ elm }) => {

    const date = new Date(elm.date)
    const formatDate = date.toDateString()

    return (
        <Link to={`/events/${elm._id}`}>

            <Card className="p-2">
                <ListGroup variant="flush">
                    <ListGroup.Item className='eventCardBanner'
                        style={{
                            backgroundImage: `url(${elm.banner})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}>
                        <Card.Title>
                            <h1>{elm.name}</h1>
                        </Card.Title>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Card.Body>
                            <div className="eventCardBody">
                                <p className="eventCardDate">Date: {formatDate}</p>
                                <p className="eventCardDescription">{elm.description}</p>
                            </div>
                        </Card.Body>
                    </ListGroup.Item>
                </ListGroup>
            </Card>

        </Link>
    )
}

export default EventCard
