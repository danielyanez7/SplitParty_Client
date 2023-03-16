import { useEffect, useState } from "react"
import eventsService from "../../services/events.services"
import EventCard from "../EventCard/EventCard"

const MyEvents = ({ id }) => {

    console.log("WHO ARE YOUUUU", id)

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
        <>
            <h2>Created Events</h2>
            {
                events.map(event => {
                    return <EventCard key={event._id} event={event} />
                })
            }
        </>
    )
}

export default MyEvents