import { Container } from "react-bootstrap"
import EventList from "../../components/EventList/EventList"

const EventsListPage = () => {

    return (
        <Container className="pt-3">
            <EventList />
        </Container>
    )
}

export default EventsListPage