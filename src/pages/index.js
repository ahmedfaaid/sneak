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
                    <div className="container">
                        {data.allMarkdownRemark.edges.map(({ node }) => (
                            <Review
                                key={node.id}
                                title={node.frontmatter.title}
                                author={node.frontmatter.author}
                                body={node.excerpt}
                            />
                        ))}
                    </div>
                )
            }}
        />
    </Layout>
)

const indexReviewsQuery = graphql`
    query indexReviewsQuery {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 3
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "MMM Do YYYY")
                        author
                    }
                    excerpt
                }
            }
        }
    }
`

export default IndexPage
