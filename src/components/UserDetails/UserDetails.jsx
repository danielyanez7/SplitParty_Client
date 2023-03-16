import './UserDetails.css'
import { useContext, useState, useEffect } from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import usersService from '../../services/users.services'
import { MessageContext } from "../../context/message.context"
import Loader from "../../components/Loader/Loader"
import * as Constants from './../../consts'


const UserDetails = ({ user }) => {

    const { user: owner, refreshToken } = useContext(AuthContext)
    const { emitMessage } = useContext(MessageContext)

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 500)
    }, [])

    const addFriend = () => {
        usersService
            .addFriend(owner._id, user._id)
            .then(() => {
                emitMessage(Constants.ADDFRIEND_MSG)
                refreshToken()
            })
            .catch(err => console.log(err))
    }

    const deleteFriend = () => {
        usersService
            .deleteFriend(owner._id, user._id)
            .then(() => {
                emitMessage(Constants.DELETEFRIEND_MSG)
                refreshToken()
            })
            .catch(err => console.log(err))
    }

    const isOWner = owner?._id !== user._id
    const areFriends = owner?.friends.map(friend => friend.includes(user._id)).includes(true)

    return (
        <>
            {
                isLoading
                    ?
                    <Loader />
                    :
                    <Row className='g-0'>

                        < Col md={{ span: 3 }} className='p-5' >
                            <img src={user.avatar} alt={user.username} className='img-fluid rounded-circle userAvatar' />
                        </Col >

                        <Col md={{ span: 8 }} className='py-5 px-2'>
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
                                                    <Button variant="link" onClick={deleteFriend}>
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
                                                    <img src="https://cdn.icon-icons.com/icons2/2098/PNG/512/edit_icon_128873.png" alt="Edit" className='detailsButton' />
                                                </Link>
                                            </>
                                        }

                                    </Col>

                                    <Col md={{ span: 12 }} className='mx-3'>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut in nulla autem consequatur quos numquam repudiandae voluptatem quaerat neque cumque voluptatum exercitationem facere, impedit ducimus soluta vero, magni, eligendi sequi?</p>
                                    </Col>
                                    <Col md={{ span: 12 }} className='mx-3'>
                                        <h4>
                                            Following
                                        </h4>
                                        {
                                            user.friends?.map(friend => {
                                                return (
                                                    <Link key={friend._id} to={`/users/${friend._id}`}>
                                                        <img src={friend.avatar} alt={friend.username} className='friendAvatar mx-2' />
                                                    </Link>
                                                )
                                            })
                                        }
                                    </Col>

                                </Row>


                            </Card.Body>

                        </Col>

                    </Row>
            }
        </>

    )
}

export default UserDetails

