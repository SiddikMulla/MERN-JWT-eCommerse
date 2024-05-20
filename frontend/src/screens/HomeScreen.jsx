import React from 'react'
import { Row, Col } from "react-bootstrap"
import products from '../products'
import ProductList from '../components/ProductList'

const HomeScreen = () => {
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