import { Link, useNavigate } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Form, Button, ListGroupItem } from 'react-bootstrap'
import { FaTrash } from 'react-icons/fa'
import Message from '../components/Message'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../../slices/cartSlice'
import { HiArrowCircleLeft } from "react-icons/hi";
import { toast } from 'react-toastify'
import CheckoutSteps from '../components/CheckoutSteps'

const CartScreen = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const cart = useSelector((state) => state.cart);

    const { cartItems } = cart;
    const addToCartHandler = async (product, qty) => {
        dispatch(addToCart({ ...product, qty }))
    }

    const removeFromCartHandler = async (id) => {
        dispatch(removeFromCart(id))
        toast.error("Removed")
    }
    const checkoutHandler = () => {
        navigate('/login?redirect=/shipping');
    };


    return (
        <>
            <CheckoutSteps step1 />
            <Link className='btn btn-light my-3' to='/'>
                <HiArrowCircleLeft /> Go Back
            </Link>

            <Row>
                <Col md={8}>
                    <h1 style={{ marginBottom: "20px" }}>Shopping Cart</h1>
                    {cartItems.length === 0 ? (
                        <Message variant="warning">
                            Your cart is empty   <Link to="/" className='text text-dark'>  Go Back</Link>
                        </Message>
                    ) : (
                        <ListGroup variant='flush'>
                            {cartItems.map((item) => (
                                <ListGroup.Item key={item._id}>
                                    <Row>
                                        <Col md={2}>
                                            <Image src={item.image} alt={item.name} fluid rounded />
                                        </Col>
                                        <Col md={3}>
                                            <Link to={`/product/${item._id}`} className='text text-dark' style={{ textDecoration: 'none' }}>{item.name}</Link>
                                        </Col>
                                        <Col md={2}>
                                            ${item.price}
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control
                                                as='select'
                                                value={item.qty}
                                                onChange={(e) => addToCartHandler(item, Number(e.target.value))}
                                            >
                                                {[...Array(item.countInStock).keys()].map((x) => (
                                                    <option key={x + 1} value={x + 1}>
                                                        {x + 1}
                                                    </option>
                                                ))}
                                            </Form.Control>
                                        </Col>
                                        <Col md={3}>
                                            <Button type='button' variant='light' className="mt-1" onClick={() =>
                                                removeFromCartHandler(item._id)}>
                                                <FaTrash />
                                            </Button>
                                        </Col>
                                    </Row>
                                </ListGroup.Item>
                            ))}
                        </ListGroup>
                    )}
                </Col>
                <Col md={4}>
                    <ListGroup>
                        <ListGroup.Item>
                            <h3>
                                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
                            </h3>
                            ${cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button
                                type='button'
                                className='btn-block'
                                disabled={cartItems.length === 0}
                                onClick={checkoutHandler}
                                variant='dark'
                            >
                                Proceed To Checkout
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </>
    )
}

export default CartScreen
{/* <Link to='/' style={{ color: 'Green', textDecoration: 'none' }}><Button variant="outline-primary ">Back to Home</Button></Link> */ }