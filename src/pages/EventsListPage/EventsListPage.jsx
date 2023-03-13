import { Container } from "react-bootstrap"
import EventList from "../../components/EventList/EventList"

const EventsListPage = () => {

    return (
        <Container className="pt-5">
            <EventList />
        </Container>
    )
}

export default EventsListPage