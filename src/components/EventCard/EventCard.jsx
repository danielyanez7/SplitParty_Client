import './EventCard.css'
import { Button, Card, Modal } from "react-bootstrap"
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../context/auth.context'
import { MessageContext } from "../../context/message.context"
import eventsService from '../../services/events.services'
import * as Constants from './../../consts'

const EventCard = ({ event }) => {

    const { user: owner, refreshToken } = useContext(AuthContext)
    const { emitMessage } = useContext(MessageContext)

    const [thisEvent, setThisEvent] = useState({})
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [errors, setErrors] = useState([])

    const navigate = useNavigate()

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

    const handleDelete = e => {

        e.preventDefault()

        eventsService
            .deleteEvent(event._id)
            .then(() => {
                emitMessage(Constants.DELETEEVENT_MSG)
                navigate(`/events`)
            })
            .catch(err => setErrors(err.response.data.errorMessages))
        setShowDeleteModal(false)
    }

    const isGoing = thisEvent.guests?.includes(owner._id)
    const isOwner = thisEvent && owner ? thisEvent?.owner?._id === owner?._id : false

    return (
        <Card className='text-center'>
            <Link to={`/events/${event._id}`} className="event-font-color">
                <Card.Header className="event-card-header">{thisEvent.name}</Card.Header>
            </Link>
            <Card.Body>
                <Link to={`/events/${event._id}`} className="event-font-color">
                    <Card.Title className="event-card-title black-text">
                        <p className='my-0'>{dateArray[0]}</p>
                        <h2 className='my-0'>{dateArray[2]}</h2>
                        <p className='my-0'>{dateArray[1]}. {dateArray[3]}</p>
                    </Card.Title>
                </Link>
                {isOwner
                    ?
                    <div className='d-block'>
                        <Link variant="link" to={`/events/${event._id}/edit`}>
                            <img src="https://res.cloudinary.com/dztjq7i4a/image/upload/v1679049963/edit_icon_128873_gazpft.png" alt="Edit" className='detailsButton mx-2' />
                        </Link>

                    </div>
                    :
                    <>
                        {
                            !isGoing
                                ?
                                <Button variant="dark" className='event-card-button green-button' onClick={joinEvent}>
                                    Join
                                </Button>
                                :
                                <Button variant="dark" className='event-card-button delete-button' onClick={exitEvent}>
                                    Exit
                                </Button>
                        }

                        <Modal show={showDeleteModal} onHide={() => setShowDeleteModal(false)}>
                            <Modal.Header closeButton>
                                <Modal.Title>Confirmar eliminación</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                ¿Está seguro de que desea eliminar este evento?
                            </Modal.Body>
                            <Modal.Footer>
                                <Button variant="secondary" onClick={() => setShowDeleteModal(false)}>
                                    Cancelar
                                </Button>
                                <Button variant="danger" to="/events" onClick={handleDelete}>
                                    Eliminar
                                </Button>
                            </Modal.Footer>
                        </Modal>
                    </>
                }

            </Card.Body>
        </Card >
    )
}

export default EventCard





