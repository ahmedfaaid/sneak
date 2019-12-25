import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import HeroFeature from '../components/HeroFeature/HeroFeature'
import LatestReviews from '../components/LatestReviews/LatestReviews'
import LatestNews from '../components/LatestNews/LatestNews'

const IndexPage = () => (
    <Layout>
        <SEO title='Home' />
        <HeroFeature />
        <LatestNews />
        <hr />
        <LatestReviews />
    </Layout>
)

export default IndexPage
