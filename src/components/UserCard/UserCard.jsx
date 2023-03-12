import './UserCard.css'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserCard = ({ elm }) => {

    return (
        <Container>
            <Card style={{ maxWidth: '540px' }}>
                <Link to={`/users/${elm._id}`} className='userDetailsCard'>
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
                </Link >
            </Card>
        </Container>
    )
}

export default UserCard