import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
    <Layout>
        <SEO title='404: Not found' />
        <h1 className='font-heading text-xl text-center md:text-left subpixel-antialiased font-bold tracking-wide mb-3 p-3'>
            NOT FOUND
        </h1>
        <p className='font-body text-lg text-secondary'>
            Oops this page does not exist
        </p>
    </Layout>
)

export default NotFoundPage
