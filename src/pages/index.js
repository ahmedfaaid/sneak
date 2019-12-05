import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, StaticQuery } from 'gatsby'

import Review from '../components/Reviews/Review'

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <StaticQuery
            query={indexReviewsQuery}
            render={data => {
                return (
                    <div className="my-3">
                        <div class="block md:flex mb-4 justify-between flex-wrap">
                            {data.allMarkdownRemark.edges.map(({ node }) => (
                                <Review
                                    key={node.id}
                                    title={node.frontmatter.title}
                                />
                            ))}
                        </div>
                    </div>
                )
            }}
        />
    </Layout>
)

const indexReviewsQuery = graphql`
    query indexReviewsQuery {
        allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/(reviews)/.*\\\\.md$/" } }
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 3
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                    }
                }
            }
        }
    }
`

export default IndexPage
