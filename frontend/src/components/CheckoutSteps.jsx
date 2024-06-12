import React from 'react';
import { Nav, ProgressBar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './CheckoutSteps.css'; // Import the custom CSS

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
    const calculateProgress = () => {
        let progress = 0;
        if (step1) progress += 25;
        if (step2) progress += 25;
        if (step3) progress += 25;
        if (step4) progress += 25;
        return progress;
    }

    return (
        <div className="checkout-steps-container">
            <Nav className='justify-content-center mb-1 gap-3'> {/* Adjust the bottom margin here */}
                <Nav.Item>
                    {step1 ? (
                        <LinkContainer to='/login'>
                            <Nav.Link className="nav-link-dark">Sign In</Nav.Link>
                        </LinkContainer>
                    ) : (<Nav.Link className="nav-link-dark disabled">Sign In</Nav.Link>)}
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
            <ProgressBar now={calculateProgress()} className="checkout-progress-bar mt-1" variant='info' />
        </div>
    );
}

export default CheckoutSteps;
