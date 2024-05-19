import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import "./Header.css"
import { LinkContainer } from 'react-router-bootstrap'
export const Header = () => {
    return (
        <header>
            <Navbar bg="info" variant='dark' expand="md" className='pos' collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand style={{ fontWeight: 800, letterSpacing: 3 }}>
                            SidShop
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='ms-auto'>

                            <LinkContainer to="/cart">
                                <Nav.Link>
                                    <FaShoppingCart />  Cart
                                </Nav.Link>
                            </LinkContainer>

                            <LinkContainer to="/login">
                                <Nav.Link>
                                    <FaUser />  Sign In
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
