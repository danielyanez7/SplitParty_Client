import { Link } from "react-router-dom"
import { Container, Row, Col, Button } from "react-bootstrap"

const ProductDetailsPage = () => {

    return (
        <Container>
            <h1 className="mb-4">Product Details</h1>
            <hr />
            <Row>
                <Col md={{ span: 6, offset: 1 }}>
                    <h1>Hola aqui van los detalles del producto</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default ProductDetailsPage