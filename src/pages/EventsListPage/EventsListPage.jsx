import { useContext } from "react"
import { Container } from "react-bootstrap"
import EventList from "../../components/EventList/EventList"
import { AuthContext } from "../../context/auth.context"


const EventsListPage = () => {

    const { user } = useContext(AuthContext)

    return (
        <Container>
            <h1>Events List Page</h1>
            {
                <EventList />
            }
        </Container>
    )
}

export default EventsListPage