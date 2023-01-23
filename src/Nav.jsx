import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
  return (
    <nav>
      <Link to="/movie-mate" className="home-btn">
        <h1>MovieMate</h1>
      </Link>
    </nav>
  )
}

export default Nav