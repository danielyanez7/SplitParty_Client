import { Col, Container, Row } from "react-bootstrap"
import EventCard from "../EventCard/EventCard"

const EventList = ({ events }) => {

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