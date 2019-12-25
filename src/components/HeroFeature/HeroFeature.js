import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import { graphql, StaticQuery } from 'gatsby'
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
                <div className='w-4/5 mx-auto mt-6'>
                    <Carousel showThumbs={false}>
                        {heroImage.map(({ node }) => (
                            <div key={node.id} className='relative'>
                                <div
                                    className='absolute top-0 left-0 bg-black w-full h-full opacity-25'
                                    style={{ zIndex: 1 }}
                                />
                                <Img
                                    fluid={
                                        node.frontmatter.featuredImage
                                            .childImageSharp.fluid
                                    }
                                />
                                <h3
                                    className='hero-text font-heading font-bold text-2xl subpixel-antialiased mb-2 text-white tracking-wide'
                                    style={{ zIndex: 2 }}
                                >
                                    {node.frontmatter.title}
                                </h3>
                            </div>
                        ))}
                    </Carousel>
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
                    }
                }
            }
        }
    }
`

export default HeroFeature
