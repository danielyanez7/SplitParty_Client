import './UserEvents.css'
import { Col, Container, Row } from "react-bootstrap"
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
        <Container className='my-3 p-2'>
            <Row>
                <Link to={`/users/${friend._id}`} >
                    <Col md={{ span: 6 }} className='d-flex align-items-center'>
                        <img src={friend.avatar} alt={friend.username} className='friendAvatar my-2 mx-3' />
                        <h3 className='ms-3 white-text'>{friend.username}</h3>
                    </Col>
                </Link>
            </Row>
            <Row>
                {
                    events.map(event => {
                        return (
                            <Col xl={{ span: 2 }} lg={{ span: 3 }} md={{ span: 4 }} key={event._id} className='d-grid ' >
                                <EventCard event={event} />
                            </Col>
                        )
                    })
                }
            </Row>
        </Container>
    )
}

export default UserEvents
