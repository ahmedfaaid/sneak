import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const Instagram = () => (
    <div className='hidden sm:block mt-6'>
        <h2 className='font-heading text-xl text-center text-secondary subpixel-antialiased font-bold tracking-wide px-3 mb-3'>
            Instagram Feed
        </h2>
        <StaticQuery
            query={instagramQuery}
            render={data => {
                const igData = data.allInstaNode.edges
                return igData.map(({ node }) => (
                    <a
                        href={`https://instagram.com/p/${node.id}`}
                        target='_blank'
                        rel='noopener noreferrer'
                        key={node.id}
                    >
                        <div className='mb-4 border-transparent border hover:border-primary'>
                            <Img fluid={node.localFile.childImageSharp.fluid} />
                        </div>
                    </a>
                ))
            }}
        />
    </div>
)

const instagramQuery = graphql`
    query {
        allInstaNode(sort: { order: DESC, fields: timestamp }, limit: 4) {
            edges {
                node {
                    id
                    localFile {
                        childImageSharp {
                            fluid(maxWidth: 350) {
                                ...GatsbyImageSharpFluid
                            }
                        }
                    }
                    caption
                }
            }
        }
    }
`

export default Instagram
