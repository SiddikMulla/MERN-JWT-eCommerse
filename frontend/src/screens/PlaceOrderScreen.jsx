import FormContainer from "../components/FormContainer"
import CheckoutSteps from "../components/CheckoutSteps"
import { useEffect } from "react"
import { useNavigate, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap"


const PlaceOrderScreen = () => {
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart)

    useEffect(() => {
        if (!cart.shippingAddress.address) {
            navigate('/shipping')
        } else if (!cart.paymentMethod) {
            navigate('/payment')
        }
    }, [cart.shippingAddress.address, cart.paymentMethod, navigate])
    return (
        <>
            <CheckoutSteps step1 step2 step3 step4 />
            <FormContainer>
                <Row>
                    <Col md={8}>
                        column1
                    </Col>
                    <Col md={4}>
                        column2
                    </Col>
                </Row>
            </FormContainer>

        </>
    )
}

export default PlaceOrderScreen