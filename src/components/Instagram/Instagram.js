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
                    <div key={node.id} className='mb-4'>
                        <Img fluid={node.localFile.childImageSharp.fluid} />
                        <span className='font-heading text-md text-center text-secondary max-w-full pt-2'>
                            {node.caption.substring(0, 20)}...
                        </span>
                    </div>
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
                            fluid(maxWidth: 200) {
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
