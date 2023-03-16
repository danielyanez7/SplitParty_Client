import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import eventsService from "../../services/events.services"
import EventDetails from "../../components/EventDetails/EventDetails"
import { Row } from "react-bootstrap"


const EventDetailsPage = () => {

    const { id } = useParams()

    const [event, setEvent] = useState({})

    useEffect(() => {
        eventsService
            .getOneEvent(id)
            .then(({ data }) => setEvent(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            <Row className="footer-heigth">
                <EventDetails event={event} />
            </Row>
        </>
    )
}

export default EventDetailsPage