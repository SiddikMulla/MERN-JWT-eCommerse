import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
export const Header = () => {
    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="md" collapseOnSelect>
                <Container>
                    <Navbar.Brand href='/'>Albatross</Navbar.Brand>
                    <Navbar.Toggle aria-controls='basic-navbar-nav' />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='ms=auto mx-5    '>
                            <Nav.Link href='/cart'><FaShoppingCart /> Cart</Nav.Link>
                            <Nav.Link href='/login'><FaUser /> Sign In</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}
