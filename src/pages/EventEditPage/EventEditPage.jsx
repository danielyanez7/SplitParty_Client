import { Container, Row, Col } from "react-bootstrap"
import EventEdit from "../../components/EventEdit/EventEdit"

const EventEditPage = () => {

    return (

        <Container className="pt-5">
            <Row>
                <Col md={{ offset: 2, span: 8 }}>

                    <h1>Edit your Event</h1>

                    <hr />

                    <EventEdit />

                </Col>
            </Row>
        </Container>

    )
}

export default EventEditPage