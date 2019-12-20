import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import LatestReviews from '../components/LatestReviews/LatestReviews'
import LatestNews from '../components/LatestNews/LatestNews'

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title='Home' />
        <LatestReviews />
        <hr />
        <LatestNews />
    </Layout>
)

export default IndexPage
