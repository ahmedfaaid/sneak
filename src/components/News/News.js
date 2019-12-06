import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

const News = ({ title, path, fluid }) => {
    return (
        <div className='lg:max-w-xs overflow-hidden md:w-2/5 lg:w-1/3 mx-3 mb-3 shadow-md md:shadow-none'>
            <Img className='w-full md:w-10/12 mx-auto' fluid={fluid} />
            <div className='md:px-6 py-4'>
                <h3 className='font-heading text-lg subpixel-antialiased mb-2'>
                    {title}
                </h3>
            </div>
            <Link
                className='text-primary hover:text-secondary hover:underline md:ml-6'
                to={path}
            >
                Read more <span>&rarr;</span>
            </Link>
        </div>
    )
}

export default News
