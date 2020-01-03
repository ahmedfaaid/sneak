/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, lang, meta, title, image }) {
    const { site, ogImage } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                        twitter
                        siteUrl
                    }
                }
                ogImage: file(
                    absolutePath: { regex: "/images/sneakersseur-logo/" }
                ) {
                    childImageSharp {
                        fixed(width: 500) {
                            src
                        }
                    }
                }
            }
        `
    )

    // ogImageDefault: file(absolutePath: { regex: "/assets/og-image/" }) {

    const ogTitle = title ? `${title} ${site.siteMetadata.title}` : site.siteMetadata.title    
    const metaDescription = description || site.siteMetadata.description
    const metaImage =
        site.siteMetadata.siteUrl.concat(image) ||
        site.siteMetadata.siteUrl.concat(ogImage.childImageSharp.fixed.src)

    console.log(metaImage)

    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            title={title}
            titleTemplate={title && `%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: `description`,
                    content: metaDescription
                },
                {
                    property: `og:title`,
                    content: ogTitle
                },
                {
                    property: `og:description`,
                    content: metaDescription
                },
                {
                    property: `og:type`,
                    content: `website`
                },
                {
                    property: `og:image`,
                    content: metaImage
                },
                {
                    name: `twitter:card`,
                    content: `summary`
                },
                {
                    name: `twitter:creator`,
                    content: site.siteMetadata.twitter
                },
                {
                    name: `twitter:title`,
                    content: ogTitle
                },
                {
                    name: `twitter:description`,
                    content: metaDescription
                },
                {
                    name: `twitter:image`,
                    content: metaImage
                },
                {
                    name: `twitter:site`,
                    content: site.siteMetadata.twitter
                }
            ].concat(meta)}
        />
    )
}

SEO.defaultProps = {
    lang: `en-CA`,
    meta: [],
    description: ``
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired
}

export default SEO
