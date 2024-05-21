import React, { useEffect, useState } from 'react'
import { Row, Col } from "react-bootstrap"
import ProductList from '../components/ProductList'
import axios from 'axios';

const HomeScreen = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const { data } = await axios.get('/api/products');
            setProducts(data);
        };
        fetchProducts();

    }, [])

    return (
        <>
            <div>
                <h3 style={{ textAlign: 'center' }}>Latest Products</h3>
                <Row>
                    {products.map((product) => (
                        <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                            <ProductList product={product} />
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    )
}

export default HomeScreen