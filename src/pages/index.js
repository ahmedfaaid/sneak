import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'

import Review from '../components/Reviews/Review'

const IndexPage = ({ data }) => (
    <Layout>
        <SEO title='Home' />
        <div className='my-3'>
            <h2 className='font-heading text-xl text-center md:text-left subpixel-antialiased font-bold tracking-wide mb-3 p-3'>
                Latest Reviews
            </h2>
            <div className='block md:flex mb-4 justify-between flex-wrap'>
                {data.reviews.edges.map(({ node }) => (
                    <Review
                        key={node.id}
                        title={node.frontmatter.title}
                        path={node.frontmatter.path}
                        fluid={
                            node.frontmatter.featuredImage.childImageSharp.fluid
                        }
                    />
                ))}
            </div>
        </div>
    </Layout>
)

export const indexReviewsQuery = graphql`
    query {
        reviews: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/(reviews)/.*\\\\.md$/" } }
            sort: { fields: [frontmatter___date], order: DESC }
            limit: 3
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        path
                        featuredImage {
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`

export default IndexPage
