import { Container, Row, Col } from 'react-bootstrap'
import SignupForm from '../../components/SignupForm/SignupForm'

const SignupPage = () => {

    return (
        <Container>
            <Row className='footer-heigth'>
                <Col md={{ span: 6 }}>

                    <h1>Sign Up</h1>

                    <hr />

                    <SignupForm />

                </Col>
            </Row>
        </Container>
    )
}

export default SignupPage