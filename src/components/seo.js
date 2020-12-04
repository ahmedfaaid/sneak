import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useLocation } from '@reach/router'
import { useStaticQuery, graphql } from 'gatsby'

const siteQuery = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        defaultAuthor: author
        twitter
        siteUrl
      }
    }
    file(absolutePath: { regex: "/(/images/sneakersseur-logo).png/" }) {
      childImageSharp {
        fixed(width: 500) {
          defaultImage: src
        }
      }
    }
  }
`

function SEO({ description, lang, title, image, post, author }) {
  const { site, file } = useStaticQuery(siteQuery)
  const { pathname } = useLocation()

  const {
    defaultTitle,
    defaultDescription,
    defaultAuthor,
    twitter,
    siteUrl
  } = site.siteMetadata

  const { defaultImage } = file.childImageSharp.fixed

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
    author: author || defaultAuthor
  }

  return (
    <Helmet title={seo.title} htmlAttributes={{ lang }}>
      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />

      <meta name='twitter:card' content='summary_large_image' />

      {twitter && <meta name='twitter:creator' content={twitter} />}

      {seo.title && <meta name='twitter:title' content={seo.title} />}

      {seo.description && (
        <meta name='twitter:description' content={seo.description} />
      )}

      {seo.image && <meta name='twitter:image' content={seo.image} />}

      {seo.url && <meta property='og:url' content={seo.url} />}

      {(post ? true : null) && <meta property='og:type' content='article' />}

      {seo.title && <meta property='og:title' content={seo.title} />}

      {seo.description && (
        <meta property='og:description' content={seo.description} />
      )}

      {seo.image && <meta property='og:image' content={seo.image} />}
    </Helmet>
  )
}

SEO.defaultProps = {
  description: `Sneakersseur brings you all the latest sneaker news, reviews and release dates.`,
  lang: `en-CA`,
  title: `Sneakersseur | We bring you the latest in sneaker news, reviews and the upcoming releases.`,
  post: false
}

SEO.propTypes = {
  description: PropTypes.string.isRequired,
  lang: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  post: PropTypes.bool,
  author: PropTypes.string
}

export default SEO
