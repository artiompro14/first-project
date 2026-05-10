import React from 'react'
import { Link } from 'react-router-dom'

const Contact: React.FC = () => {
  return (
    <>
      <video width="640" height="360" controls>
        <source src="video/meau.mp4" type="video/mp4" />
      </video>
      <video width="640" height="360" controls>
        <source src="video/burp.mp4" type="video/mp4" />
      </video>
      <p>numar de telefon:078177879</p>
      <nav>
        <Link to="/lucrari">Lucrarile mele</Link>
        <Link to="/">Portofoliul meu</Link>
      </nav>
      <h1>Contacteaza-ma</h1>
    </>
  )
}

export default Contact