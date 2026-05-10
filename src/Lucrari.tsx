import React from 'react'
import { Link } from 'react-router-dom'

const Lucrari: React.FC = () => {
  return (
    <>
      <nav>
        <Link to="/">Portofoliul meu</Link>
        <Link to="/contact">contacteaza-ma</Link>
      </nav>
      <h1>Lucrarile mele</h1>
      <p>Buna! Acestea sunt lucrarile mele.</p>
      <img src="image.png" alt="lucrarile mele"/>
    </>
  )
}

export default Lucrari