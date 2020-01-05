import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'
import './Post.css'

const Post = ({ title, slug, fluid }) => {
    return (
        <div className='lg:max-w-xs xl:max-w-sm overflow-hidden w-full md:w-2/5 lg:w-64 xl:w-2/4 md:mx-3 mb-3 shadow-md md:shadow-none'>
            <Link to={slug}>
                <Img
                    className='w-full md:w-10/12 mx-auto image-height'
                    fluid={fluid}
                />
            </Link>
            <div className='md:px-6 py-4'>
                <Link to={slug}>
                    <h1 className='font-heading text-lg subpixel-antialiased mb-2'>
                        {title}
                    </h1>
                </Link>
            </div>
            <Link
                className='text-primary hover:text-secondary hover:underline md:ml-6'
                to={slug}
            >
                Read more <span>&rarr;</span>
            </Link>
        </div>
    )
}

Post.propTypes = {
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    fluid: PropTypes.object.isRequired
}

export default Post