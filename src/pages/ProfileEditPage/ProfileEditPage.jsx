import { Col, Container, Row } from "react-bootstrap"
import UserEditForm from "../../components/UserEditForm/UserEditForm"

const ProfileEditPage = () => {

    return (

        <Container>
            <Row className="footer-heigth">
                <Col md={{ span: 6 }}>

                    <h1>Profile Edit</h1>

                    <hr />

                    <UserEditForm />

                </Col>
            </Row>
        </Container>
    )
}

export default ProfileEditPage