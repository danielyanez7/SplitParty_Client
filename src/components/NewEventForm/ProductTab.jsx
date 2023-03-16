import React, { useState, useEffect } from "react"
import { Form, ListGroup, Button, Row, Col } from "react-bootstrap"
import productsService from "../../services/products.services"

const ProductSelector = ({ handleProductsChange, handleNext }) => {

    const [products, setProducts] = useState([])
    const [search, setSearch] = useState("");
    const [selectedProducts, setSelectedProducts] = useState([])

    useEffect(() => {
        loadProducts()
    }, [])

    useEffect(() => {
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

            setSelectedProducts([...selectedProducts, { product: product, quantity: 1 }])

        }
    }

    const handleProductRemove = (elm) => {
        products.push(elm.product)
        products.sort((a, b) => {

            const nameA = a.name
            const nameB = b.name

            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        })


        setSelectedProducts(selectedProducts.filter((p) => p !== elm));
    }

    const handleProductQuantityChange = (product, quantity) => {
        const updatedSelectedProducts = selectedProducts.map((p) =>
            p === product ? { ...p, quantity } : p
        )
        setSelectedProducts(updatedSelectedProducts)
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
                <ListGroup className="mt-3" style={{ maxHeight: 'calc(100vh - 300px)', overflowY: 'scroll' }}>
                    {filteredProducts.map((product) => (
                        <ListGroup.Item
                            key={product._id}
                            onClick={() => {
                                handleProductSelect(product)
                            }}
                            action
                            as="div"
                        >
                            <img src={`${product.picture}`} alt="product picture" className="friendAvatar" />   {product.name} - <strong>{product.price}€</strong>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Form.Group>

            <Form.Group as={Col} className="m-3" controlId="selectedProductsList">
                <Form.Label>Selected Products</Form.Label>
                <ListGroup className="mt-3" style={{ maxHeight: 'calc(100vh - 300px)', overflowY: 'scroll' }}>

                    {selectedProducts.map((elm) => (

                        <ListGroup.Item key={elm.product._id}>
                            <Row>
                                <Col md={{ span: 8 }}>
                                    <img src={`${elm.product.picture}`} alt="product picture" className="friendAvatar" /> {elm.product.name} - <strong>{elm.product.price}€</strong>
                                </Col>

                                <Col md={{ span: 4 }}>
                                    <Form.Control
                                        type="number"
                                        min={1}
                                        value={elm.quantity}
                                        onChange={(e) => handleProductQuantityChange(elm, e.target.value)}
                                        className="ms-1"
                                    />
                                </Col>

                            </Row>

                            <Button
                                variant="danger"
                                size="sm"
                                className="m-2"
                                onClick={() => handleProductRemove(elm)}
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
