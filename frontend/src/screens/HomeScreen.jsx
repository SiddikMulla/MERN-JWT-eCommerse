import { Row, Col } from "react-bootstrap"
import ProductList from '../components/ProductList'
import { useGetProductsQuery } from "../../slices/productApiSlice.js"
import { Spinner } from "react-bootstrap"
import Message from "../components/Message.jsx"

const HomeScreen = () => {
    const { data: products, isLoading, error } = useGetProductsQuery();

    return (
        <>
            {isLoading ? (
                <Spinner animation="border" className="justify-content-center" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>

            ) : error ? (
                <Message variant='danger'>{error?.data?.message || error.error}</Message>
            ) :
                (<div>
                    <h3 style={{ textAlign: 'center' }}>Latest Products</h3>
                    <Row>
                        {products.map((product) => (
                            <Col key={product._id} xs={6} sm={6} md={6} lg={4} xl={3}>
                                <ProductList product={product} />
                            </Col>
                        ))}
                    </Row>
                </div>)}


        </>
    )
}

export default HomeScreen