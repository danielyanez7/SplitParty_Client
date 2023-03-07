import { useContext, useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import EventList from "../../components/EventList/EventList"
import { AuthContext } from "../../context/auth.context"
import eventsService from "../../services/events.services"


const EventsListPage = () => {

    const [events, setEvetns] = useState([])

    const { user } = useContext(AuthContext)

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
        <Container>
            <h1>Events List Page</h1>
            {
                <EventList events={events} />
            }
        </Container>
    )
}

export default EventsListPage