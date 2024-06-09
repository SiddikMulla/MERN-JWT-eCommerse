import React from 'react'
import { Badge, Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { FaShoppingCart, FaUser } from 'react-icons/fa'
import { LinkContainer } from 'react-router-bootstrap'
import { useSelector } from 'react-redux'

export const Header = () => {
    const { cartItems } = useSelector((state) => state.cart)
    const { userInfo } = useSelector((state) => state.auth)

    const logoutHandler = () => {
        console.log('Logged Out')
    }

    return (
        <header>
            <Navbar bg="dark" variant='dark' expand="md" className='pos' collapseOnSelect>
                <Container>
                    <LinkContainer to="/" style={{ fontWeight: 500, letterSpacing: 3, fontSize: 30 }}>
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
                                    {
                                        cartItems.length > 0 && (
                                            <Badge pill bg='secondary' style={{ marginLeft: "2px" }}>
                                                {cartItems.reduce((a, c) => a + c.qty, 0)}
                                            </Badge>
                                        )
                                    }
                                </Nav.Link>
                            </LinkContainer>
                            {userInfo ? (
                                <NavDropdown title={userInfo.name} id='username'>
                                    <LinkContainer to='/profile'>
                                        <NavDropdown.Item>
                                            Profile
                                        </NavDropdown.Item>
                                    </LinkContainer>
                                    <NavDropdown.Item onClick={logoutHandler}>
                                        Logout
                                    </NavDropdown.Item>
                                </NavDropdown>

                            ) : (<LinkContainer to="/login">
                                <Nav.Link>
                                    <FaUser />  Sign In
                                </Nav.Link>
                            </LinkContainer>)}

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar >
        </header >
    )
}
