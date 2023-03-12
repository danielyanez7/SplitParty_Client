import { Container, Card, Row, Col, Button } from 'react-bootstrap'
import './UserDetails.css'

const UserDetails = ({ user }) => {

    return (

        <Card className='card'>
            <div style={{ position: 'absolute', top: 2, right: 2 }}>
                <Button variant="link">
                    <img src="https://cdn.icon-icons.com/icons2/2098/PNG/512/edit_icon_128873.png" alt="Editar" style={{ width: 20, height: 20, marginRight: 1 }} />
                </Button>
                <Button variant="link">
                    <img src="https://cdn.icon-icons.com/icons2/2098/PNG/512/trash_icon_128726.png" alt="Borrar" style={{ width: 20, height: 20 }} />
                </Button>
                <Button variant="link">
                    <img src="https://cdn.icon-icons.com/icons2/2098/PNG/512/user_check_icon_128710.png" alt="Agregar amigo" style={{ width: 20, height: 20 }} />
                </Button>
            </div>
            <Row className='g-0'>
                <Col md='4'>
                    <Card.Img
                        src={user.avatar}
                        alt={user.username}
                        style={{ objectFit: 'cover' }}
                    />
                </Col>
                <Col md='8'>
                    <Card.Body>
                        <Card.Title>{user.username}</Card.Title>
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

    )
}

export default UserDetails