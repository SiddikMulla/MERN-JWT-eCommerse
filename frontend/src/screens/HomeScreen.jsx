import { Row, Col } from "react-bootstrap"
import ProductList from '../components/ProductList'
import { useGetProductsQuery } from "../../slices/productApiSlice.js"

const HomeScreen = () => {
    const { data: products, isLoading, error } = useGetProductsQuery();

    return (
        <>
            {isLoading ? (
                <h1>Loading...</h1>
            ) : error ? (
                <div>{error?.data?.message || error.error}</div>
            ) :
                (<div>
                    <h3 style={{ textAlign: 'center' }}>Latest Products</h3>
                    <Row>
                        {products.map((product) => (
                            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                <ProductList product={product} />
                            </Col>
                        ))}
                    </Row>
                </div>)}


        </>
    )
}

export default HomeScreen