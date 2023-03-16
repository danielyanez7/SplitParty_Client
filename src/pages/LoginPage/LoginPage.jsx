import './LoginPage.css'
import { Container, Row, Col } from "react-bootstrap"
import LoginForm from '../../components/LoginForm/LoginForm'

const LoginPage = () => {

    return (
        <Container>
            <Row className='footer-heigth'>
                <Col md={{ span: 6 }}>

                    <h1>Log In</h1>

                    <hr />

                    <LoginForm />

                </Col>
            </Row>
        </Container>
    )
}

export default LoginPage