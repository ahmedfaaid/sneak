import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

import HeroFeature from '../components/HeroFeature/HeroFeature'
import LatestPost from '../components/LatestPost/LatestPost'

const IndexPage = () => (
    <Layout>
        <SEO title='Home' />
        <HeroFeature />
        <LatestPost />
    </Layout>
)

export default IndexPage
