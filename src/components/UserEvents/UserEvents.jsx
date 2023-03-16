import './UserEvents.css'
import { Card, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import EventCard from '../EventCard/EventCard'
import { useEffect, useState } from 'react'
import eventsService from '../../services/events.services'


const UserEvents = ({ friend }) => {

    const [events, setEvents] = useState([])

    const loadEvents = () => {

        eventsService
            .getUserEvents(friend._id)
            .then(({ data }) => setEvents(data))
            .catch(err => console.log(err))
    }

    useEffect(() => (
        loadEvents()
    ), [friend])

    return (
        <Card className='my-3 p-2'>
            <Row>
                <Col md={{ span: 6 }} className='d-flex '>
                    <Link to={`/users/${friend._id}`} >
                        <img src={friend.avatar} alt={friend.username} className='friendAvatar ' />
                        <h3>{friend.username}</h3>
                    </Link>
                </Col>
            </Row>
            <Row>
                {
                    events.map(event => {
                        return (
                            <Col md={{ span: 6 }} key={event._id} className='d-grid ' >
                                <EventCard event={event} />
                            </Col>
                        )
                    })
                }
            </Row>
        </Card>
    )
}

export default UserEvents
