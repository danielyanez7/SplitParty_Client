import './UserEvents.css'
import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import EventCard from '../EventCard/EventCard'


const UserEvents = ({ friend }) => {

    return (
        <>
            <Col md={{ span: 3 }} key={friend._id} >
                <Link to={`/users/${friend._id}`} >
                    <h2>{friend.username}</h2>
                    <img src={friend.avatar} alt={friend.username} className='img-fluid rounded-circle userEventsImage' />
                </Link>
            </Col>
            <Col md={{ span: 9 }} className='align-self-center'>
                <Row>
                    {
                        friend.events.map(event => {
                            return (
                                <Col md={{ span: 6 }} key={event._id} className='d-grid ' >
                                    <EventCard event={event} />
                                </Col>
                            )
                        })
                    }
                </Row>
            </Col>
        </>
    )
}

export default UserEvents
