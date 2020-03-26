import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Post from '../components/Post/Post'

const ReviewsPage = ({ data }) => {
    const hasReviews = data.allMarkdownRemark.edges
    return (
        <Layout>
            <SEO
                title='Reviews'
                description='Find out what we think about the latest sneakers. From Jordans to Yeezys we have an opinion.'
            />
            <div className='my-3'>
                <h1 className='font-heading text-xl text-center md:text-left subpixel-antialiased font-bold tracking-wide mb-3 p-3'>
                    Sneaker Reviews
                </h1>
                <p className='font-body text-xl text-gray-700 text-center mb-10'>
                    See what we have to say. From the most popular to the rare
                    gems in the sneaker world
                </p>
                <hr />
                {hasReviews && hasReviews.length > 0 ? (
                    <div className='block md:flex mb-4 justify-between flex-wrap mt-10'>
                        {data.allMarkdownRemark.edges.map(({ node }) => (
                            <>
                                {node.frontmatter.publish ? (
                                    <Post
                                        key={node.id}
                                        title={node.frontmatter.title}
                                        slug={node.fields.slug}
                                        fluid={
                                            node.frontmatter.featuredImage
                                                .childImageSharp.fluid
                                        }
                                    />
                                ) : null}
                            </>
                        ))}
                    </div>
                ) : (
                    <p className='font-body font-bold text-xl mt-6 p-3'>
                        Sorry. We have no reviews for you. Check back later.
                    </p>
                )}
            </div>
        </Layout>
    )
}

export const reviewsQuery = graphql`
    query {
        allMarkdownRemark(
            filter: {
                fileAbsolutePath: { regex: "/(reviews)/.*\\\\.md$/" }
                frontmatter: { publish: { eq: true } }
            }
            sort: { fields: [frontmatter___date], order: DESC }
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
                        publish
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
