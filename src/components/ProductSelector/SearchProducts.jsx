import React, { useState, useEffect } from "react"
import { Form, ListGroup, Button } from "react-bootstrap"
import productsService from "../../services/products.services"

const ProductSelector = ({ onSelect }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        loadProducts()
    }, [])

    const loadProducts = () => {
        productsService
            .getAllProducts()
            .then(({ data }) => {
                setProducts(data)
            })
            .catch(err => console.log(err))
    }

    const [search, setSearch] = useState("");
    const [selectedProducts, setSelectedProducts] = useState([]);

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    }

    const filteredProducts = [...products].filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
    )

    const handleProductSelect = (product) => {

        if (!selectedProducts.includes(product)) {

            console.log(products)
            const indexOfProduct = products.indexOf(product)
            products.splice(indexOfProduct, 1)
            console.log(products)

            setSelectedProducts([...selectedProducts, { ...product, quantity: 1 }]);
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
        <>
            <Form.Group className="mb-3" controlId="selectedProducts">
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
                            onClick={() => handleProductSelect(product)}
                            action
                        >
                            {product.brand} - {product.name}
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Form.Group>
            <Form.Group className="mb-3" controlId="selectedProductsList">
                <Form.Label>Selected Products Jejejejeje</Form.Label>
                <ListGroup className="mt-3">
                    {selectedProducts.map((product) => (
                        <ListGroup.Item key={product.id}>
                            {product.name}
                            <Form.Control
                                type="number"
                                min={1}
                                value={product.quantity}
                                onChange={(e) =>
                                    handleProductQuantityChange(product, e.target.value)
                                }
                                className="ms-3"
                            />
                            <Button
                                variant="danger"
                                size="sm"
                                className="ms-3"
                                onClick={() => handleProductRemove(product)}
                            >
                                Remove
                            </Button>
                        </ListGroup.Item>
                    ))}
                </ListGroup>
            </Form.Group>
            <Button variant="dark"
                onClick={() => onSelect(selectedProducts)}
            >
                Add to event
            </Button>
        </>
    );
};

export default ProductSelector;
