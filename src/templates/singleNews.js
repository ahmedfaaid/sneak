import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import { slugify } from '../util/utilityFunctions'

const singleNews = ({ data }) => {
    const news = data.markdownRemark.frontmatter
    return (
        <Layout>
            <SEO title={news.title} />
            <h1 className='font-heading text-3xl text-center subpixel-antialiased font-bold tracking-wide my-3 p-3'>
                {news.title}
            </h1>
            <hr />
            <div className='w-2/3 mx-auto mt-10 px-10'>
                <Img fluid={news.featuredImage.childImageSharp.fluid} />
                <div className='my-10'>
                    <p className='mb-2 font-body text-base text-gray-500'>
                        {news.date}
                    </p>
                    <h3 className='mb-3 font-body text-base text-white bg-primary inline-block p-1 rounded'>
                        {news.author}
                    </h3>
                    <hr />
                    <div
                        className='mt-10 mb-6 font-body leading-loose'
                        dangerouslySetInnerHTML={{
                            __html: data.markdownRemark.html
                        }}
                    />
                    <div className='px-6 py-4'>
                        <span className='mr-3'>
                            <i className='fas fa-tags mr-1'></i>Tags:
                        </span>
                        {news.tags.map(tag => (
                            <Link to={`/tag/${slugify(tag)}`} key={tag}>
                                <span className='inline-block bg-primary rounded-full px-3 py-1 text-sm font-semibold text-white mr-2'>
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

export const newsQuery = graphql`
    query newsBySlug($slug: String!) {
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
                        fluid(maxWidth: 800, maxHeight: 600) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

export default singleNews
