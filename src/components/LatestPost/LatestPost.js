import React from 'react'
import { graphql, StaticQuery, Link } from 'gatsby'

import Post from '../Post/Post'

const LatestPost = () => (
    <StaticQuery
        query={latestPostQuery}
        render={data => {
            const hasNews =
                data.allMarkdownRemark.edges &&
                data.allMarkdownRemark.edges.length
            return (
                <>
                    {hasNews ? (
                        <div className='my-3'>
                            <h2 className='font-heading text-xl text-center md:text-left subpixel-antialiased font-bold tracking-wide mb-3 p-3'>
                                Latest News
                            </h2>
                            <div className='block md:flex mb-4 justify-between flex-wrap'>
                                {data.allMarkdownRemark.edges.map(
                                    ({ node }) => (
                                        <>
                                            {node.frontmatter.publish ? (
                                                <Post
                                                    key={node.id}
                                                    title={
                                                        node.frontmatter.title
                                                    }
                                                    slug={node.fields.slug}
                                                    fluid={
                                                        node.frontmatter
                                                            .featuredImage
                                                            .childImageSharp
                                                            .fluid
                                                    }
                                                />
                                            ) : null}
                                        </>
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

export const latestPostQuery = graphql`
    query {
        allMarkdownRemark(
            filter: {
                fileAbsolutePath: { regex: "/(news|reviews)/.*\\\\.md$/" }
            }
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

export default LatestPost
