import React, { useState, useEffect } from "react"
import { Form, ListGroup, Button, Row, Col } from "react-bootstrap"
import productsService from "../../services/products.services"

const ProductSelector = ({ handleProductsChange, handleNext }) => {

    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("");
    const [selectedProducts, setSelectedProducts] = useState([])

    useEffect(() => {
        loadProducts()
        handleProductsChange(selectedProducts)
    }, [selectedProducts])

    const loadProducts = () => {
        productsService
            .getAllProducts()
            .then(({ data }) => {
                setProducts(data)
            })
            .catch(err => console.log(err))
    }



    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    const filteredProducts = [...products].filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    )

    const handleProductSelect = (product) => {

        if (!selectedProducts.includes(product)) {

            const indexOfProduct = products.indexOf(product)
            products.splice(indexOfProduct, 1)

            setSelectedProducts([...selectedProducts, { ...product, quantity: 1 }])

        }
    }

    const handleProductRemove = (product) => {
        products.push(product)
        setSelectedProducts(selectedProducts.filter((p) => p !== product));
    }

    const handleProductQuantityChange = (product, quantity) => {
        const updatedSelectedProducts = selectedProducts.map((p) =>
            p === product ? { ...p, quantity } : p
        );
        setSelectedProducts(updatedSelectedProducts);
    }

    return (
        <Row>
            <Form.Group
                as={Col}
                className="m-3"
                controlId="selectedProducts"
            >
                <Form.Label>Products</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Search products..."
                    value={search}
                    onChange={handleSearchChange}
                />
                <ListGroup className="mt-3">
                    {filteredProducts.map((product) => (
                        <ListGroup.Item
                            key={product.id}
                            onClick={() => {
                                handleProductSelect(product)
                            }}
                            action
                            as="div"
                        >
                            {product.name} - <strong>{product.price}€</strong>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Form.Group>

            <Form.Group as={Col} className="m-3" controlId="selectedProductsList">
                <Form.Label>Selected Products</Form.Label>
                <ListGroup className="mt-3" >
                    {selectedProducts.map((product) => (

                        <ListGroup.Item key={product.id}>
                            <Row>
                                <Col md={{ span: 8 }}>
                                    {product.name} - <strong>{product.price}€</strong>
                                </Col>
                                <Col md={{ span: 4 }}>
                                    <Form.Control
                                        type="number"
                                        min={1}
                                        value={product.quantity}
                                        onChange={(e) => handleProductQuantityChange(product, e.target.value)}
                                        className="ms-1"
                                    />
                                </Col>
                            </Row>
                            <Button
                                variant="danger"
                                size="sm"
                                className="m-2"
                                onClick={() => handleProductRemove(product)}
                            >
                                Remove
                            </Button>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
                <Button variant="dark" onClick={handleNext} className="m-2">
                    Next
                </Button>
            </Form.Group>
        </Row>
    );
};

export default ProductSelector
