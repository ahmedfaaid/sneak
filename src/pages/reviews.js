import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Review from '../components/Reviews/Review'

const ReviewsPage = ({ data }) => (
    <Layout>
        <SEO title='Reviews' />
        <div className='my-3'>
            <h1 className='font-heading text-xl text-center md:text-left subpixel-antialiased font-bold tracking-wide mb-3 p-3'>
                Sneaker Reviews
            </h1>
            <p className='font-body text-xl text-gray-700 text-center mb-10'>
                See what we have to say. From the most popular to the rare gems
                in the sneaker world
            </p>
            <hr />
            <div className='block md:flex mb-4 justify-between flex-wrap mt-10'>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                    <Review
                        key={node.id}
                        title={node.frontmatter.title}
                        slug={node.fields.slug}
                        fluid={
                            node.frontmatter.featuredImage.childImageSharp.fluid
                        }
                    />
                ))}
            </div>
        </div>
    </Layout>
)

export const reviewsQuery = graphql`
    query {
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
                        featuredImage {
                            childImageSharp {
                                fluid(maxWidth: 800) {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                    fields {
                        slug
                    }
                }
            }
        }
    }
`

ReviewsPage.propTypes = {
    data: PropTypes.object.isRequired
}

export default ReviewsPage
