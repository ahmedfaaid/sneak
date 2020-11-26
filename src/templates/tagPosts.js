import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import Post from '../components/Post/Post'

const singleTag = ({ data, pageContext }) => {
  const { tag } = pageContext
  const { totalCount } = data.allMarkdownRemark
  const pageHeader = `${totalCount} post${totalCount === 1 ? '' : 's'}`
  return (
    <Layout>
      <SEO title={`Tag: ${tag}`} />
      <h1 className='font-heading text-3xl text-center subpixel-antialiased font-bold tracking-wide my-3 p-3'>
        {tag}
      </h1>
      <hr />
      <div className='block md:flex mb-4 justify-between flex-wrap mt-10'>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <Post
            key={node.id}
            slug={node.fields.slug}
            title={node.frontmatter.title}
            fluid={node.frontmatter.featuredImage.childImageSharp.fluid}
          />
        ))}
      </div>
      <p className='font-body text-md text-gray-700 text-center mb-10'>
        {`${tag} has ${pageHeader}`}
      </p>
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
