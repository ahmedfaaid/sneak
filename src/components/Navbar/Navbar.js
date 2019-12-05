import React from 'react'
import { Link } from 'gatsby'

const Navbar = () => {
    return (
        <nav className="bg-primary py-6">
            <div className="block md:hidden ml-6">
                <button className="menu-btn flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-secondary">
                    <svg
                        className="fill-current h-3 w-3"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                </button>
            </div>
            <div className="container md:flex justify-between smMax:-ml-6 smMax:mt-2 nav-list">
                <ul>
                    <li className="bg-primary">
                        <Link
                            to="/"
                            className="text-white md:hover:bg-secondary text-xl font-body font-light md:font-base md:p-3 smMax:mb-4 rounded-lg"
                        >
                            Home
                        </Link>
                    </li>
                </ul>
                <ul className="block md:flex">
                    <li className="bg-primary lg:mr-10">
                        <Link
                            to="/reviews"
                            className="text-white md:hover:bg-secondary text-xl font-body font-light md:font-base md:p-3 smMax:mb-4 rounded-lg"
                        >
                            Reviews
                        </Link>
                    </li>
                    <li className="bg-primary">
                        <Link
                            to="/news"
                            className="text-white md:hover:bg-secondary text-xl font-body font-light md:font-base md:p-3 smMax:mb-4 rounded-lg"
                        >
                            News
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
