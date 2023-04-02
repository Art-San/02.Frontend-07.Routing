import React from 'react'
import { Link } from 'react-router-dom'
// ul>(li>a)*4

const NavBar = () => {
  return (
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/login">Login</Link>
        </li>
        <li>
            <Link to="/posts">Posts</Link>
        </li>
        <li>
            <Link to="/dashboard">Dashboard</Link>
        </li>
    </ul>
  )
}

export default NavBar
