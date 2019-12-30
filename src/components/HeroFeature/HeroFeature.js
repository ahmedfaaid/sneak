import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { Link, graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import './HeroFeature.css'

const HeroFeature = () => (
    <StaticQuery
        query={heroFeatureQuery}
        render={data => {
            const heroImage = data.allMarkdownRemark.edges
            console.log(heroImage)

            return (
                <div className='w-full mx-auto mt-6'>
                    {heroImage.map(({ node }) => (
                        <>
                            {node.frontmatter.publish ? (
                                <Carousel showThumbs={false} showStatus={false}>
                                    <Link to={node.fields.slug}>
                                        <div
                                            key={node.id}
                                            className='relative border-b-8 border-light'
                                        >
                                            <div
                                                className='absolute top-0 left-0 bg-black w-full h-full opacity-25'
                                                style={{ zIndex: 1 }}
                                            />
                                            <Img
                                                fluid={
                                                    node.frontmatter
                                                        .featuredImage
                                                        .childImageSharp.fluid
                                                }
                                            />
                                            <h3
                                                className='hero-text font-heading font-bold text-xl lg:text-2xl text-center subpixel-antialiased mb-2 text-white tracking-wide border-b-2 border-transparent hover:border-primary'
                                                style={{ zIndex: 2 }}
                                            >
                                                {node.frontmatter.title}
                                            </h3>
                                        </div>
                                    </Link>
                                </Carousel>
                            ) : null}
                        </>
                    ))}
                </div>
            )
        }}
    />
)

export const heroFeatureQuery = graphql`
    query {
        allMarkdownRemark(
            filter: {
                frontmatter: { feature: { eq: true } }
                fileAbsolutePath: { regex: "/(news|reviews)/.*\\\\.md$/" }
            }
        ) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        featuredImage {
                            childImageSharp {
                                fluid(maxWidth: 600, maxHeight: 400) {
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

export default HeroFeature
