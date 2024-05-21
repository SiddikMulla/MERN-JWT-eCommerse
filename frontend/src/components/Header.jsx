import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { LinkContainer } from 'react-router-bootstrap'
export const Header = () => {
    return (
        <header>
            <Navbar bg="info" variant='dark' expand="md" className='pos' collapseOnSelect>
                <Container>
                    <LinkContainer to="/" style={{ fontWeight: 500, letterSpacing: 3,fontSize:30}}>
                        <Navbar.Brand>
                            𝕾𝖎𝖉$𝖙𝖔𝖗𝖊
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
