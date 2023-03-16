import './UserCard.css'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const UserCard = ({ elm }) => {

    return (
        <Container>
            <Link to={`/users/${elm._id}`} className='userDetailsCard'>
                <Row className='g-0'>
                    <Col className='p-2'>
                        <Card.Img
                            src={elm.avatar}
                            alt={elm.username}
                            className='img-fluid rounded-circle userAvatar'
                        />
                        <h4 className='center-text white-text'>{elm.username}</h4>
                    </Col>
                </Row>
            </Link >
        </Container>
    )
}

export default UserCard