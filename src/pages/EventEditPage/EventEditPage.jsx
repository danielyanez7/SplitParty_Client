import { Container, Row, Col } from "react-bootstrap"
import EventEdit from "../../components/EventEdit/EventEdit"

const EventEditPage = () => {

    return (

        <Container>
            <Row className="footer-heigth">
                <Col md={{ span: 8 }}>

                    <h1>Edit your Event</h1>

                    <hr />

                    <EventEdit />

                </Col>
            </Row>
        </Container>

    )
}

export default EventEditPage