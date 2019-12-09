import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'

import News from '../components/News/News'

const NewsPage = ({ data }) => (
    <Layout>
        <SEO title='News' />
        <div className='my-3'>
            <h1 className='font-heading text-xl text-center md:text-left subpixel-antialiased font-bold tracking-wide mb-3 p-3'>
                Sneaker News
            </h1>
            <p className='font-body text-xl text-gray-700 text-center mb-10'>
                What's new in the world of sneakers? Sneakersseur got you
                covered
            </p>
            <hr />
            <div className='block md:flex mb-4 justify-between flex-wrap mt-10'>
                {data.allMarkdownRemark.edges.map(({ node }) => (
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
        </div>
    </Layout>
)

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
                    }
                }
            }
        }
    }
`

export default NewsPage
