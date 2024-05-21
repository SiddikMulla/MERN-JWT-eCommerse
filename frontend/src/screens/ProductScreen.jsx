import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { HiArrowCircleLeft } from "react-icons/hi";
import { Row, Col, Image, ListGroup, Card, Button, ListGroupItem } from 'react-bootstrap'
import Rating from '../components/Rating'
import Swal from 'sweetalert2'
import axios from 'axios';

const ProductScreen = () => {
    const [product, setProduct] = useState({})

    const swal = () => {
        Swal.fire({
            title: "Added!",
            text: "Product Added to Cart!",
            icon: "success"
        });
    }
    const { id: productId } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            const { data } = await axios.get(`/api/products/${productId}`)
            setProduct(data)
        }
        fetchProduct();
    }, [productId])


    return (

        <>
            <Link className='btn btn-light mb-3' to="/">
                <HiArrowCircleLeft /> Go Back
            </Link>

            <Row>
                <Col md={5}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>

                <Col md={4}>
                    <ListGroup variant='flush'>
                        <ListGroupItem>
                            <h3>{product.name}</h3>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Rating
                                value={product.rating}
                                text={`${product.numReviews} reviews`}
                            />
                        </ListGroupItem>
                        <ListGroupItem>
                            Price:${product.price}
                        </ListGroupItem>
                        <ListGroupItem>
                            Desciption:`{product.description}
                        </ListGroupItem>
                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroupItem>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>${product.price}</Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>{product.countInStock > 0 ? "In the stock" : "Out of Stock"}</Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Button
                                    className='btn-block'
                                    type='submit'
                                    disabled={product.countInStock === 0}
                                    onClick={swal}
                                >
                                    Add to Cart
                                </Button>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ProductScreen