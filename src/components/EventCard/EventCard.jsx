import './EventCard.css'
import { Button, Card } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import { MessageContext } from "../../context/message.context"
import eventsService from '../../services/events.services'

const EventCard = ({ event }) => {

    const { user: owner, refreshToken } = useContext(AuthContext)
    const { emitMessage } = useContext(MessageContext)

    const date = new Date(event.date)
    const formatDate = date.toDateString()
    const dateArray = formatDate.split(' ')

    const joinEvent = () => {
        eventsService
            .joinEvent(owner._id, event._id)
            .then(() => {
                emitMessage(`We are waiting for you! See you att ${event.name}`)
                refreshToken()
            })
            .catch(err => console.log(err))
    }

    const isGoing = event.guests.includes(owner._id)
    const isOwner = event.owner === owner._id

    return (
        <Card className='text-center'>
            <Link to={`/events/${event._id}`} className="event-font-color">
                <Card.Header className="event-card-header">{event.name}</Card.Header>
                <Card.Body>
                    <Card.Title className="event-card-title">
                        <p className='my-0'>{dateArray[0]}</p>
                        <h2 className='my-0'>{dateArray[2]}</h2>
                        <p className='my-0'>{dateArray[1]}. {dateArray[3]}</p>
                    </Card.Title>
                    {
                        !isGoing &&
                        <Button variant="primary" className='event-card-button' onClick={joinEvent}>
                            Join
                        </Button>
                    }
                </Card.Body>
            </Link>
        </Card>
    )
}

export default EventCard





