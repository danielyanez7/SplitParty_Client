import { useEffect, useState } from "react"
import eventsService from "../../services/events.services"
import EventCard from "../EventCard/EventCard"

const MyEvents = ({ id }) => {

    const [events, setEvents] = useState([])

    useEffect(() => {
        loadMyEvents()
    }, [id])

    const loadMyEvents = () => {

        eventsService
            .getUserEvents(id)
            .then(({ data }) => setEvents(data))
            .catch(err => console.log(err))
    }


    return (
        <>
            <h2>Created Events</h2>
            {
                events.map(event => {
                    return <EventCard event={event} />
                })
            }
        </>
    )
}

export default MyEvents