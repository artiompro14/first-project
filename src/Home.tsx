import React from 'react'
import { Link } from 'react-router-dom'

const Home: React.FC = () => {
  return (
    <>
      <nav>
        <Link to="/lucrari">Lucrarile mele</Link>
        <Link to="/contact">contacteaza-ma</Link>
      </nav>
      <h1>Portofoliul meu</h1>
      <p>Buna! ma numesc Artiom.</p>
      <p>Sunt in clasa a 3-a.</p>
      <p>Si asta este portofoliul meu!</p>
      <h2>Artiom Procopenco</h2>
      <img className="home-page-image" src="artiom.jpg" alt="Poza mea"/>
    </>
  )
}

export default Home