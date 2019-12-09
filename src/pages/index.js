import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, Link } from 'gatsby'

import Review from '../components/Reviews/Review'
import News from '../components/News/News'

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
                        slug={node.fields.slug}
                        fluid={
                            node.frontmatter.featuredImage.childImageSharp.fluid
                        }
                    />
                ))}
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
        <hr />
        <div className='my-3'>
            <h2 className='font-heading text-xl text-center md:text-left subpixel-antialiased font-bold tracking-wide mb-3 p-3'>
                Latest News
            </h2>
            <div className='block md:flex mb-4 justify-between flex-wrap'>
                {data.news.edges.map(({ node }) => (
                    <News
                        key={node.id}
                        title={node.frontmatter.title}
                        slug={node.fields.slug}
                        fluid={
                            node.frontmatter.featuredImage.childImageSharp.fluid
                        }
                    />
                ))}
            </div>
            <div className='block text-center md:flex md:justify-end'>
                <Link
                    to='/news'
                    className='text-primary hover:text-secondary text-lg block font-semibold font-body py-2 px-4'
                >
                    More News <span>&rarr;</span>
                </Link>
            </div>
        </div>
    </Layout>
)

export const indexQuery = graphql`
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
        news: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/(news)/.*\\\\.md$/" } }
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

export default IndexPage
