import React from 'react'
import img from '../assets/404.png'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

export const Page404 = () => {
  return (
    <>
      <div style={{ textAlign: 'center' }}>

        <img src={img} alt="" className='img-fluid' />

        <Link to='/' style={{ color: 'Green ' }}><p className="h3">Click to Back Home</p></Link>
      </div>
    </>
  )
}
