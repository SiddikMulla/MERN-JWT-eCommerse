import React from 'react'
import img from '../assets/404.png'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export const Page404 = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>

        <img src={img} alt="" className='img-fluid' />
        <br />
        <Link to='/' style={{ color: 'Green', textDecoration: 'none' }}><Button variant="outline-primary ">Back to Home</Button></Link>
      </div>
    </>
  )
}
