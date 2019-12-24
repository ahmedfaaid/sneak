import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'

import News from '../News/News'

const LatestNews = () => (
    <StaticQuery
        query={latestNewsQuery}
        render={data => {
            const hasNews = data.allMarkdownRemark.edges
            return (
                <>
                    {hasNews && hasNews.length > 0 ? (
                        <div className='my-3'>
                            <h2 className='font-heading text-xl text-center md:text-left subpixel-antialiased font-bold tracking-wide mb-3 p-3'>
                                Latest News
                            </h2>
                            <div className='block md:flex mb-4 justify-between flex-wrap'>
                                {data.allMarkdownRemark.edges.map(
                                    ({ node }) => (
                                        <News
                                            key={node.id}
                                            title={node.frontmatter.title}
                                            slug={node.fields.slug}
                                            fluid={
                                                node.frontmatter.featuredImage
                                                    .childImageSharp.fluid
                                            }
                                        />
                                    )
                                )}
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
                    ) : null}
                </>
            )
        }}
    />
)

export const latestNewsQuery = graphql`
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
                    fields {
                        slug
                    }
                }
            }
        }
    }
`

export default LatestNews
