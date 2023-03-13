import { useContext } from 'react'
import { Card, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/auth.context'
import usersService from '../../services/users.services'
import './UserDetails.css'


const UserDetails = ({ user }) => {

    const { user: owner } = useContext(AuthContext)

    const addFriend = () => {
        usersService.addFriend(owner._id, user._id)
    }

    return (

        <Row className='g-0'>
            <Col md='4' className='p-5'>
                <img src={user.avatar} alt={user.username} className='img-fluid rounded-circle userAvatar' />
            </Col>

            <Col md='8' className='py-5 px-2'>

                <Card.Body>

                    <Row className='d-flex align-items-center'>

                        <Col>
                            <h1>{user.username}</h1>
                        </Col>
                        <Col className='d-flex justify-content-end align-items-center'>

                            {owner._id !== user._id
                                ?
                                <>
                                    <Button variant="link" onClick={addFriend}>
                                        <img src="https://cdn.icon-icons.com/icons2/2098/PNG/512/user_check_icon_128710.png" alt="Add friend" className='detailsButton' />
                                    </Button>
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

                    </Row>

                    <h4>
                        Eventos
                    </h4>

                    <h4>
                        Amigos
                    </h4>

                </Card.Body>

            </Col>
        </Row>

    )
}

export default UserDetails