import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'

const singleTag = ({ data, pageContext }) => {
    return (
        <Layout>
            <SEO />
            <div className='lg:max-w-xs xl:max-w-sm overflow-hidden w-full md:w-2/5 lg:w-64 xl:w-2/4 md:mx-3 mb-3 shadow-md md:shadow-none'>
                <Link to={slug}>
                    <Img
                        className='w-full md:w-10/12 mx-auto image-height'
                        fluid={fluid}
                    />
                </Link>
                <div className='md:px-6 py-4'>
                    <Link to={slug}>
                        <h1 className='font-heading text-lg subpixel-antialiased mb-2'>
                            {title}
                        </h1>
                    </Link>
                </div>
                <Link
                    className='text-primary hover:text-secondary hover:underline md:ml-6'
                    to={slug}
                >
                    Read more <span>&rarr;</span>
                </Link>
            </div>
        </Layout>
    )
}

export const singleTagQuery = graphql`
    query($tag: String!) {
        allMarkdownRemark(
            sort: { fields: [frontmatter___date], order: DESC }
            filter: { frontmatter: { tags: { in: [$tag] } } }
        ) {
            totalCount
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "MMM Do YYYY")
                        featuredImage {
                            childImageSharp {
                                fluid(maxWidth: 800, maxHeight: 600) {
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

export default singleTag
