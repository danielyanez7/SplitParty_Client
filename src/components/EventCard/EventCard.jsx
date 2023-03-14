import './EventCard.css'
import { Button, Col, Row } from "react-bootstrap"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth.context'
import usersService from '../../services/users.services'
import { MessageContext } from "../../context/message.context"

const EventCard = ({ event }) => {

    const { user: owner } = useContext(AuthContext)
    const { emitMessage } = useContext(MessageContext)

    const date = new Date(event.date)
    const formatDate = date.toDateString()
    const dateArray = formatDate.split(' ')

    const joinEvent = () => {
        usersService.joinEvent(owner._id, event._id)
        emitMessage(`We are waiting for you! See you att ${event.name}`)
    }

    return (
        <>
            <Link to={`/events/${event._id}`}>

                <Row className='p-2'>
                    <Col md={{ span: 4 }} className='text-center align-self-center'>
                        <p className='my-0'>{dateArray[0]}</p>
                        <h2 className='my-0'>{dateArray[2]}</h2>
                        <p className='my-0'>{dateArray[1]}. {dateArray[3]}</p>
                    </Col>
                    <Col md={{ span: 8 }} className='text-center align-self-center'>
                        <h3>{event.name}</h3>
                    </Col>
                </Row>
            </Link>
            <Row className='px-5 align-self-end'>
                <Button variant="link" className='rounded-pill  splitButton' onClick={joinEvent}>
                    Join
                </Button>
            </Row>
        </>
    )
}

export default EventCard
