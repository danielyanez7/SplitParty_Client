import { Container, Row, Col } from "react-bootstrap"
import EventEdit from "../../components/EventEdit/EventEdit"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import eventsService from "../../services/events.services"

const EventEditPage = () => {

    return (

        <Container>
            <Row>
                <Col md={{ offset: 2, span: 8 }} className="mt-5">

                    <h1>Edit your Event</h1>

                    <hr />

                    <EventEdit />

                </Col>
            </Row>
        </Container>

    )
}

export default EventEditPage