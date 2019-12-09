import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className='bg-secondary py-6 text-center'>
            <div className='container md:flex md:justify-between'>
                <div>
                    <p className='text-white font-heading font-light'>
                        &copy; {year} Sneakersseur
                    </p>
                </div>
                <div>
                    <ul className='flex justify-center mt-3 md:mt-0'>
                        <li>
                            <a
                                href='https://instagram.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-white hover:text-ig text-lg mx-3'
                            >
                                <i className='fab fa-instagram'></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://twitter.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-white hover:text-twitter text-lg mx-3'
                            >
                                <i className='fab fa-twitter'></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://facebook.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-white hover:text-facebook text-lg mx-3'
                            >
                                <i className='fab fa-facebook-f'></i>
                            </a>
                        </li>
                        <li>
                            <a
                                href='https://youtube.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-white hover:text-youtube text-lg mx-3'
                            >
                                <i className='fab fa-youtube'></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
