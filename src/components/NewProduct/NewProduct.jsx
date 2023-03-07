import { Form, Button } from "react-bootstrap"

const NewProduct = () => {

    return (
        <Form>
            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="price">
                <Form.Label>Price</Form.Label>
                <Form.Control type="number" name="price" step="0.01" min="0" placeholder="€" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="image">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" name="image" />
            </Form.Group>

            <div className="d-grid">
                <Button variant="dark" type="submit">Add Product</Button>
            </div>
        </Form>
    )
}

export default NewProduct