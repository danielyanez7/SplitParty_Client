import { useEffect, useState } from "react"
import { Col, Row } from "react-bootstrap"
import eventsService from "../../services/events.services"
import EventCard from "../EventCard/EventCard"

const MyEvents = ({ id }) => {

    const [events, setEvents] = useState([])

    const loadMyEvents = () => {

        eventsService
            .getUserEvents(id)
            .then(({ data }) => setEvents(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        id && loadMyEvents()
    }, [id])

    return (
        <Row className="my-3">
            <h2>Created Events</h2>
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
    )
}

export default MyEvents