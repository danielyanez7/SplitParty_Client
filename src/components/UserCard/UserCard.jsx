import './UserCard.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const UserCard = ({ elm }) => {
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    return (
        <Container>
            <Card style={{ maxWidth: '540px' }} className='card'>
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
                            <div className='text-center'>
                                <div className='btn-group'>
                                    <Link to={`/users/${elm._id}`}>
                                        <Button className='btn btn-dark btn-sm me-2'>Details</Button>
                                    </Link>
                                    <Button className='btn btn-dark btn-sm me-2'>Edit</Button>
                                    <Button
                                        className='btn btn-danger btn-sm'
                                        onClick={() => setShowDeleteModal(true)}
                                    >
                                        Delete
                                    </Button>

                                </div>
                            </div>
                        </Card.Body>
                    </Col>
                </Row>
            </Card>
        </Container>
    );
};

export default UserCard;
