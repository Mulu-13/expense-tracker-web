import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex flex-row gap-3'>
        <NavLink>
            <div>
                Home
            </div>
        </NavLink>
        <NavLink>
            <div>
                Outside
            </div>
        </NavLink>
    </nav>
  )
}

export default Navbar
