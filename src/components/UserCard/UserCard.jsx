import { useState } from 'react'
import './UserCard.css'
import { Card, Col, Container, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import usersService from './../../services/users.services'

const UserCard = ({ elm }) => {
    const [isFriend, setIsFriend] = useState(false);
    const [errors, setErrors] = useState([])

    const handleAddFriendClick = () => {
        usersService.addFriend(elm.owner, elm._id)
            .then(data => {
                setIsFriend(true)
            })
            .catch(err => {
                setErrors(err.response.data.errorMessages)
            })
    }

    return (
        <Container>
            <Link to={`/users/${elm._id}`}>
                <Card style={{ maxWidth: '540px' }} className='userDetailsCard'>
                    <div style={{ position: 'absolute', top: 2, right: 2 }}>
                        {!isFriend &&
                            <Button variant="link" onClick={handleAddFriendClick}>
                                <img src="https://cdn.icon-icons.com/icons2/2098/PNG/512/user_check_icon_128710.png" alt="Agregar amigo" style={{ width: 20, height: 20 }} />
                            </Button>
                        }
                        {isFriend &&
                            <Button variant="link" disabled>
                                <img src="https://cdn.icon-icons.com/icons2/2098/PNG/512/user_check_icon_128710.png" alt="Amigo agregado" style={{ width: 20, height: 20 }} />
                            </Button>
                        }
                    </div>
                    <Row className='g-0'>
                        <Col md='4'>
                            <Card.Img
                                src={elm.avatar}
                                alt={elm.username}
                            />
                        </Col>
                        <Col md='8'>
                            <Card.Body>
                                <Card.Title>{elm.username}</Card.Title>
                                <Card.Text>
                                    Eventos
                                </Card.Text>
                                <Card.Text>
                                    <small className='text-muted'>Amigos</small>
                                </Card.Text>
                            </Card.Body>
                        </Col>
                    </Row>
                </Card>
            </Link >
        </Container>
    )
}

export default UserCard