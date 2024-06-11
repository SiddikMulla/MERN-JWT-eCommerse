import { Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './CheckoutSteps.css'; // Import the custom CSS

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
    return (
        <Nav className='justify-content-center mb-3'>
            <Nav.Item>
                {step1 ? (
                    <LinkContainer to='/login'>
                        <Nav.Link className="nav-link-dark">Sign in</Nav.Link>
                    </LinkContainer>
                ) : (<Nav.Link className="nav-link-dark disabled">Sign in</Nav.Link>)}
            </Nav.Item>
            <Nav.Item>
                {step2 ? (
                    <LinkContainer to='/shipping'>
                        <Nav.Link className="nav-link-dark">Shipping</Nav.Link>
                    </LinkContainer>
                ) : (<Nav.Link className="nav-link-dark disabled">Shipping</Nav.Link>)}
            </Nav.Item>
            <Nav.Item>
                {step3 ? (
                    <LinkContainer to='/payment'>
                        <Nav.Link className="nav-link-dark">Payment</Nav.Link>
                    </LinkContainer>
                ) : (<Nav.Link className="nav-link-dark disabled">Payment</Nav.Link>)}
            </Nav.Item>
            <Nav.Item>
                {step4 ? (
                    <LinkContainer to='/placeorder'>
                        <Nav.Link className="nav-link-dark">Place Order</Nav.Link>
                    </LinkContainer>
                ) : (<Nav.Link className="nav-link-dark disabled">Place Order</Nav.Link>)}
            </Nav.Item>
        </Nav>
    );
}

export default CheckoutSteps;
