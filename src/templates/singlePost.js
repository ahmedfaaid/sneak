import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { slugify } from '../util/utilityFunctions'
import './singlePost.css'

const singlePost = ({ data }) => {
  const post = data.markdownRemark.frontmatter
  const image = post.featuredImage.childImageSharp.resize.src
  const author = post.author
  return (
    <Layout>
      <SEO title={post.title} image={image} author={author} post />
      <h1 className='font-heading text-3xl text-center subpixel-antialiased font-bold tracking-wide my-3 p-3'>
        {post.title}
      </h1>
      <hr />
      <div className='w-full md:w-3/4 mx-auto mt-10 px-0 md:px-8'>
        <Img
          fluid={post.featuredImage.childImageSharp.fluid}
          className='object-contain'
        />
        <div className='my-10 smMax:text-center'>
          <p className='mb-2 font-body text-base text-gray-500'>{post.date}</p>
          <h3 className='mb-3 font-body text-base text-white bg-primary inline-block p-1 rounded'>
            {post.author}
          </h3>
          <hr />
          <div
            className='news-link mt-10 mb-6 font-body leading-loose text-left'
            dangerouslySetInnerHTML={{
              __html: data.markdownRemark.html
            }}
          />
          <div className='px-6 py-4 text-left'>
            <span className='mr-3'>
              <i className='fas fa-tags mr-1'></i>Tags:
            </span>
            {post.tags.map(tag => (
              <Link to={`/tag/${slugify(tag)}`} key={tag}>
                <span className='inline-block bg-primary rounded-full px-1 sm:px-3 py-1 text-xs sm:text-sm font-semibold text-white mr-2'>
                  {tag}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query postBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        author
        date(formatString: "MMM Do YYYY")
        tags
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800, maxHeight: 500, quality: 80) {
              ...GatsbyImageSharpFluid
            }
            resize(width: 800) {
              src
            }
          }
        }
      }
    }
  }
`

export default singlePost
