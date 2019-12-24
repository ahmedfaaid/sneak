import React, { useState } from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
    const [navOpen, setNavOpen] = useState(false)

    const toggleNav = e => {
        setNavOpen(!navOpen)
    }

    return (
        <nav className='bg-primary py-6'>
            <div className='block md:hidden ml-6'>
                <button
                    onClick={toggleNav}
                    className='menu-btn flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-secondary'
                >
                    <svg
                        className='fill-current h-3 w-3'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <title>Menu</title>
                        <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
                    </svg>
                </button>
            </div>
            <div
                className={`${
                    navOpen ? `block` : `hidden`
                } container md:flex justify-between smMax:-ml-6 smMax:mt-2`}
            >
                <ul>
                    <li className='bg-primary mx-4'>
                        <Link
                            to='/'
                            className='text-white md:hover:bg-secondary text-lg font-body font-light md:font-base md:p-3 smMax:mb-4 rounded-lg'
                        >
                            Home
                        </Link>
                    </li>
                </ul>
                <ul className='block md:flex'>
                    <li className='bg-primary mx-4'>
                        <Link
                            to='/news'
                            className='text-white md:hover:bg-secondary text-lg font-body font-light md:font-base md:p-3 smMax:mb-4 rounded-lg'
                        >
                            News
                        </Link>
                    </li>
                    <li className='bg-primary mx-4'>
                        <Link
                            to='/reviews'
                            className='text-white md:hover:bg-secondary text-lg font-body font-light md:font-base md:p-3 smMax:mb-4 rounded-lg'
                        >
                            Reviews
                        </Link>
                    </li>
                    <li className='bg-primary mx-4'>
                        <Link
                            to='/releses'
                            className='text-white md:hover:bg-secondary text-lg font-body font-light md:font-base md:p-3 smMax:mb-4 rounded-lg'
                        >
                            Releases
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
