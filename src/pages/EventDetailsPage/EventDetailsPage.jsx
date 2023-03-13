import { useParams } from "react-router-dom"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useEffect, useState } from "react"
import eventsService from "../../services/events.services"
import EventDetails from "../../components/EventDetails/EventDetails"

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
            <EventDetails event={event} />
        </>
    )
}

export default EventDetailsPage