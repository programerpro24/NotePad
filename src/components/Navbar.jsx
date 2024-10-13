import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-evenly'>
        <NavLink to='/' className='text-[25px] mt-4'>
            Home 
        </NavLink>

        <NavLink to='/pastes' className='text-[25px] mt-4' >
            Pastes
        </NavLink>
    </div>
  )
}

export default Navbar