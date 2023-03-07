import { Link } from "react-router-dom"
import { Container, Row, Col, Button } from "react-bootstrap"

const UserDetailsPage = () => {

    return (
        <Container>
            <h1 className="mb-4">User Details</h1>
            <hr />
            <Row>
                <Col md={{ span: 6, offset: 1 }}>
                    <h1>Hola aqui van los detalles del usuario</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default UserDetailsPage