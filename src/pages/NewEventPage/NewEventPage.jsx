import { Container, Row, Col } from "react-bootstrap"
import NewEventForm from "../../components/NewEventForm/NewEventForm"

const NewEventPage = () => {

    return (

        <Container>
            <Row>
                <Col md={{ offset: 2, span: 8 }} className="mt-5">

                    <h1>Add a new Event</h1>

                    <hr />

                    <NewEventForm />

                </Col>
            </Row>
        </Container>

    )
}

export default NewEventPage