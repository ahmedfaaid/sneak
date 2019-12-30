import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'

import Review from '../Reviews/Review'

const LatestReviews = () => (
    <StaticQuery
        query={latestReviewQuery}
        render={data => {
            const hasReviews = data.allMarkdownRemark.edges && data.allMarkdownRemark.edges.length
            
            return (
                <>
                    {hasReviews ? (
                        <div className='my-3'>
                            <h2 className='font-heading text-xl text-center md:text-left subpixel-antialiased font-bold tracking-wide mb-3 p-3'>
                                Latest Reviews
                            </h2>
                            <div className='block md:flex mb-4 justify-between flex-wrap'>
                                {data.allMarkdownRemark.edges.map(
                                    ({ node }) => (
                                        <>
                                            {node.frontmatter.publish ? (
                                                <Review
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
                                    )
                                )}
                            </div>
                            <div class='block text-center md:flex md:justify-end'>
                                <Link
                                    to='/reviews'
                                    class='text-primary hover:text-secondary text-lg block font-semibold font-body py-2 px-4'
                                >
                                    More Reviews <span>&rarr;</span>
                                </Link>
                            </div>
                        </div>
                    ) : null}
                </>
            )
        }}
    />
)

const latestReviewQuery = graphql`
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

export default LatestReviews
