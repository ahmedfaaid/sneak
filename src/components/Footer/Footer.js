import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className='bg-secondary py-6 text-center absolute bottom-0 left-0 right-0'>
            <div className='container md:flex md:justify-between'>
                <div>
                    <p className='text-white font-heading font-light'>
                        &copy; {year} Sneakersseur
                    </p>
                </div>
                <div>
                    <ul className='flex justify-center mt-3 md:mt-0'>
                        <li>
                            <Link
                                to='https://instagram.com'
                                className='text-white hover:text-ig text-lg mx-3'
                            >
                                <i className='fab fa-instagram'></i>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='https://twitter.com'
                                className='text-white hover:text-twitter text-lg mx-3'
                            >
                                <i className='fab fa-twitter'></i>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='https://facebook.com'
                                className='text-white hover:text-facebook text-lg mx-3'
                            >
                                <i className='fab fa-facebook-f'></i>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='https://youtube.com'
                                className='text-white hover:text-youtube text-lg mx-3'
                            >
                                <i className='fab fa-youtube'></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
