import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const Releases = () => (
    <Layout>
        <SEO title='Releases' />
        <div className='my-3'>
            <h1 className='font-heading text-xl text-center md:text-left subpixel-antialiased font-bold tracking-wide mb-3 p-3'>
                Release Dates
            </h1>
            <p className='font-body text-xl text-gray-700 text-center mb-10'>
                Upcoming sneaker releases
            </p>
            <hr />
            <p className='font-body font-bold text-xl mt-6 p-3'>Coming soon</p>
        </div>
    </Layout>
)

export default Releases
