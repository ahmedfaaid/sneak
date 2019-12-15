import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import PropTypes from 'prop-types'

const Instagram = ({ data }) => {
    const ig = data.allInstaNode.edges
    console.log(ig)
    return (
        <div>
            {ig.map(({ node }) => (
                <Img
                    key={node.id}
                    fixed={node.localFile.childImageSharp.fixed}
                />
            ))}
        </div>
    )
}

export const instagramQuery = graphql`
    query {
        allInstaNode {
            edges {
                node {
                    id
                    localFile {
                        childImageSharp {
                            fixed(width: 150, height: 150) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
            }
        }
    }
`

Instagram.propTypes = {
    data: PropTypes.object
}

export default Instagram
