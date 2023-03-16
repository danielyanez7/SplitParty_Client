import { Container, Row, Col } from "react-bootstrap"
import NewEventForm from "../../components/NewEventForm/NewEventForm"

const NewEventPage = () => {

    return (

        <Container>
            <Row className="footer-heigth">
                <Col md={{ span: 8 }}>

                    <h1>Add a new Event</h1>

                    <hr />

                    <NewEventForm />

                </Col>
            </Row>
        </Container>

    )
}

export default NewEventPage