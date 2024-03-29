import './EventDetails.css'
import { Container, Card, ListGroup, Row, Col, Table, Modal, Button } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { MessageContext } from "../../context/message.context"
import eventsService from "../../services/events.services"
import Loader from "../../components/Loader/Loader"
import * as Constants from './../../consts'
import { AuthContext } from '../../context/auth.context'


const EventDetails = ({ event }) => {

    const { user: owner, refreshToken } = useContext(AuthContext)
    const { emitMessage } = useContext(MessageContext)

    const [errors, setErrors] = useState([])
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [thisEvent, setThisEvent] = useState({})

    let total = 0

    const navigate = useNavigate()

    const date = new Date(event.date)
    const formatDate = date.toDateString()
    const dateArray = formatDate.split(' ')



    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
    }, [])

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


    useEffect(() => {
        event && setThisEvent(event)
    }, [event])

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

    const isOwner = thisEvent && owner ? thisEvent?.owner?._id === owner?._id : false
    // const isGoing = !isOwner && thisEvent?.guests.includes(owner._id)

    // console.log(isGoing)

    return (
        <Row>
            {
                isLoading
                    ?
                    <Loader />
                    :
                    < ListGroup variant="flush" >

                        <ListGroup.Item className='eventDetailsBanner'
                            style={{
                                backgroundImage: `url(${event.banner})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}>
                            <Card.Title>
                                <h1>{event.name}</h1>
                            </Card.Title>
                        </ListGroup.Item>
                        <Container>
                            <ListGroup.Item className='mt-5' >

                                <Row>
                                    <Col md={{ span: 2 }} className='text-center align-self-center'>
                                        <p className='my-0'>{dateArray[0]}</p>
                                        <h2 className='my-0'>{dateArray[2]}</h2>
                                        <h3 className='my-0'>{dateArray[1]}. {dateArray[3]}</h3>
                                        <p>{event.time}</p>
                                    </Col>
                                    <Col md={{ span: 8 }}>
                                        <p> {event.description}</p>
                                        <p>
                                            <img src="https://res.cloudinary.com/dztjq7i4a/image/upload/v1679049963/map_pin_icon_128819_fhnd5g.png" alt="location" className='social-media-img mx-2' />
                                            <strong>{event.location}</strong>
                                        </p>
                                    </Col>
                                    <Col md={{ span: 2 }} className='d-flex justify-content-center align-items-center'>
                                        {
                                            isOwner
                                            &&
                                            <div className='d-block'>
                                                <Link variant="link" to={`/events/${event._id}/edit`}>
                                                    <img src="https://res.cloudinary.com/dztjq7i4a/image/upload/v1679049963/edit_icon_128873_gazpft.png" alt="Edit" className='detailsButton mx-2' />
                                                </Link>
                                                <Link variant="link" onClick={() => setShowDeleteModal(true)} >
                                                    <img src="https://res.cloudinary.com/dztjq7i4a/image/upload/v1679049963/trash_icon_128726_lignrr.png" alt="Delete" className='detailsButton mx-2' />
                                                </Link>
                                            </div>

                                            // <>
                                            //     {
                                            //         isGoing
                                            //             ?
                                            //             <div className='d-block'>
                                            //                 <Button variant="dark" className='event-card-button delete-button' onClick={exitEvent}>
                                            //                     Exit
                                            //                 </Button>
                                            //             </div>
                                            //             :
                                            //             <div className='d-block'>
                                            //                 <Button variant="dark" className='event-card-button green-button' onClick={joinEvent}>
                                            //                     Join
                                            //                 </Button>
                                            //             </div>
                                            //     }
                                            // </>
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
                                    </Col>
                                </Row>

                                <Table striped bordered hover size="sm">
                                    <thead>
                                        <tr>
                                            <th style={{ textAlign: 'center' }}>Name</th>
                                            <th style={{ textAlign: 'center' }}>Quantity</th>
                                            <th style={{ textAlign: 'center' }}>Cost</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {event.products && event.products.map((elm) => {

                                            total += elm.product.price * elm.quantity

                                            return (
                                                <tr key={elm.product._id}>
                                                    <td>
                                                        {elm.product.name}
                                                    </td>
                                                    <td style={{ textAlign: 'center' }}>
                                                        {elm.quantity}
                                                    </td>
                                                    <td style={{ textAlign: 'center' }}>
                                                        <strong>{(elm.product.price * elm.quantity).toFixed(2)}€</strong>
                                                    </td>
                                                </tr>
                                            )
                                        }

                                        )}
                                        <tr>
                                            <td>Total</td>
                                            <td></td>
                                            <td style={{ textAlign: 'center' }}>
                                                <strong>{total.toFixed(2)}€</strong>
                                            </td>
                                        </tr>
                                    </tbody>

                                </Table>

                                <Row>
                                    <Col md={3}>
                                        <div className="">
                                            Owner
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        <img src={event.owner.avatar} alt={event.owner.username} className='friendAvatar mx-2' />
                                        <span>{event.owner.username}</span>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={3}>
                                        <div className="">
                                            Guests
                                        </div>
                                    </Col>
                                    <Col md={3}>
                                        {
                                            thisEvent.guests?.map(guest => {
                                                return <img src={guest.avatar} alt={guest.username} className='friendAvatar mx-2' />
                                            })
                                        }
                                    </Col>

                                    <Col md={6} style={{ textAlign: 'right' }}>
                                        <p>
                                            <img src="https://res.cloudinary.com/dztjq7i4a/image/upload/v1679049963/whatsapp_icon-icons.com_65442_fahvxp.png" alt="Whatsapp Icon" className='social-media-img mx-2' />
                                            Contact Host
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={3}>
                                        <div className="">
                                            Per Guest
                                        </div>
                                    </Col>
                                    <Col md={3}>{(total / (thisEvent.guests?.length + 1)).toFixed(2)}€ </Col>
                                    <Col md={6} style={{ textAlign: 'right' }}>
                                        <p>
                                            <img src="https://res.cloudinary.com/dztjq7i4a/image/upload/v1679049963/instagram_icon-icons.com_65435_zmck0o.png" alt="Instagram Icon" className='social-media-img mx-2' />
                                            #{event.name?.split(' ').join('')}{dateArray[2]}{dateArray[1]}
                                        </p>
                                    </Col>
                                </Row>
                            </ListGroup.Item>
                        </Container>
                    </ListGroup >

            }
        </Row>
    )
}

export default EventDetails
