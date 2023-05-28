import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <div>
            <Link to="/">Home</Link>
            <Link to="/blogs">Blogs</Link>
        </div>
        <Link to="/blogs/create">Create Blog</Link>
    </div>
  )
}

export default Header