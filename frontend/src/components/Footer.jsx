import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./Footer.css"
const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer className='bg-info text-white'>
            <Container>
                <Row>
                    <Col className='text-center py-1' >
                        <p>SidShop &copy; {currentYear} | All rights reserved</p>
                       
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer