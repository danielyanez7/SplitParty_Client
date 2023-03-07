import { Container, Row, Col } from "react-bootstrap"
import NewProduct from "../../components/NewProduct/NewProduct"

const NewProductPage = () => {

    return (

        <Container>
            <Row>
                <Col md={{ offset: 3, span: 6 }}>

                    <h1>Add a new product</h1>

                    <hr />

                    <NewProduct />

                </Col>
            </Row>
        </Container>

    )
}

export default NewProductPage