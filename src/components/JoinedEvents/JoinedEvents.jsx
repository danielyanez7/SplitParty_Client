import { useEffect, useState } from "react"
import eventsService from "../../services/events.services"
import EventCard from "../EventCard/EventCard"

const JoinedEvents = () => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        loadMyEvents()
    }, [])

    const loadMyEvents = () => {

        eventsService
            .getJoinedEvents()
            .then(({ data }) => setEvents(data))
            .catch(err => console.log(err))
    }

    return (
        <>
            <h2>Joined events</h2>
            {
                events.map(event => {
                    return <EventCard event={event} />
                })
            }
        </>
    )
}

export default JoinedEvents