import './UserDetails.css'
import { useContext, useEffect, useState } from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import usersService from '../../services/users.services'
import { MessageContext } from "../../context/message.context"


const UserDetails = ({ user }) => {

    const { user: owner } = useContext(AuthContext)
    const { emitMessage } = useContext(MessageContext)

    const addFriend = () => {
        usersService.addFriend(owner._id, user._id)
        emitMessage('Congrats, you have a new friend!')
    }

    const isOWner = owner?._id !== user._id
    const areFriends = owner.friends?.map(friend => friend.includes(user._id))

    return (

        <Row className='g-0'>
            <Col md='4' className='py-5'>
                <img src={user.avatar} alt={user.username} className='img-fluid rounded-circle userAvatar' />
            </Col>

            <Col md='8' className='py-5 px-2'>

                <Card.Body>

                    <Row className='d-flex align-items-center'>

                        <Col md={{ span: 8 }}>
                            <h1>{user.username}</h1>
                        </Col>
                        <Col md={{ span: 4 }} className='d-flex justify-content-end align-items-center'>

                            {isOWner
                                ?
                                <>
                                    {areFriends
                                        ?
                                        <Button variant="link" onClick={addFriend}>
                                            <img src="https://cdn.icon-icons.com/icons2/2098/PNG/512/square_close_cross_icon_128691.png" alt="Add friend" className='detailsButton' />
                                        </Button>
                                        :
                                        <Button variant="link" onClick={addFriend}>
                                            <img src="https://cdn.icon-icons.com/icons2/2098/PNG/512/user_check_icon_128710.png" alt="Add friend" className='detailsButton' />
                                        </Button>
                                    }
                                </>
                                :
                                <>
                                    <Link variant="link" to={'/profile/edit'}>
                                        <img src="https://cdn.icon-icons.com/icons2/2098/PNG/512/edit_icon_128873.png" alt="Editar" className='detailsButton' />
                                    </Link>
                                    <Button variant="link">
                                        <img src="https://cdn.icon-icons.com/icons2/2098/PNG/512/trash_icon_128726.png" alt="Borrar" className='detailsButton' />
                                    </Button>
                                </>
                            }

                        </Col>

                        <Col md={{ span: 12 }} className='mx-3'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut in nulla autem consequatur quos numquam repudiandae voluptatem quaerat neque cumque voluptatum exercitationem facere, impedit ducimus soluta vero, magni, eligendi sequi?</p>
                        </Col>
                        <Col md={{ span: 12 }} className='mx-3'>
                            <h4>
                                Friends
                            </h4>
                            {
                                user.friends?.map(friend => {
                                    return <img src={friend.avatar} alt={friend.username} className='friendAvatar mx-2' />
                                    //  <p>{friend.username}</p>
                                })
                            }
                        </Col>

                    </Row>


                </Card.Body>

            </Col>
        </Row>

    )
}

export default UserDetails