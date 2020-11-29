import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../../images/sneakersseur-logo-transparent.png'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false)

  const toggleNav = e => {
    setNavOpen(!navOpen)
  }

  const linkClasses =
    'border-b border-transparent md:hover:border-primary md:hover:text-primary text-md font-body font-light md:font-base md:p-3'

  return (
    <nav className='bg-gray-200 py-6'>
      <div className='flex md:hidden justify-between ml-6 mr-4'>
        <button
          onClick={toggleNav}
          className='menu-btn flex items-center px-3 py-2 border-white'
        >
          <svg
            className='fill-current h-4 w-4'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
        <div className='md:hidden w-48'>
          <Link to='/'>
            <img src={logo} alt='Sneakersseur' className='w-full' />
          </Link>
        </div>
      </div>
      <div
        className={`${
          navOpen ? `block` : `hidden`
        } container md:flex justify-between smMax:-ml-6 smMax:mt-2`}
      >
        <div className='hidden md:block w-48'>
          <Link to='/'>
            <img src={logo} alt='Sneakersseur' className='w-full' />
          </Link>
        </div>
        <ul className='md:hidden'>
          <li className='smMax:mb-3'>
            <Link to='/' className={linkClasses}>
              Home
            </Link>
          </li>
        </ul>
        <ul className='block md:flex'>
          <li className='mr-4 smMax:mb-3'>
            <Link to='/news' className={linkClasses}>
              News
            </Link>
          </li>
          <li className='mr-4 smMax:mb-3'>
            <Link to='/reviews' className={linkClasses}>
              Reviews
            </Link>
          </li>
          <li className='smMax:mb-3'>
            <Link to='/releases' className={linkClasses}>
              Releases
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
