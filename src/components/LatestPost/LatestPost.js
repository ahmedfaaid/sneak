import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import Post from '../Post/Post'

const LatestPost = () => (
    <StaticQuery
        query={latestPostQuery}
        render={data => {
            return (
                <div className='my-3'>
                    <h2 className='font-heading text-xl text-center md:text-left subpixel-antialiased font-bold tracking-wide mb-3 p-3'>
                        Latest Posts
                    </h2>
                    <div className='block md:flex mb-4 justify-between flex-wrap'>
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
                </div>
            )
        }}
    />
)

export const latestPostQuery = graphql`
    query {
        allMarkdownRemark(
            filter: {
                fileAbsolutePath: { regex: "/(news|reviews)/.*\\\\.md$/" }
                frontmatter: { publish: { eq: true } }
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
