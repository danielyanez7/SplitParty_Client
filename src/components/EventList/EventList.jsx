import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import EventCard from "../EventCard/EventCard"
import eventsService from "../../services/events.services"

const EventList = () => {

    const [events, setEvetns] = useState([])

    useEffect(() => {
        loadEvents()
    }, [])

    const loadEvents = () => {
        eventsService
            .getAllEvents()
            .then(({ data }) => setEvetns(data))
            .catch(err => console.log(err))
    }

    return (
        <Row>
            {
                events.map(elm => {
                    return (
                        <Col md={{ span: 6 }} key={elm._id} className='p-2'>
                            <EventCard elm={elm} />
                        </Col>
                    )
                })
            }
        </Row>

    )
}

export default EventList