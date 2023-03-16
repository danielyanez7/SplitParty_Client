import './EventCard.css'
import { Button, Card } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/auth.context'
import { MessageContext } from "../../context/message.context"
import eventsService from '../../services/events.services'

const EventCard = ({ event }) => {

    const { user: owner, refreshToken } = useContext(AuthContext)
    const { emitMessage } = useContext(MessageContext)

    const [thisEvent, setThisEvent] = useState({})

    useEffect(() => {
        event && setThisEvent(event)
    }, [event])

    const date = new Date(thisEvent.date)
    const formatDate = date.toDateString()
    const dateArray = formatDate.split(' ')


    const joinEvent = () => {
        eventsService
            .joinEvent(owner._id, event._id)
            .then(({ data }) => {
                setThisEvent(data)
                emitMessage(`We are waiting for you! See you att ${event.name}`)
                refreshToken()
            })
            .catch(err => console.log(err))
    }

    const exitEvent = () => {
        eventsService
            .exitEvent(owner._id, event._id)
            .then(({ data }) => {
                setThisEvent(data)
                emitMessage(`We are going to miss you`)
                refreshToken()
            })
            .catch(err => console.log(err))
    }

    console.log(thisEvent)

    const isGoing = thisEvent.guests?.includes(owner._id)
    // const isOwner = event.owner === owner._id

    return (
        <Card className='text-center'>
            <Link to={`/events/${event._id}`} className="event-font-color">
                <Card.Header className="event-card-header">{thisEvent.name}</Card.Header>
            </Link>
            <Card.Body>
                <Link to={`/events/${event._id}`} className="event-font-color">
                    <Card.Title className="event-card-title">
                        <p className='my-0'>{dateArray[0]}</p>
                        <h2 className='my-0'>{dateArray[2]}</h2>
                        <p className='my-0'>{dateArray[1]}. {dateArray[3]}</p>
                    </Card.Title>
                </Link>
                {
                    !isGoing
                        ?
                        <Button variant="success" className='event-card-button' onClick={joinEvent}>
                            Join
                        </Button>
                        :
                        <Button variant="danger" className='event-card-button' onClick={exitEvent}>
                            Exit
                        </Button>
                }
            </Card.Body>
        </Card>
    )
}

export default EventCard





