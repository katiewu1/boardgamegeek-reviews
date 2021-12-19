import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderNavbar = () => {
  return (
    <>
      <header>
        <h1>BoardGameGeek Reviews</h1>
        <p>dataset by Jesse van Elteren from kaggle</p>
      </header>
      <nav className='navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/boardgames'>All reviews</NavLink> {/* explore? */}
        <NavLink to='/boardgames/random'>Random</NavLink>
        <NavLink to='/ranked'>Top-ranking</NavLink>
      </nav>
    </>
  )
}

export default HeaderNavbar
