import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import PropTypes from 'prop-types'

import Post from '../components/Post/Post'

const NewsPage = ({ data }) => {
    const hasNews = data.allMarkdownRemark.edges
    return (
        <Layout>
            <SEO
                title='News'
                description="Find out the latest in sneaker news at Sneakersseur. From the latest Lebrons to Jordans to Yeezys. We'll bring you the latest scoop."
            />
            <div className='my-3'>
                <h1 className='font-heading text-xl text-center md:text-left subpixel-antialiased font-bold tracking-wide mb-3 p-3'>
                    Sneaker News
                </h1>
                <p className='font-body text-xl text-gray-700 text-center mb-10'>
                    What's new in the world of sneakers? Sneakersseur got you
                    covered
                </p>
                <hr />
                {hasNews && hasNews.length > 0 ? (
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
                    <p className='font-body text-lg text-secondary'>
                        Sorry. We have no news for you. Check back later.
                    </p>
                )}
            </div>
        </Layout>
    )
}

export const newsQuery = graphql`
    query {
        allMarkdownRemark(
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

NewsPage.propTypes = {
    data: PropTypes.object.isRequired
}

export default NewsPage
